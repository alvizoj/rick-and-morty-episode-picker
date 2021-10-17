import React from 'react';
import { Link } from 'react-router-dom';
import { EPISODE } from '../constants/RouterPaths';

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
            <Link to={EPISODE(props.seasonNumber, props.episodeNumber)}>
                <h4>{props.title}</h4>
            </Link>
            <p>
                SEASON {props.seasonNumber} EPISODE {props.episodeNumber}
            </p>
        </div>
    );
}
