import { Album } from "./album-model"
import logger from "./config/logger"
import { getRepository } from "typeorm"

export class AlbumService {
    private get repo() {
        return getRepository(Album)
    }

    async criarAlbum(nome: string, banda: string) {
        let album = await this.repo.findOne({ where: { nome, banda } });

        if (album) {
            // Se o álbum já existe, não adiciona de novo
            await this.repo.save(album);
            return album;
        } else {
            // Cria novo álbum
            album = this.repo.create({
                nome,
                banda,
                nota: 0 // ou outro valor padrão
            });
            await this.repo.save(album);
            logger.info(`Álbum ${nome} (${banda}) criado.`);
            return album;
        }
    }

    async listarAlbunsPorUsuario(userId: number) {
        return this.repo
            .createQueryBuilder("album")
            .getMany();
    }
}