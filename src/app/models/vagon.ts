

import { Seat } from './seat'; 

export class Vagon{
    id!: number;
    trainId!: number;
    trainNumber!: number;
    name!: string;
    seats!: Seat[];
}