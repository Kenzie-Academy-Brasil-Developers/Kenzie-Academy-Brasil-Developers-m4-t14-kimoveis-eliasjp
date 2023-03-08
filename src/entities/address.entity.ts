import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { RealEstate } from "./realEstate.entity"

@Entity("address")
export class Address {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 45 })
    street: string

    @Column({ type: "varchar", length: 8 })
    zipCode: string

    @Column({ type: "varchar", length: 6, nullable: true })
    number: string

    @Column({ type: "varchar", length: 20 })
    city: string

    @Column({ type: "varchar", length: 2 })
    state: string

    @OneToOne(() => RealEstate, (re) => re.address)
    realEstate: RealEstate
}