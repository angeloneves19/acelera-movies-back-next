import { getRepository } from "typeorm"
import { Request, Response } from "express"
import { User } from "../../models/entity/User"

export class LoginControllers {
  async createUser(req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const userRepository = getRepository(User)
      const loginUsersEmail = await userRepository.findOne({
        where: { email: email },
      })
      const loginUsersPassword = await userRepository.findOne({
        where: { password: password },
      })

      if (loginUsersEmail) {
        if (loginUsersPassword) {
          return res.status(200).json({ auth: "true", message: "sucesso" })
        }
        return res.status(401).json({ message: "Senha incorreta :/" })
      }
      return res.status(404).json({ auth: "false", message: "falha" })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ mensage: "Internal Server Error" })
    }
  }
}
