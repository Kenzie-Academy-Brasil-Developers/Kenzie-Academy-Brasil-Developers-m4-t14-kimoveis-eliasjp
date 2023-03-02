import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { RealEstate } from "./realEstate.entity"
import { Users } from "./users.entity"

@Entity("schedules_users_properties")
export class SchedulesUsersProperties {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "date" })
    date: Date

    @Column({ type: "time" })
    hour: string

    @ManyToOne(() => RealEstate)
    realEstate: number

    @ManyToOne(() => Users)
    user: number
}