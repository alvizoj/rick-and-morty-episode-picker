import React, { useEffect, useState } from 'react';
import { IEpisode } from '../model/IEpisode';
import { DEV_URL, PORT } from '../constants/development';
import { EPISODES_API } from '../constants/ApiPaths';
import EpisodeEntry from './EpisodeEntry';
import episodesService from '../services/episodesService';

function HomeScreen() {
    const [episodesArray, setEpisodesArray] = useState<IEpisode[]>([]);
    const { loading, error, episodes } = episodesService.useEpisodes();

    // useEffect(() => {
    //     document.title = 'R&M Episode Picker';

    //     let Full_URL: string = DEV_URL + PORT + EPISODES_API;
    //     fetch(Full_URL)
    //         .then(response => response.json())
    //         .then(data => {
    //             setEpisodesArray(data);
    //             console.log('*****FETCHED /episodes*****');
    //             //console.log(data);
    //         });
    // }, []);

    return (
        <div className='App'>
            {episodes && <h1 style={{ width: 500 }}>{JSON.stringify(episodes, null, 2)}</h1>}
            {/* {{episodesArray.map(episode => (
                <EpisodeEntry
                    key={episode.id}
                    id={episode.id}
                    description={episode.description}
                    title={episode.title}
                    seasonNumber={episode.season_number}
                    episodeNumber={episode.episode_number}
                />
            ))}} */}
        </div>
    );
}

export default HomeScreen;
