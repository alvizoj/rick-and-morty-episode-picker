import React from 'react';
import episodesService from '../services/episodesService';
import EpisodeEntry from './EpisodeEntry';

interface IEpisodeGridProps {
    activeSeason: number;
}

export default function EpisodeGrid(props: IEpisodeGridProps): JSX.Element {
    const { loading, error, episodes } = episodesService.useEpisodes();

    return (
        <div className='episodes-block'>
            {episodes &&
                episodes
                    .filter(episode => episode.season_number === props.activeSeason)
                    .map(episode => (
                        <EpisodeEntry
                            key={episode.id}
                            id={episode.id}
                            title={episode.title}
                            description={episode.description}
                            seasonNumber={episode.season_number}
                            episodeNumber={episode.episode_number}
                        />
                    ))}
        </div>
    );
}
