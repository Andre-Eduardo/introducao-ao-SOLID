import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const user = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });
      return response.status(201).json(user);
    } catch (error) {
      const result = (error as Error).message;
      return response.status(404).json({ error: result });
    }
  }
}

export { TurnUserAdminController };
