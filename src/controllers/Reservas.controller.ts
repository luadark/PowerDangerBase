import { Request, Response } from 'express';
import { powerdanger_Reservas, powerdanger_Reservas_I } from '../models/powerdanger_Reservas';

export class ReservasController{

    public async getAllpowerdanger_Reservas(req: Request, res:Response){
        try {
            const reservas: powerdanger_Reservas_I[] = await powerdanger_Reservas.findAll(
                {}
            )
            res.status(200).json({reservas})
        } catch (error) {

        }
    }



}