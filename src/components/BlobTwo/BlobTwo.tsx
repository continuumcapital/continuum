// import React, { useRef } from 'react'
// import * as THREE from 'three'
// import { Canvas, useFrame } from '@react-three/fiber'
// import CustomShaderMaterial from 'three-custom-shader-material'
// import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
// import * as blobShader from './Parts/shaders'
// import { Sphere } from '@react-three/drei'
// // import glsl from "babel-plugin-glsl/macro"
// // import * as glslRotate from "glsl-rotate";
// // import CustomShaderMaterial from 'three-custom-shader-material'

// // const WaveShaderMaterial = shaderMaterial(

// //   // Uniforms

// //   {
// //     // uColor: new THREE.Color( 0.0, 0.0, 0.0 ),
// //     uFrequency: { value: 1 },
// //     uAmplitude: { value: 0 },
// //     uDensity: { value: 0 },
// //     uStrength: { value: 0 },
// //     uDeepPurple: { value: 0 },
// //     uOpacity: { value: 1 }
// //   },

// //   // Vertex shader 

// //   glsl`
// //     #pragma glslify: pnoise = require(glsl-noise/periodic/3d)
// //     #pragma glslify: rotateY = require(glsl-rotate/rotateY)
    
// //     uniform float uFrequency;
// //     uniform float uAmplitude;
// //     uniform float uDensity;
// //     uniform float uStrength;
    
// //     varying float vDistortion;
    
// //     void main() {  
// //       float distortion = pnoise(normal * uDensity, vec3(10.)) * uStrength;
    
// //       vec3 pos = position + (normal * distortion);
// //       float angle = sin(uv.y * uFrequency) * uAmplitude;
// //       pos = rotateY(pos, angle);    
    
// //       vDistortion = distortion;
    
// //       gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
// //     }
// //   `,
  
// //   // Fragment shader

// //   glsl`
// //     uniform vec3 uColor;
// //     uniform float uOpacity;
// //     uniform float uDeepPurple;
    
// //     varying float vDistortion;
    
// //     vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
// //       return a + b * cos(6.28318 * (c * t + d));
// //     }     
    
// //     void main() {
// //       float distort = vDistortion * 3.;
    
// //       vec3 brightness = vec3(.1, .1, .9);
// //       vec3 contrast = vec3(.3, .3, .3);
// //       vec3 oscilation = vec3(.5, .5, .9);
// //       vec3 phase = vec3(.9, .1, .8);
    
// //       vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
    
// //       gl_FragColor = vec4(color, vDistortion);
// //       gl_FragColor += vec4(min(uDeepPurple, 1.), 0., .5, min(uOpacity, 1.));
// //     }
// //   `
// // )

// // extend({ WaveShaderMaterial })

// // Default settings

// interface BlobTwoProps {

// }

// // ---------- This is the end of declaxrations ---------- //

// export const BlobTwo = ({ base }: { base: any }) => {
//   const thickness = 0.2
//   const material = useRef<CustomShaderMaterialType | null>(null)

//   return (

//     <Canvas>
//       <mesh>
//         {/* <Sphere args={[ 1, 100, 100 ]} scale={[ 3, 3, 1 ]} position={[ 0, 0, 0 ]}>
          
//           <MeshDistortMaterial
//             color="#fff"
//             distort={ distort ? distort : 0.5 }
//             speed={ speed ? speed : 1.5 }
//             roughness={ roughness ? roughness : 2 }
//             // wireframe={ true }
//             // transparent={ true }
//             // blending={ THREE.AdditiveBlending }
//           />
          
//         </Sphere> */}

//         <CustomShaderMaterial
//           ref={material}
//           baseMaterial={base}
//           vertexShader={blobShader.vert}
//           fragmentShader={blobShader.frag}
//           side={THREE.DoubleSide}
//           color={'blue'}
//           roughness={0.2}
//           metalness={0.1}
//           uniforms={{
//             uTime: { value: 0 },
//             waterColor: {
//               value: new THREE.Color('#52a7f7').convertLinearToSRGB(),
//             },
//             waterHighlight: {
//               value: new THREE.Color('#b3ffff').convertLinearToSRGB(),
//             },
//             offset: {
//               value: 0.4,
//             },
//             contrast: {
//               value: 3.1,
//             },
//             brightness: {
//               value: 1,
//             },
//             uHeight: {
//               value: thickness,
//             },
//           }}
//         />
//       </mesh>
//     </Canvas>

//   )
// }

import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { IcosahedronGeometry, PointsMaterial } from 'three'

import CustomShaderMaterial from 'three-custom-shader-material'
import { patchShaders } from 'gl-noise/build/glNoise.m'

const shader = {
  vertex: /* glsl */ `
    uniform float uTime;
    varying float vVisibility;
    varying vec3 vViewNormal;

    void main() {
      vec3 n = gln_curl(position + uTime * 0.05);

      
			vec3 _viewNormal = normalMatrix * normal;
      vViewNormal = _viewNormal;
			vec4 _mvPosition = modelViewMatrix * vec4(position, 1.);

    	float visibility = step(-0.1, dot(-normalize(_mvPosition.xyz), normalize(_viewNormal)));
      vVisibility = visibility;

      csm_Position = position + (normal * n * 0.5);
      csm_PointSize += ((1. - visibility) * 0.05);
    }
    `,
  fragment: /* glsl */ `
    varying float vVisibility;
    varying vec3 vViewNormal;

    void main() {

      vec2 uv = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y);
      vec2 cUV = 2. * uv - 1.;
      float a = .15 / length(cUV);
      float alpha = 1.;
      if(a < 0.15) alpha = 0.;

      csm_DiffuseColor = vec4(vViewNormal, (vVisibility + 0.01) * alpha);
    }


    `,
}

function Thing() {
  const pointsRef = useRef()
  const matRef = useRef()

  useEffect(() => {
    pointsRef.current.geometry = new IcosahedronGeometry(1, 32)
  }, [])

  useFrame(({ clock }) => {
    matRef.current.uniforms.uTime.value = clock.elapsedTime
  })

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
    }),
    []
  )

  return (
    <group>
      <points ref={pointsRef}>
        <CustomShaderMaterial
          ref={matRef}
          baseMaterial={PointsMaterial}
          size={0.02}
          vertexShader={patchShaders(shader.vertex)}
          fragmentShader={patchShaders(shader.fragment)}
          uniforms={uniforms}
          transparent
        />
      </points>
    </group>
  )
}

export const BlobTwo = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 2.5],
        }}
      >
        <Suspense>
          <Environment preset="sunset" />
          <Thing />
        </Suspense>

        <OrbitControls enablePan={false} />
      </Canvas>
    </>
  )
}