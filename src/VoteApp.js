import { Provider } from 'react-redux'
//import { useEffect, useReducer } from 'react';
//import { AuthContext } from './auth/authContext';
//import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

// const init = () => {
//     return JSON.parse(localStorage.getItem('name')) || { logged: false };
// }


export const VoteApp = () => {
    //const [user, dispatch] = useReducer(authReducer, {}, init);

    // useEffect(() => {
    //     localStorage.setItem('user', JSON.stringify(user));
    // }, [user])

    return (
        // <AuthContext.Provider value={{ user, dispatch }}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
        // </AuthContext.Provider>
    );
};
