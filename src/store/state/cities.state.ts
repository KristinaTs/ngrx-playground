export interface ICity {
    name: string;
}

export interface ICitiesState {
    cities: ICity[];
    currentCity?: ICity;
}

export const initialCitiesState: ICitiesState = {
    cities: [],
    currentCity: null
}
