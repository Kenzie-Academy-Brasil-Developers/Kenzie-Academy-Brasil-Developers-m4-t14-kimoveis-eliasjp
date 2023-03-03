import express, { Application } from "express"
import { handleError } from "./errors"
import { usersRoutes } from "./routes/users.route"
import "express-async-errors"
import "reflect-metadata"

const app: Application = express()
app.use(express.json())

app.use("/users", usersRoutes)

app.use(handleError)


export default app