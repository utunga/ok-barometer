import { PrismaClient, Prisma } from '@prisma/client'
import { VercelRequest, VercelResponse } from '@vercel/node'

type VercelRequestQuery = {
  id?: string
}

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    const { id } = req.query as VercelRequestQuery
    const prisma = new PrismaClient()

    // set CORS headers to allow any orgin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

    console.log(
      '[measure] Incoming request:',
      JSON.stringify(
        {
          method: req.method,
          query: req.query,
          body: req.body,
        },
        null,
        2,
      ),
    )

    switch (req.method) {
      case 'GET':
        return res.json(
          await prisma.measure.findMany({
            where: { id },
          }),
        )
      case 'POST':
        return res.json(
          await prisma.measure.create({
            data: req.body as Prisma.MeasureCreateInput,
          }),
        )
      case 'PUT':
        return res.json(
          await prisma.measure.update({
            where: {
              id,
            },
            data: req.body as Prisma.MeasureUpdateInput,
          }),
        )

      case 'DELETE':
        return res.json(
          await prisma.measure.delete({
            where: { id },
          }),
        )

      case 'OPTIONS':
        return res.status(200).json(({
            body: "OK"
          })
        )  
    }

    return res
      .status(400)
      .send({ message: `Unexpected request method: ${req.method}` })
  } catch (e: any) {
    console.error('[measure] Error responding:', e)
    return res.status(500).json({ message: e?.message || e })
  }
}