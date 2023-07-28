import express from "express"
import routes from './routes.js'
import logger from "./utils/logger.js"
import connect from "./utils/connect.js"

import 'dotenv/config'
const { PORT } = process.env

const port = PORT || 3000
const app = express()

app.use(express.json())

app.listen(port, async () => {
  logger.info(`App is running at http://127.0.0.1:${port}`)

  await connect()

  routes(app)
})