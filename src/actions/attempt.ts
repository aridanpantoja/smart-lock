'use server'

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'
import {
  endOfDay,
  format,
  formatDistanceToNow,
  startOfDay,
  subDays,
} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { getUserByNfcId } from './user'

export async function createAttempt(nfcId: string, status: boolean) {
  try {
    const attempt = await prisma.attempt.create({
      data: {
        nfcId: nfcId,
        status: status,
      },
    })

    revalidatePath('/dashboard')
    return attempt
  } catch (error) {
    revalidatePath('/dashboard')
    return null
  }
}

export async function getAttemptsWithUser(numberOfAttempts: number) {
  const attempts = await prisma.attempt.findMany({
    orderBy: {
      date: 'desc',
    },
    take: numberOfAttempts,
  })

  const attemptsWithUser = await Promise.all(
    attempts.map(async (attempt) => {
      const user = await getUserByNfcId(attempt.nfcId)
      return { ...attempt, name: user?.name }
    }),
  )

  return attemptsWithUser
}

export async function getAttemptsByDays(time: number) {
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)

  const startOfTomorrow = new Date(startOfToday)
  startOfTomorrow.setDate(startOfTomorrow.getDate() + time)

  const attempts = await prisma.attempt.findMany({
    where: {
      date: {
        gte: startOfToday,
        lt: startOfTomorrow,
      },
    },
    orderBy: {
      date: 'desc',
    },
  })

  return attempts
}

export async function getLastAttempt() {
  const lastAttempt = await prisma.attempt.findFirst({
    orderBy: {
      date: 'desc',
    },
  })

  if (!lastAttempt) {
    return 'Nenhuma entrada'
  }

  const now = new Date()
  const attemptDate = lastAttempt.date

  const timeAgo = formatDistanceToNow(attemptDate, {
    addSuffix: true,
    locale: ptBR,
  })

  const isToday = attemptDate.toDateString() === now.toDateString()
  const formattedDate = isToday
    ? timeAgo
    : format(attemptDate, 'dd/MM', { locale: ptBR })

  return formattedDate
}

export async function getAttemptsByDay() {
  const today = new Date()
  const sevenDaysAgo = subDays(today, 6)

  const attemptsByDay = await prisma.attempt.groupBy({
    by: ['date'],
    _count: {
      _all: true,
    },
    where: {
      date: {
        gte: startOfDay(sevenDaysAgo),
        lte: endOfDay(today),
      },
    },
    orderBy: {
      date: 'asc',
    },
  })

  return attemptsByDay
}

export async function getAttemptsCountForPastDays(daysBack: number) {
  const attemptsCount = []

  // Loop através dos dias para contar as tentativas
  for (let i = daysBack; i >= 0; i--) {
    const dateToCheck = startOfDay(subDays(new Date(), i)) // Data do dia em questão
    const count = await prisma.attempt.count({
      where: {
        date: {
          gte: dateToCheck, // Começo do dia
          lt: subDays(dateToCheck, -1), // Início do próximo dia
        },
        status: {
          equals: true,
        },
      },
    })

    attemptsCount.push({
      day: dateToCheck.toLocaleDateString('pt-BR', { weekday: 'long' }),
      entradas: count,
    })
  }

  return attemptsCount
}
