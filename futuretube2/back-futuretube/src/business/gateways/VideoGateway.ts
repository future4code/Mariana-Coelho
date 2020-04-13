import Video from "../../business/entities/Video";

export default interface VideoGateway {
    uploadVideo(video: Video): void
}
