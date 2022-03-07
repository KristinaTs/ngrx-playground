import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import {selectCitiesList} from '../../store/selectors/cities.selectors';
import {GetCities} from '../../store/actions/cities.action';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities$: Observable<{ name: string }[]> = this.store.pipe(select(selectCitiesList));

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    console.log('Cities Component dispact');
    this.store.dispatch(new GetCities());
  }

}
