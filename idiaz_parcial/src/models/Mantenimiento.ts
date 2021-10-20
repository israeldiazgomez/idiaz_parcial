import sequelize, {Model, DataTypes} from 'sequelize';
import { TriviaSyntaxKind } from 'typescript';
import {database} from "../database/db";

export class Mantenimiento extends Model {
    public fecha!: Date;
    public descripcion!: string;
    public resultado!: boolean;
}
export interface MantenimientoI {
    fecha: Date;
    descripcion: string;
    resultado: boolean;
}

Mantenimiento.init (
    {
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resultado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

    },
    {
        tableName: "mantenimientos",
        sequelize: database,
        timestamps: true
    }
);

