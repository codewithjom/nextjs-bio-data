import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dataID = req.query.id

  if (req.method === 'DELETE') {
    try {
      const data = await prisma.biodata.delete({
        where: { id: Number(dataID) }
      })
      res.json(data)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Failed to delete account' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
