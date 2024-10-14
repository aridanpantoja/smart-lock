import { SignOutButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/shadcn-ui/button'

export function LogOutButton() {
  return (
    <SignOutButton>
      <Button variant="destructive" className="w-full">
        <LogOut className="mr-2 size-4" />
        Sair
      </Button>
    </SignOutButton>
  )
}
