import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { z } from 'zod'
import { createPoll, getPoll, voteOnPoll } from './routes'

const app = fastify()
const port = 3333

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest'
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port }, () => {
  console.log(`Server listening on port ${port}`)
})
