import { Request, Response, NextFunction } from "express"
import logger from "./config/logger"
import { AlbumService } from "./album-service"

const albumService = new AlbumService()

export const AlbumController = {

    async teste(req: Request, res: Response, next: NextFunction): Promise<void>{
        logger.debug(req.userId)

        res.json({message: req.userId})
    }

}