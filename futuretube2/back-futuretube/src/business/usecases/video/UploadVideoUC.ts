import Video from "../../entities/Video";
import { v4 } from 'uuid';
import VideoGateway from "../../gateways/VideoGateway";

interface UploadVideoUCInput {
    token: string
    title: string
    description: string
    url: string
}

export default class UploadVideoUC {
    constructor(private database: VideoGateway) {}
    
    async execute(input: UploadVideoUCInput){
        const id = v4()
        
        await this.database.uploadVideo(new Video(
            id,
            '1',
            input.url,   
            input.title,
            input.description,
        ))
    }
}
