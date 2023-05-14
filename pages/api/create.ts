// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { position, name, gender, date } = req.body

  try {
    await prisma.personal.create({
      data: {
        position,
        name,
        gender,
        date
      }
    })
    res.status(200).json({ message: 'Data has been added successfully' })
  } catch (error) {
    console.log('Failure')
  }
}
