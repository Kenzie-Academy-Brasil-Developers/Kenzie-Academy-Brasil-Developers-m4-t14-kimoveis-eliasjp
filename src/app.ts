import express, { Application } from "express"

const app = express()
app.use(express.json())

export default app