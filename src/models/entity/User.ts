import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "email", type: "varchar" })
  email: string

  @Column({ name: "password", type: "text" })
  password: string
}
