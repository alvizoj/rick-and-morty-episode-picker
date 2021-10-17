import { useEffect, useState } from 'react';
import { COMMENT_API } from '../constants/ApiPaths';
import IComment from '../model/IComment';

export default async function postComment(props: IComment): Promise<IComment> {
    console.log('Posting Comment...');

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            comment: props.comment,
            name: props.name,
            seasonNumber: props.seasonNumber,
            episodeNumber: props.episodeNumber,
        }),
    };

    console.log(COMMENT_API);
    console.log('body: ' + requestOptions.body);

    const response = await fetch(COMMENT_API, requestOptions);
    if (!response.ok) {
        throw new Error(`Server responded with an error code: ${response.status}`);
    }

    const data = await response.json();
    console.log('data: ' + data);
    console.log('Comment posted.');
    return data;
}
