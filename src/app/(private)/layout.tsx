'use client'

import { LogOutButton } from '@/components/log-out-button'
import { Button } from '@/components/shadcn-ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/shadcn-ui/sheet'
import { Sidebar } from '@/components/sidebar'
import { SidebarLink } from '@/components/sidebar/sidebar-link'
import { LINKS } from '@/config'
import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen w-full xl:grid-cols-[220px_1fr] 2xl:grid-cols-[280px_1fr]">
      <Sidebar />
      <div>
        <header className="flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 xl:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="mt-6 grid gap-2 text-lg font-medium">
                {LINKS.map((link) => (
                  <SidebarLink
                    href={link.href}
                    name={link.name}
                    key={link.name}
                    Icon={link.Icon}
                  />
                ))}
              </nav>
              <div className="mt-auto">
                <LogOutButton />
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Pesquisar usuários"
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form> */}
          </div>
          <UserButton />
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}
