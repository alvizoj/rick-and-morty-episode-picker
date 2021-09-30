import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import { HOME } from '../constants/RouterPaths';

function App(): JSX.Element {
    return (
        <div className='site'>
            <BrowserRouter>
                <div className='content-wrap'>
                    <Switch>
                        <Route component={HomeScreen} exact path={HOME} />
                        <Redirect exact from='/' to={HOME} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
