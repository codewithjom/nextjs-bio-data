// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dataId = req.query.id

  if (req.method === 'DELETE') {
    const data = await prisma.personal.delete({
      where: {
        id: String(dataId)
      }
    })
    res.json(data)
  } else {
    console.log('Data could not be deleted')
  }
}
