import React, { useEffect, useState } from 'react';
import IComment from '../model/IComment';
import sendCommentPostRequest from '../services/commentService';
import AppDescription from './AppDescription';
import EpisodesGrid from './EpisodesGrid';
import SeasonSelector from './SeasonSelector';

export default function HomeScreen(): JSX.Element {
    const [activeSeason, setActiveSeason] = useState(1);

    useEffect(() => {
        document.title = 'Rick And Morty Blog'; //Page title
    });

    const dummyComment: IComment = {
        comment: 'awesome pilot',
        name: 'ya boi',
        seasonNumber: 1,
        episodeNumber: 1,
    };

    function sendComment(): void {
        sendCommentPostRequest(dummyComment);
    }

    return (
        <div>
            <AppDescription />
            <SeasonSelector onSeasonChanged={setActiveSeason} />
            <EpisodesGrid activeSeason={activeSeason} />
            <button onClick={sendComment}>POST COMMENT</button>
        </div>
    );
}
