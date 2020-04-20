import { Request, Response } from 'express';
import VideoDB from '../../../data/VideoDatabase';
import { GetAllVideosUC } from '../../../business/usecases/video/GetAllVideosUC';

export default async function getAllVideosEndpoint(req: Request, res:Response){
    try{
        const db = new VideoDB()
        const uc = new GetAllVideosUC(db)
        const data = await uc.execute(Number(req.query.page))
        res.send({data})
    }catch(err) {
        res.status(err.code || 400).send(err.message)
    }
}