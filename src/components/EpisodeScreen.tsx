import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useParams } from 'react-router-dom';
import { HOME } from '../constants/RouterPaths';
import { IEpisode } from '../model/IEpisode';
import episodesService from '../services/episodesService';

interface IEpisodeScreenParams {
    episode: string | undefined;
    season: string | undefined;
}

/*
Need to refactor to fetch episode a single time. Currently results in infinite loop
*/
export default function EpisodeScreen() {
    const { episode, season } = useParams<IEpisodeScreenParams>();
    if (!episode || !season || isNaN(parseInt(season)) || isNaN(parseInt(episode))) {
        return <Redirect to={HOME} />;
    }

    const [episodeData, setData] = useState<IEpisode | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        console.log('FETCHING SINGLE EPISODE');
        episodesService
            .getEpisode(parseInt(season), parseInt(episode))
            .then(setData)
            .catch(err => {
                console.error('Failed to fetch episode', err);
                setErrorMessage(err.message);
            });
    }, []);

    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            {episodeData && (
                <div>
                    <span>{episodeData.title}</span>
                </div>
            )}
        </div>
    );
}
