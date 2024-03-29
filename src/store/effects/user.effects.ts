// import {Injectable} from '@angular/core';
// import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
// import {EUserActions, GetUser, GetUsers, GetUsersSuccess} from '../actions/user.actions';
// import {map, switchMap, withLatestFrom} from 'rxjs/operators';
// import {of} from 'rxjs';
// import {IAppState} from '../state/app.state';
// import {select, Store} from '@ngrx/store';
// import {selectUserList} from '../selectors/user.selectors';
//
// @Injectable()
// export class UserEffects {
//     @Effect()
//     getUser$ = this._actions$.pipe(
//         ofType<GetUser>(EUserActions.GetUser),
//         map(action => action.payload),
//         withLatestFrom(this._store.pipe(select(selectUserList))),
//         switchMap(([id, users]) => {
//             const selectedUser = users.filter(user => user.id === +id)[0];
//             // @ts-ignore
//             return of(new GetUsersSuccess(selectedUser));
//         })
//     );
//
//     @Effect()
//     getUsers$ = this._actions$.pipe(
//         ofType<GetUsers>(EUserActions.GetUsers),
//         switchMap(() => this._userService.getUsers()),
//         switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users))
//     );
//
//     constructor(
//         private _userService: UserService,
//         private _actions$: Actions,
//         private _store: Store<IAppState>
//     ) {}
//
// }
