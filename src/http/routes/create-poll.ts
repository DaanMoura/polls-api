import { z } from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { generateSimpleRandomString } from '../../utils/external-id'

export async function createPoll(app: FastifyInstance) {
  app.post('/polls', async (request, reply) => {
    const createPollBody = z.object({
      title: z.string(),
      options: z.array(z.string())
    })

    const { title, options } = createPollBody.parse(request.body)

    if (options.length < 2) {
      return reply.status(400).send({ message: 'Poll must have at least two options' })
    }

    let id = generateSimpleRandomString()
    let canCreate = false

    while (!canCreate) {
      canCreate = !(await prisma.poll.findFirst({ where: { id } }))
      if (!canCreate) {
        id = generateSimpleRandomString()
      }
    }

    try {
      const poll = await prisma.poll.create({
        data: {
          id,
          title,
          options: {
            createMany: {
              data: options.map(option => ({
                title: option
              }))
            }
          }
        }
      })

      return reply.status(201).send({ pollId: poll.id })
    } catch (error) {
      return reply.status(500).send({ message: 'Unable to create new poll', error })
    }
  })
}
