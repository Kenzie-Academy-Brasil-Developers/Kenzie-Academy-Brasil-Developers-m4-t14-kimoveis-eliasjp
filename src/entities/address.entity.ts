import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("address")
export class Address {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 45 })
    street: string

    @Column({ type: "varchar", length: 8 })
    zipCode: string

    @Column({ type: "varchar", length: 6 })
    number: string

    @Column({ type: "varchar", length: 20 })
    city: string

    @Column({ type: "varchar", length: 2 })
    state: string
}