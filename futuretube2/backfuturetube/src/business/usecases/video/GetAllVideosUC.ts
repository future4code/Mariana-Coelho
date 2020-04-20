import VideoGateway from '../../gateways/VideoGateway';

export class GetAllVideosUC {
    constructor(private database: VideoGateway) {}

    async execute(page: number){
        const videos = await this.database.getAllVideos(page)
      
        return {videos}
    }
}