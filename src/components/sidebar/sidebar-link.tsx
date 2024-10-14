'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '../shadcn-ui/button'

interface SidebarLinkProps {
  href: string
  name: string
  Icon: LucideIcon
}

export function SidebarLink({ href, Icon, name }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'sidebar', className: 'justify-start' }),
        isActive ? 'bg-muted text-primary' : 'text-muted-foreground',
      )}
    >
      <Icon className="h-4 w-4" />
      {name}
    </Link>
  )
}
