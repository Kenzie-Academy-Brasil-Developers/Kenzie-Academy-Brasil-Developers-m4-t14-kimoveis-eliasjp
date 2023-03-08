import { DataSource, DataSourceOptions } from "typeorm"
import "dotenv/config"
import "reflect-metadata"
import path from "path"

function DataSourceConfig (): DataSourceOptions{
    const entitiesPath = path.join(__dirname, "/entities/**.ts")
    const migrationsPath = path.join(__dirname, "/migrations/**.ts")

    if (process.env.NODE_ENV === "test"){
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath]
        }
    }

    if (!process.env.DATABASE_URL){
        throw new Error(".env DATABASE_URL does not exists.")
    }

    return {
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

export const AppDataSource = new DataSource(DataSourceConfig())