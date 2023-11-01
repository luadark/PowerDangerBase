import { Request, Response } from 'express';
import { powerdanger_Personas, powerdanger_Personas_I } from '../models/powerdanger_Personas';

export class PersonasController{

    public async getAllpowerdanger_Personas(req: Request, res:Response){
        try {
            const personas: powerdanger_Personas_I[] = await powerdanger_Personas.findAll(
                {}
            )
            res.status(200).json({personas})
        } catch (error) {

        }
    }

}