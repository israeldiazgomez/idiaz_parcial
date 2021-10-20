import sequelize, {Model, DataTypes} from 'sequelize';
import {database} from "../database/db";
import {Mantenimiento} from './Mantenimiento';


export class Equipo extends Model {
    public marca!: string;
    public modelo!: number;
}
export interface EquipoI {
    marca: string;
    modelo: number;
}
Equipo.init (
    {
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    },
    {
        tableName: "equipos",
        sequelize: database,
        timestamps: true
    }
);

Mantenimiento.hasMany(Equipo);
Equipo.belongsTo(Mantenimiento);