import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {ECitiesActions, GetCities, GetCitiesSuccess} from '../actions/cities.action';
import {switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {ICity} from '../state/cities.state';

@Injectable({
    providedIn: 'root'
})
export class CitiesService {
    getCities(): Observable<ICity[]> {
        return of([
            {
                name: 'Sofia',
            },
            {
                name: 'Ruse',
            }
        ]);
    }
}

@Injectable({
    providedIn: 'root'
})
export class CitiesEffects {
    @Effect() getCities$ = this.actions$.pipe(
        ofType<GetCities>(ECitiesActions.GetCities),
        tap(() => {
            console.log('Cities Effects');
        }),
        switchMap(() => this.citiesService.getCities()),
        switchMap((res: any) => of(new GetCitiesSuccess(res))
    ));


    constructor(
        private actions$: Actions,
        private store: Store<IAppState>,
        private citiesService: CitiesService
    ) {}
}
