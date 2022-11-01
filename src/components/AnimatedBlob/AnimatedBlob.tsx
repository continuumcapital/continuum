import React, { useRef, useEffect, useState } from 'react'
import { AdditiveBlending } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { vertexShader, fragmentShader } from './shaders/shaders'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Default settings

interface BlobProps {
  frequency?: number
  amplitude?: number
  density?: number
  strength?: number
  opacity?: number
}

const Sphere = () => {
  const ref = useRef()
  const sphereShaderRef = useRef()

  const settings = {
    frequency: { start: 0, end: 4 },
    amplitude: { start: 4, end: 4 },
    density: { start: 1, end: 1 },
    strength: { start: 0, end: 0.6 },
    opacity: { start: .1, end: .33 },
    rotation: { start: 0.005, end: 0 }
  }

  //@ts-ignore
  useFrame(() => ( ref.current.rotation.x += settings.rotation.start ))

  useEffect(() => {
    gsap.registerPlugin( ScrollTrigger );
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-site",
        id: "3D Timeline",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    })

    let op = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-site",
        id: "3D Timeline",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    })
    
    //@ts-ignore
    tl.to( sphereShaderRef.current.uniforms.uStrength, { value: settings.strength.end })
    //@ts-ignore
    op.to( sphereShaderRef.current.uniforms.uOpacity, { value: settings.opacity.end })
  }, [])
    
  return(
    //@ts-ignore
    <mesh ref={ ref }>
      <icosahedronGeometry attach='geometry' args={[1, 64]} />
      <shaderMaterial 
        //@ts-ignore
        ref={ sphereShaderRef }
        attach='material' 
        wireframe={ true }
        transparent={ true }
        blending={ AdditiveBlending }
        vertexShader={ vertexShader }
        fragmentShader={ fragmentShader }
        uniforms={{
          uFrequency: { value: settings.frequency.start },
          uAmplitude: { value: settings.amplitude.start },
          uDensity: { value: settings.density.start },
          uStrength: { value: settings.strength.start },
          uDeepBlue: { value: 1 },
          uOpacity: { value: settings.opacity.start }
        }}
      />
    </mesh>
  )
}

// ---------- This is the end of declaxrations ---------- //

export const AnimatedBlob = () => {
  return (

    <Canvas camera={{ position: [0, 0, 2.2 ] }}>
      <Sphere />
    </Canvas>

  )
}
