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
}
