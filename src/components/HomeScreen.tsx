import React, { useEffect, useState } from 'react';
import AppDescription from './AppDescription';
import AppTitle from './AppTitle';
import EpisodesGrid from './EpisodesGrid';
import SeasonSelector from './SeasonSelector';

export default function HomeScreen(): JSX.Element {
    const [activeSeason, setActiveSeason] = useState(1);

    useEffect(() => {
        document.title = 'Rick And Morty Blog'; //Page title
    });

    return (
        <div>
            <AppDescription />
            <SeasonSelector onSeasonChanged={setActiveSeason} />
            <EpisodesGrid activeSeason={activeSeason} />
        </div>
    );
}
