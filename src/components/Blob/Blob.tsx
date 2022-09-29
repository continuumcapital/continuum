import React, { useRef } from 'react'
import { styled } from '@theme'
import { vertexShader, fragmentShader } from './Parts/shaders'
import { Canvas, useFrame } from '@react-three/fiber'

const BlobWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

// Default settings

interface BlobProps {
  zoom: number
  position?: any
}

// ---------- This is the end of declarations ---------- //

export const Blob = ({ zoom, position }:BlobProps) => {

  const settings = {
    speed: 0.2,
    density: 1.5,
    strength: 0.2,
    frequency: 3.0,
    amplitude: 6.0,
    intensity: 7.0,
    wireframe: false,
  }
  
  const Icosahedron = ( props:any ) => {
    const mesh = useRef()

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: settings.speed },
      uNoiseDensity: { value: settings.density },
      uNoiseStrength: { value: settings.strength },
      uFrequency: { value: settings.frequency },
      uAmplitude: { value: settings.amplitude },
      uIntensity: { value: settings.intensity },
    }

    useFrame(({ clock }) => {
      // @ts-ignore: Unreachable code error
      const current = mesh.current.material.uniforms
      current.uTime.value = clock.getElapsedTime()
      current.uSpeed.value = settings.speed
      current.uNoiseDensity.value = settings.density
      current.uNoiseStrength.value = settings.strength
      current.uFrequency.value = settings.frequency
      current.uAmplitude.value = settings.amplitude
      current.uIntensity.value = settings.intensity
    })

    return (
      <mesh ref={ mesh } {...props}>
        <icosahedronBufferGeometry attach='geometry' args={[1, 64]} />
        <shaderMaterial attach='material' {...{ vertexShader, fragmentShader, uniforms }} />
      </mesh>
    )
  }

  return (
    <BlobWrap>
      <Canvas camera={{ position: [ 0, 0, zoom ] }}>
        <Icosahedron position={ position ? position : [ 0, 0, 0 ]} />
      </Canvas>
    </BlobWrap>
  )
}
