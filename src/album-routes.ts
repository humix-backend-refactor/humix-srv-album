import { Router } from "express"
import { AlbumController } from "./album-controller"
import { authenticateJWT } from "./middleware"

const router = Router()

router.post("/teste", authenticateJWT, AlbumController.teste)

export default router