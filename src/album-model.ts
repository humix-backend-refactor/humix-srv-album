import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    nome: string

    @Column()
    banda: string

    @Column()
    nota: number
}