import { PrismaClient } from '@prisma/client'
import faker from 'faker'

const prisma = new PrismaClient()

const NUMBER_OF_USERS = 4
const MAX_NUMBER_MEASURES = 3

const moods = [
  "desolate",
  "dispirited",
  "sad",
  "quiet",
  "ok",
  "lively",
  "energized",
  "hysterical"
]


const data = Array.from({ length: NUMBER_OF_USERS }).map(() => ({
  email: faker.internet.email(),
  name: faker.name.firstName(),
  measures: Array.from({
    length: faker.datatype.number({
      min: 0,
      max: MAX_NUMBER_MEASURES
    }),
  }).map(() => ({
    mood: faker.random.arrayElement(moods),
  })),
}))

async function main() {
  for (let i=0;i<moods.length;i++) {
    await prisma.mood.create({
      data: {
        idx: i,
        label: moods[i]
      },
    })
  }
  for (let entry of data) {
    await prisma.user.create({
      data: {
        name: entry.name,
        email: entry.email,
      }
    })
  }
}


main().finally(async () => {
  await prisma.$disconnect()
})