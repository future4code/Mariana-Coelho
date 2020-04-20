import MainDB from "./MainDatabase";
import Video from "../business/entities/Video";
import VideoGateway from "../business/gateways/VideoGateway";

export default class VideoDB extends MainDB implements VideoGateway {
    async uploadVideo(video: Video){
        try{
            await this.connection.raw(`INSERT into videos values('${video.getId()}','1','${video.getUrl()}','${video.getTitle()}','${video.getDescription()}')`)
        } catch(err) {
            throw new Error(err.sqlMessage)
        }
    }

    async getAllVideos(page: number = 0) {

        try {
            const offset = (page - 1) * 10
       
        const result = await this.connection.raw(`
            SELECT id, title, url from videos
            LIMIT 10
            OFFSET ${offset}
            ;
        `)

        return result[0]

        } catch(err) {
            throw new Error(err.sqlMessage)
        }
    }
}
