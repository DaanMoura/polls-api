import { FastifyInstance } from 'fastify'
import { voting } from '../../utils/voting-pub-sub'
import z from 'zod'

export async function pollResults(app: FastifyInstance) {
  app.get('/polls/:pollId/results', { websocket: true }, (connection, request) => {
    const getPollParam = z.object({
      pollId: z.string().uuid()
    })

    const { pollId } = getPollParam.parse(request.params)

    // Subscribe only to the messages published on the channel with the poll id ( pollId )
    voting.subscribe(pollId, message => {
      connection.socket.send(JSON.stringify(message))
    })
  })
}
