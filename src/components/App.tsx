import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import { HOME } from '../constants/RouterPaths';
import AppTitle from './AppTitle';
import EpisodeScreen from './EpisodeScreen';

function App(): JSX.Element {
    return (
        <div className='site'>
            <AppTitle />
            <BrowserRouter>
                <div className='content-wrap'>
                    <Switch>
                        <Route component={HomeScreen} exact path={HOME} />
                        <Route component={EpisodeScreen} path='/season/:season/episode/:episode' />
                        <Redirect exact from='*' to={HOME} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
