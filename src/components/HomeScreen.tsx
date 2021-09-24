import React, { useEffect, useState } from 'react';
import { IEpisode } from '../model/IEpisode';
import { DEV_URL, PORT } from '../constants/development';
import { EPISODES_API } from '../constants/ApiPaths';
import EpisodeEntry from './EpisodeEntry';
import episodesService from '../services/episodesService';

function HomeScreen() {
    const { loading, error, episodes } = episodesService.useEpisodes();

    return (
        <div className='App'>
            {loading && <p>LOADING</p>}
            {error && <p>ERROR</p>}
            {episodes &&
                episodes.map((episode: IEpisode) => (
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

export default HomeScreen;
