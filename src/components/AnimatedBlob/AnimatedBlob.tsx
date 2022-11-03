import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { AdditiveBlending } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { vertexShader, fragmentShader } from './shaders/shaders'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// -------------- Typescript declarations -------------- //

interface BlobProps {
  frequency?: number
  amplitude?: number
  density?: number
  strength?: number
  opacity?: number
}

// ---------- For the rendering of the sphere ---------- //

const Sphere = () => {
  const ref = useRef()
  const sphereShaderRef = useRef()

  // For the settings of the blob and how it animates as the user scrolls down the page
  // The start value sets the blob as a circle and animates into a more abstract shape with the end attr

  const settings = {
    frequency: { start: 0, end: 4 },
    amplitude: { start: 4, end: 4 },
    density: { start: 1, end: 1 },
    strength: { start: 0, end: 0.6 },
    opacity: { start: .1, end: .33 },
    rotation: { start: 0.005, end: 0 }
  }

  // Allows for the animation of the blob to rotate on the x axis depending where the user is on the scroll
  //@ts-ignore
  useFrame(() => ( ref.current.rotation.x += settings.rotation.start ))

  // Sets the container of the blob animation
  // This sets where it starts and ends on the page

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

    // This sets the opacity of the animation as it moves from the top to the bottom
    // This starts the blob on a lower opacity in the beginning and becomes brighter as the user scrolls

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

  // For the attributes of the sphere
  // This creates the structure of the sphere and the material wrapped around it that is altered
    
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
