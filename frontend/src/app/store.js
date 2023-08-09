import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import rememberMeReducer from '../features/rememberMe/rememberMeSlice';
import editModeReducer from '../features/editMode/editModeSlice';

export const store = configureStore({
  reducer: {
    editMode: editModeReducer,
    login: loginReducer,
    rememberMe: rememberMeReducer,
  },
});
