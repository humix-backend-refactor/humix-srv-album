import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album{
    @PrimaryGeneratedColumn()
    id: string

    @Column("int", { array: true, default: () => "ARRAY[]::INTEGER[]" })
    usuario: number[]

    @Column()
    nome: string

    @Column()
    banda: string

    @Column()
    nota: number
}