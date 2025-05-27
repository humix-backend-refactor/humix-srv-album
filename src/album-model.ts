import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    usuario: number

    @Column()
    nome: string

    @Column()
    banda: string

    @Column()
    nota: number
}