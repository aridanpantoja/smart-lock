import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nfcId } = body

    if (!nfcId) {
      return NextResponse.json(
        { success: false, message: 'NFC ID is required' },
        { status: 400 },
      )
    }

    const user = await prisma.user.findUnique({ where: { nfcId: nfcId } })

    if (user) {
      return NextResponse.json({
        success: true,
        message: `Welcome, ${user.name}`,
      })
    } else {
      return NextResponse.json({ success: false })
    }
  } catch (error) {
    console.error('Error in POST /validate:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 },
    )
  }
}
