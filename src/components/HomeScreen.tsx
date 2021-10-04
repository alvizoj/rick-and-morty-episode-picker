import React, { useEffect } from 'react';
import AppDescription from './AppDescription';
import AppTitle from './AppTitle';
import SeasonSelector from './SeasonSelector';

export default function HomeScreen(): JSX.Element {
    //const { loading, error, episodes } = episodesService.useEpisodes();

    useEffect(() => {
        document.title = 'Rick And Morty Blog'; //Page title
    });

    return (
        <div>
            <AppTitle />
            <AppDescription />
            <SeasonSelector onSeasonChanged={setActiveSeason} />
        </div>
    );
}
