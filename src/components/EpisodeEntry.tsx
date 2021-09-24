import React from 'react';

interface IEpisodeProps {
    id: number;
    title: string;
    description: string;
    imageLink?: string;
    seasonNumber: number;
    episodeNumber: number;
}

export default function EpisodeEntry(props: IEpisodeProps): JSX.Element {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>
                SEASON {props.seasonNumber} EPISODE {props.episodeNumber}
            </p>
        </div>
    );
}
