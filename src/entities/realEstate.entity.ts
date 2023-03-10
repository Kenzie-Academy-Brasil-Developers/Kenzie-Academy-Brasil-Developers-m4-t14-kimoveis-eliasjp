import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, Column, JoinColumn } from "typeorm"
import { Address } from "./address.entity"
import { Category } from "./categories.entity"

@Entity("real_estate")
export class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "boolean", default: false })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column({ type: "integer" })
    size: number

    @CreateDateColumn({ type: "date" })
    createdAt: string

    @UpdateDateColumn({ type: "date" })
    updatedAt: string

    @OneToOne(() => Address, (adr) => adr.id)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (cate) => cate.id)
    category: Category
}