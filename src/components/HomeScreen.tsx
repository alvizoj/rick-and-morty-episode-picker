import React, { useEffect } from 'react';
import episodesService from '../services/episodesService';
import AppTitle from './AppTitle';

function HomeScreen(): JSX.Element {
    const { loading, error, episodes } = episodesService.useEpisodes();

    useEffect(() => {
        document.title = 'Rick And Morty Blog'; //Page title
    });

    return <AppTitle />;
}

export default HomeScreen;
