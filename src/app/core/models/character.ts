export interface Character {
    id: number;   
    name: string;   
    description: string;
    resourceURI: string;
    series: ISerie;
}

export interface ISerie {
    available: number;
    colleciontUri: string;
    items:IItem[];
}



export interface IItem {
    resourceURI: string;
    name: string;
}