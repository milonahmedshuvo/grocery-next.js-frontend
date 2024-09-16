// app/providers.tsx
'use client'
import { persistor } from '@/redux/store'
import {NextUIProvider} from '@nextui-org/react'
import { PersistGate } from 'redux-persist/integration/react'




export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
       <PersistGate loading={null} persistor={persistor}>  
           {children}
       </PersistGate>
    </NextUIProvider>
  )
}