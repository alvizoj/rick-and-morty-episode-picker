import React, { useEffect } from 'react';
import { IEpisode } from '../model/IEpisode';
import { DEV_URL, PORT } from '../constants/development';
import { EPISODES_API } from '../constants/ApiPaths';
import EpisodeEntry from './EpisodeEntry';

export default function HomeScreen() {
    const [episodesArray, setEpisodesArray] = React.useState<IEpisode[]>([]);

    useEffect(() => {
        document.title = 'R&M Episode Picker';

        let Full_URL: string = DEV_URL + PORT + EPISODES_API;
        fetch(Full_URL)
            .then(response => response.json())
            .then(data => {
                setEpisodesArray(data);
                console.log('*****FETCHED /episodes*****');
                //console.log(data);
            });
    }, []);

    return (
        <div className='App'>
            {episodesArray.map(episode => (
                <EpisodeEntry
                    key={episode.id}
                    id={episode.id}
                    description={episode.description}
                    title={episode.title}
                    seasonNumber={episode.season_number}
                    episodeNumber={episode.episode_number}
                />
            ))}
        </div>
    );
}
