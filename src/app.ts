import "express-async-errors"
import express, { Application } from "express"
import { handleError } from "./errors"
import { usersRoutes } from "./routes/users.route"
import "reflect-metadata"
import { loginRoute } from "./routes/login.route"
import { categoriesRoutes } from "./routes/categories.route"

const app: Application = express()
app.use(express.json())

app.use("/users", usersRoutes)
app.use("/login", loginRoute)
app.use("/categories", categoriesRoutes)

app.use(handleError)


export default app