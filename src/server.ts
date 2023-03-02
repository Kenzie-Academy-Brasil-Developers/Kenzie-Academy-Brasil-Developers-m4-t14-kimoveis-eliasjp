import { AppDataSource } from "./data-source";
import "dotenv/config"
import app from "./app";

AppDataSource.initialize()
.then(() => {
    console.log("Database initialized.")
    const PORT = Number(process.env.PORT) || 3000
    app.listen(PORT, () => console.log("Server initalized"))
})
.catch((error) => console.log(error))