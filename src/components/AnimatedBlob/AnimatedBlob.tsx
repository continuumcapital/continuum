import React from 'react'
import { AdditiveBlending } from 'three'
import { Canvas } from '@react-three/fiber'
import { vertexShader, fragmentShader } from './shaders/shaders'

// Default settings

interface BlobProps {
  frequency?: number
  amplitude?: number
  density?: number
  strength?: number
  opacity?: number
}

// ---------- This is the end of declaxrations ---------- //

export const AnimatedBlob = ({ 
    frequency,
    amplitude,
    density,
    strength,
    opacity
  }:BlobProps) => {

  return (

    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <mesh>
        <icosahedronGeometry attach='geometry' args={[1, 64]} />
        <shaderMaterial 
          attach='material' 
          wireframe={ true }
          transparent={ true }
          blending={ AdditiveBlending }
          vertexShader={ vertexShader }
          fragmentShader={ fragmentShader }
          uniforms={{
            uFrequency: { value: frequency ? frequency : 0 },
            uAmplitude: { value: amplitude ? amplitude : 4 },
            uDensity: { value: density ? density : 1 },
            uStrength: { value: strength ? strength : 0 },
            uDeepBlue: { value: 1 },
            uOpacity: { value: opacity ? opacity : .1 }
          }}
        />
      </mesh>
    </Canvas>

  )
}
