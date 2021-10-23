import React, { Suspense } from 'react'
import { Canvas, extend, useLoader } from '@react-three/fiber'

export default () => {
  return (
    <>
      Got Here
      <Canvas>
        <Suspense fallback={null}>
          This works
        </Suspense>
      </Canvas>
    </>
  )
};