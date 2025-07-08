import React from 'react'
import Navbar from '@/components/shared/Navbar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}
