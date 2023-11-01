import { Request, Response } from 'express';
import { powerdanger_Hoteles, powerdanger_Hoteles_I } from '../models/powerdanger_Hoteles';

export class HotelesController{

    public async getAllpowerdanger_Hoteles(req: Request, res:Response){
        try {
            const hoteles: powerdanger_Hoteles_I[] = await powerdanger_Hoteles.findAll(
                {}
            )
            res.status(200).json({hoteles})
        } catch (error) {

        }
    }



}