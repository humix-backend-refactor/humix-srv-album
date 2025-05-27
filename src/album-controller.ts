import { Request, Response, NextFunction } from "express"
import logger from "./config/logger"
import { AlbumService } from "./album-service"

const albumService = new AlbumService()

export const AlbumController = {

    async adicionarAlbum(req: Request, res: Response, next: NextFunction): Promise<void>{
        const { nome, banda } = req.body
        const user = req.userId

        if (typeof user !== "number") {
            res.status(400).json({ error: "User ID is required" });
            return;
        }

        const album = await albumService.criarAlbum(user, nome, banda)

        res.send(200).json({message: album})
    },

    async getAlbumsUser(req: Request, res: Response, next: NextFunction){
        const user = req.userId

        if(!user){
            return res.send(400).json({error: 'Token não fornecido'})
        }

        const albums = await albumService.listarAlbunsPorUsuario(user)
        logger.debug(albumService)
        res.send(200).json({albums: albums})
    }

}