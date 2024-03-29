import {createSelector} from '@ngrx/store';
import {IUserState} from '../state/user.state';
import {IAppState} from '../state/app.state';

const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
    selectUsers,
    (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
    selectUsers,
    (state: IUserState) => state.selectedUser
);
