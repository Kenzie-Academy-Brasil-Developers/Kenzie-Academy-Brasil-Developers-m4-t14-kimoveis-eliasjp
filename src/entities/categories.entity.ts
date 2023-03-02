import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("categories")
export class Categories{

    @PrimaryGeneratedColumn("increment")
    id: number
    
    @Column({ type: "varchar", length: 45, unique: true })
    name: string
}