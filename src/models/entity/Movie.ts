import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String

  @Column({ name: "release_date", type: "date" })
  release_date: Date

  @Column({ name: "resume", type: "varchar" })
  resume: String

  @Column({ name: "note", type: "int" })
  note: number
}
