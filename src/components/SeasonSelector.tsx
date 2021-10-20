import React from 'react';
import '../css/SeasonSelector.css';

/*
Need row of buttons to select a season. Starts out as disabled until a season is clicked.
once a season is clicked, a list of episodeEntry objects are shown for that season.
*/
interface ISeasonSelectorProps {
    onSeasonChanged: (seasonNumber: number) => void;
}

export default function SeasonSelector(props: ISeasonSelectorProps): JSX.Element {
    return (
        <div className='season-selector'>
            <button onClick={() => props.onSeasonChanged(1)}>Season 1</button>
            <button onClick={() => props.onSeasonChanged(2)}>Season 2</button>
            <button onClick={() => props.onSeasonChanged(3)}>Season 3</button>
            <button onClick={() => props.onSeasonChanged(4)}>Season 4</button>
            <button onClick={() => props.onSeasonChanged(5)}>Season 5</button>
        </div>
    );
}
