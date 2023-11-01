import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";
import { powerdanger_Reservas } from "./powerdanger_Reservas";


export class powerdanger_Personas extends Model{
    public idPersonas!: number;
    public dniPersonas!: number;
    public nombrePersonas!: string;
    public apellidoPersonas!: string;
    public direccionPersonas!: string;
    public telefonoPersonas!: number;
}

export interface powerdanger_Personas_I {
    idPersonas: number;
    dniPersonas: number;
    nombrePersonas: string;
    apellidoPersonas: string;
    direccionPersonas: string;
    telefonoPersonas: number;
}

powerdanger_Personas.init(
    {
        dniPersonas: {
            type: DataTypes.BIGINT,
            allowNull: false
          },
          nombrePersonas:{
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidoPersonas:{
            type: DataTypes.STRING,
            allowNull: false
        },
        direccionPersonas:{
            type: DataTypes.STRING,
            allowNull: false
        },
        telefonoPersonas:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    
    },{
        tableName: "Personas",
        sequelize: database,
        timestamps: false
    }
    );

    powerdanger_Personas.hasMany(powerdanger_Reservas)