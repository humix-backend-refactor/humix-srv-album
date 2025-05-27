import { Router } from "express"
import { AlbumController } from "./album-controller"
import { authenticateJWT } from "./middleware"

const router = Router()

router.post("/teste", authenticateJWT, AlbumController.adicionarAlbum)
router.get("/teste", authenticateJWT, AlbumController.getAlbumsUser)

export default router