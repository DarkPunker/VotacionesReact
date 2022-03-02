import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authislogged, islogged } from '../actions/auth';

export const PrivateRoute = ({ children }) => {

    const dispatch = useDispatch();
    const { logged } = useSelector(state => state.auth);

    useEffect(()=>{
        dispatch(authislogged())
    }, [])
    return logged
        ? children
        : <Navigate to="/" />

}