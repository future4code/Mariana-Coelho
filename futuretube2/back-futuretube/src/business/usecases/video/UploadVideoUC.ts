import VideoDB from "../../../data/VideoDatabase";
import Video from "../../entities/Video";
import { v4 } from 'uuid';
import * as jwt from 'jsonwebtoken';
import User from "../../entities/User";

interface UploadVideoUCInput {
    token: string
    title: string
    description: string
    url: string
}

export default class UploadVideoUC {
    constructor(private database: VideoDB) {}
    

    async execute(input: UploadVideoUCInput){

        const id = v4()
        // const userId = User.getTokenData(input.token).id

        await this.database.uploadVideo(new Video(
            id,
            input.url,
            input.description,
            input.title,
            '1'
        ))
    }

}
