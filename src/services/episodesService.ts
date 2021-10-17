import { useEffect, useState } from 'react';
import { EPISODES_API, EPISODE_API } from '../constants/ApiPaths';
import { DEV_URL, PORT } from '../constants/development';
import { EPISODE } from '../constants/RouterPaths';
import Subscription from './Subscription';

interface IEpisode {
    id: number;
    title: string;
    description: string;
    image_link?: string;
    season_number: number;
    episode_number: number;
}

interface IEpisodesHook {
    loading: boolean;
    error: boolean;
    episodes: IEpisode[] | null;
}

class EpisodeService {
    private episodesSubscription = new Subscription<IEpisodesHook>();

    constructor() {
        this.fetchEpisodes();
    }

    public async getEpisode(season: number, episode: number): Promise<IEpisode> {
        console.log('Fecthing EPISODE data');

        const response = await fetch(EPISODE_API(season, episode));
        if (!response.ok) {
            throw new Error(`Server responded with an error code: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched Episode');
        return data;
    }

    private async fetchEpisodes(): Promise<void> {
        try {
            const response = await fetch(EPISODES_API);
            if (!response.ok) {
                throw new Error(`Server responded with an error code: ${response.status}`);
            }

            const data = await response.json();
            this.episodesSubscription.update({ loading: false, error: false, episodes: data });
            console.log('Fetched Episodes');
        } catch (error) {
            console.error('Error while fetching episodes.', error);
            this.episodesSubscription.update({ loading: false, error: true, episodes: null });
        }
    }

    public useEpisodes(): IEpisodesHook {
        const lastValue = this.episodesSubscription.lastValue;
        const [loading, setLoading] = useState(lastValue !== null ? lastValue.loading : true);
        const [error, setError] = useState(lastValue !== null ? lastValue.error : false);
        const [episodes, setEpisodes] = useState(lastValue?.episodes || null);
        useEffect(() => {
            const handleChange = (changes: IEpisodesHook) => {
                setLoading(changes.loading);
                setError(changes.error);
                setEpisodes(changes.episodes);
            };
            this.episodesSubscription.subscribe(handleChange);
            return () => {
                this.episodesSubscription.unsubscribe(handleChange);
            };
        }, []);
        return { loading, error, episodes };
    }
}

const singleton = new EpisodeService();
export default singleton;
