import { Album } from "./album-model"
import logger from "./config/logger"
import { getRepository } from "typeorm"
var jwt = require('jsonwebtoken')

export class AlbumService {
    private get repo() {
        return getRepository(Album)
    }

    async criarAlbum(nome: string, banda: string){

    }
    
}