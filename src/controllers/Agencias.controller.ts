import { Request, Response } from 'express';
import { powerdanger_Agencias_de_viajes, powerdanger_Agencias_de_viajes_I } from '../models/powerdanger_Agencias_de_viajes';


export class AgenciasController{

 public async getAllpowerdanger_Agencias_de_viajes(req: Request, res:Response){
        try {
            const agencia: powerdanger_Agencias_de_viajes_I[] = await powerdanger_Agencias_de_viajes.findAll() 
            res.status(200).json({agencia})
        } catch (error) {

        }
}


public async getOnepowerdanger_Agencias_de_viajes(req: Request, res:Response){
    try {
        let agencia: powerdanger_Agencias_de_viajes_I | any; 
        agencia = await powerdanger_Agencias_de_viajes.findOne(
            {
                where:{
                    id: req.params.VehiculoId
            }
        }

    ) 
        res.status(200).json({agencia})
    } catch (error) {

    }
}





public async createpowerdanger_Agencias_de_viajes(req: Request, res: Response) {
    try {
        const newAgencia = await powerdanger_Agencias_de_viajes.create(req.body);
        res.status(201).json({ agencia: newAgencia });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la Agencia' });
    }
}



public async updatepowerdanger_Agencias_de_viajes(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const actualizarDatos = req.body;

        const existepowerdanger_Agencias_de_viajes = await powerdanger_Agencias_de_viajes.findByPk(id)

        if (!existepowerdanger_Agencias_de_viajes) {
            res.status(500).json({ msg: 'Agencia no encontrado' })
        }

        await powerdanger_Agencias_de_viajes.update(actualizarDatos, {
            where: { id }

        })

        const powerdanger_Agencias_de_viajesActualizada = await powerdanger_Agencias_de_viajes.findByPk(id);
        res.status(200).json(powerdanger_Agencias_de_viajesActualizada);


    } catch (error) {
        console.error(error)
    }
}



public async deletepowerdanger_Agencias_de_viajes(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const existepowerdanger_Agencias_de_viajes = await powerdanger_Agencias_de_viajes.findByPk(id)

        if (!existepowerdanger_Agencias_de_viajes) {
            res.status(500).json({ msg: 'Agencia no encontrado' })
        }

        await powerdanger_Agencias_de_viajes.destroy(
            {
                where: { id }
            }
        )

        res.status(200).json({ msg: 'Agencia eliminado' });

    } catch (error) {
        console.error(error)
    }
}

}
