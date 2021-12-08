import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from '../routes';
import {RANDOM_DISH_ROUTE} from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const {dish} = useContext(Context);
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={RANDOM_DISH_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
