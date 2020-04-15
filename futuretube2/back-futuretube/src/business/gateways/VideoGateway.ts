import Video from "../../business/entities/Video";

export default interface VideoGateway {
    uploadVideo(video: Video): void
    getAllVideos(page: number): Promise<Video[]>
}
