'use server'

import prisma from '@/lib/db'

export async function getUserByNfcId(nfcId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { nfcId: nfcId },
    })

    if (!user) {
      return null
    }

    return user
  } catch (error) {
    return null
  }
}

export async function getTotalUsers() {
  try {
    const usersLenght = await prisma.user.count()
    return usersLenght
  } catch (error) {
    return null
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany()

    if (!users) {
      return null
    }

    return users
  } catch (error) {
    return null
  }
}
