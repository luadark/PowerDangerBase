import { Request, Response } from 'express';
import { powerdanger_Habitacion, powerdanger_Habitacion_I } from '../models/powerdanger_Habitacion';

export class HabitacionController{

    public async getAllpowerdanger_Habitacion(req: Request, res:Response){
        try {
            const habitacion: powerdanger_Habitacion_I[] = await powerdanger_Habitacion.findAll(
                {}
            )
            res.status(200).json({habitacion})
        } catch (error) {

        }
    }


    public async getOnepowerdanger_Habitacion(req: Request, res:Response){
        try {
            let habitacion: powerdanger_Habitacion_I | any; 
            habitacion = await powerdanger_Habitacion.findOne(
                {
                    where:{
                        id: req.params.VehiculoId
                }
            }
    
        ) 
            res.status(200).json({habitacion})
        } catch (error) {
    
        }
    }
    
    
    
    
    
    public async createpowerdanger_Habitacion(req: Request, res: Response) {
        try {
            const newAgencia = await powerdanger_Habitacion.create(req.body);
            res.status(201).json({ agencia: newAgencia });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la habitacion' });
        }
    }
    
    
    
    public async updatepowerdanger_Habitacion(req: Request, res: Response) {
        try {
            const id = req.params.id;
    
            const actualizarDatos = req.body;
    
            const existepowerdanger_Habitacion = await powerdanger_Habitacion.findByPk(id)
    
            if (!existepowerdanger_Habitacion) {
                res.status(500).json({ msg: 'habitacion no encontrado' })
            }
    
            await powerdanger_Habitacion.update(actualizarDatos, {
                where: { id }
    
            })
    
            const powerdanger_HabitacionActualizada = await powerdanger_Habitacion.findByPk(id);
            res.status(200).json(powerdanger_HabitacionActualizada);
    
    
        } catch (error) {
            console.error(error)
        }
    }
    
    
    
    public async deletepowerdanger_Habitacion(req: Request, res: Response) {
        try {
            const id = req.params.id;
    powerdanger_Habitacion
            const existepowerdanger_Habitacion = await powerdanger_Habitacion.findByPk(id)
    
            if (!existepowerdanger_Habitacion) {
                res.status(500).json({ msg: 'habitacion no encontrado' })
            }
    
            await powerdanger_Habitacion.destroy(
                {
                    where: { id }
                }
            )
    
            res.status(200).json({ msg: 'habitacion eliminado' });
    
        } catch (error) {
            console.error(error)
        }
    }
    
    }
