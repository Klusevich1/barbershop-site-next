import { Price } from "./PriceProps";

export interface Service {
    id: number;
    name: string;
    prices: Price[];
}