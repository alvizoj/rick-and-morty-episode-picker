import { COMMENT_API } from '../constants/ApiPaths';
import IComment from '../model/IComment';

export default async function sendCommentPostRequest(props: IComment): Promise<void> {
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

    const response = await fetch(COMMENT_API, requestOptions);
    if (!response.ok) {
        throw new Error(`Server responded with an error code: ${response.status}`);
    }

    const responseMessage = await response.text();
    console.log('Server response: ' + responseMessage);
}
