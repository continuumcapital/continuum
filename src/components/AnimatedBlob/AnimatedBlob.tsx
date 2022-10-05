import React, { useRef } from 'react'
import { AdditiveBlending, MeshPhysicalMaterial, ShaderMaterial } from 'three'
import { Canvas } from '@react-three/fiber'
import { MeshWobbleMaterial } from '@react-three/drei'
import CustomShaderMaterial from 'three-custom-shader-material'
import { vertexShader, fragmentShader } from './shaders/shaders'
import { styled } from '@theme'

const material = new ShaderMaterial({
  wireframe: true,
  blending: AdditiveBlending,
  transparent: true,
  vertexShader,
  fragmentShader,
  uniforms: {
    uFrequency: { value: 0 },
    uAmplitude: { value: 4 },
    uDensity: { value: 1 },
    uStrength: { value: 0 },
    uDeepPurple: { value: 1 },
    uOpacity: { value: .1 }
  }
})

// Default settings

interface BlobProps {

}

// ---------- This is the end of declaxrations ---------- //

export const AnimatedBlob = ({}:BlobProps) => {
  return (

    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <mesh>
        <icosahedronGeometry attach='geometry' args={[1, 64]} />
        <CustomShaderMaterial
          baseMaterial={ MeshPhysicalMaterial }
          blending={ AdditiveBlending }
          vertexShader={ vertexShader }
          fragmentShader={ fragmentShader }
          transparent={ true }
          wireframe={ true }
          uniforms={{
            uFrequency: { value: 0 },
            uAmplitude: { value: 4 },
            uDensity: { value: 1 },
            uStrength: { value: 0 },
            uDeepPurple: { value: 1 },
            uOpacity: { value: .1 }
          }}
        />
      </mesh>
    </Canvas>

  )
}
