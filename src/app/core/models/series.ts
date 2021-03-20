export interface Character {
    id: number;   
    title: string;   
    description: string;
    pageCount: number;
    resourceURI: string;
    series: ISerie;
    prices: IPrice;
}

export interface ISerie {
    resourceURI: string;
    name: string;
}

export interface IPrice {
    type: string;
    price: number;
}