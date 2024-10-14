import { cn } from '@/lib/utils'
import Image from 'next/image'

const logoSize = {
  width: 400,
  height: 400,
}

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Logo do GIALCA"
      width={logoSize.width}
      height={logoSize.height}
      className={cn('', className)}
    />
  )
}
