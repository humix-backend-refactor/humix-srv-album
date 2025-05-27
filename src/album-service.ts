import { Album } from "./album-model"
import logger from "./config/logger"
import { getRepository } from "typeorm"

export class AlbumService {
    private get repo() {
        return getRepository(Album)
    }

    async criarAlbum(user: number, nome: string, banda: string) {
        let album = await this.repo.findOne({ where: { nome, banda } });

        if (album) {
            // Se o usuário já está seguindo, não adiciona de novo
            if (!album.usuario.includes(user)) {
                album.usuario.push(user);
                await this.repo.save(album);
                logger.info(`Usuário ${user} agora segue o álbum ${nome} (${banda})`);
            }
            return album;
        } else {
            // Cria novo álbum com o usuário na lista
            album = this.repo.create({
                nome,
                banda,
                usuario: [user],
                nota: 0 // ou outro valor padrão
            });
            await this.repo.save(album);
            logger.info(`Álbum ${nome} (${banda}) criado por usuário ${user}`);
            return album;
        }
    }
}