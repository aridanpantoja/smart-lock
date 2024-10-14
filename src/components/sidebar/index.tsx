import { Logo } from '../logo'
import { SidebarLink } from './sidebar-link'
import { LINKS } from '@/config'
import { LogOutButton } from '../log-out-button'

export function Sidebar() {
  return (
    <>
      <div className="hidden max-h-screen w-full border-r bg-background xl:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-16 items-center justify-center border-b p-4 lg:p-6">
            <Logo className="size-32" />
          </div>
          <div className="flex-1">
            <nav className="mt-4 grid items-start gap-2 px-2 text-sm font-medium lg:px-4">
              {LINKS.map((link) => (
                <SidebarLink
                  href={link.href}
                  name={link.name}
                  key={link.name}
                  Icon={link.Icon}
                />
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <LogOutButton />
          </div>
        </div>
      </div>
    </>
  )
}
