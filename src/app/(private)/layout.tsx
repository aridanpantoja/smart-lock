import { Header } from '@/components/header'
import React from 'react'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-2xl">{children}</main>
    </>
  )
}
