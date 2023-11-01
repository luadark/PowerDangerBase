import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";
import { powerdanger_Hoteles } from "./powerdanger_Hoteles";



export class powerdanger_Categoria extends Model{
    public idCategoria!: number;
    public nivelCategoria!: number;
    public naCategoria!: string;
    public descripcionCategoria!: string;
}

export interface powerdanger_Categoria_I {
    idCategoria: number;
    nivelCategoria: number;
    naCategoria: string;
    descripcionCategoria: string;
}

powerdanger_Categoria.init(
{
    nivelCategoria: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      naCategoria:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcionCategoria:{
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    tableName: "Categorias",
    sequelize: database,
    timestamps: false
}
);

powerdanger_Categoria.hasMany(powerdanger_Hoteles)