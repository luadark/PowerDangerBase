import { Request, Response } from 'express';
import { powerdanger_Categoria, powerdanger_Categoria_I } from '../models/powerdanger_Categoria';

export class CategoriaController{

    public async getAllpowerdanger_Categoria(req: Request, res:Response){
        try {
            const categoria: powerdanger_Categoria_I[] = await powerdanger_Categoria.findAll(
                {}
            )
            res.status(200).json({categoria})
        } catch (error) {

        }
    }

    
public async getOnepowerdanger_Categoria(req: Request, res:Response){
    try {
        let categoria: powerdanger_Categoria_I | any; 
        categoria = await powerdanger_Categoria.findOne(
            {
                where:{
                    id: req.params.VehiculoId
            }
        }

    ) 
        res.status(200).json({categoria})
    } catch (error) {

    }
}





public async createpowerdanger_Categoria(req: Request, res: Response) {
    try {
        const newCategoria = await powerdanger_Categoria.create(req.body);
        res.status(201).json({ agencia: newCategoria});
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la Categoria' });
    }
}



public async updatepowerdanger_Categoria(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const actualizarDatos = req.body;

        const existepowerdanger_Categoria = await powerdanger_Categoria.findByPk(id)

        if (!existepowerdanger_Categoria) {
            res.status(500).json({ msg: 'Categoria no encontrado' })
        }

        await powerdanger_Categoria.update(actualizarDatos, {
            where: { id }

        })

        const powerdanger_CategoriaActualizada = await powerdanger_Categoria.findByPk(id);
        res.status(200).json(powerdanger_CategoriaActualizada);


    } catch (error) {
        console.error(error)
    }
}



public async deletepowerdanger_Categoria(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const existepowerdanger_Categoria = await powerdanger_Categoria.findByPk(id)

        if (!existepowerdanger_Categoria) {
            res.status(500).json({ msg: 'Categoria no encontrado' })
        }

        await powerdanger_Categoria.destroy(
            {
                where: { id }
            }
        )

        res.status(200).json({ msg: 'Categoria eliminado' });

    } catch (error) {
        console.error(error)
    }
}

}
