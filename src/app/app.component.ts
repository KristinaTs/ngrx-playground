import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectConfig} from '../store/selectors/config.selectors';
import {IAppState} from '../store/state/app.state';
import {GetConfig} from '../store/actions/config.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ngrx-playground';

    config$ = this._store.pipe(select(selectConfig));
    todoObj = {name: 'TEST'};

    // tslint:disable-next-line:variable-name
    constructor(private _store: Store<IAppState>) {
    }

    ngOnInit() {
        this._store.dispatch(new GetConfig());
    }

    changeTodo() {
        this.todoObj.name = 'TEST 1';
    }
}
