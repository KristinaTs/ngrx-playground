import {CitiesActions, ECitiesActions} from '../actions/cities.action';
import {ICitiesState, initialCitiesState} from '../state/cities.state';

export const citiesReducer = (
    state = initialCitiesState,
    action: CitiesActions
): ICitiesState => {
    console.log('Cities Reducer', action);
    switch (action.type) {
        case ECitiesActions.GetCitiesSuccess: {
            return {
                ...state,
                cities: action.payload
            };
        }
    }
};
