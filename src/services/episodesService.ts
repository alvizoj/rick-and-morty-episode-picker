import { useEffect, useState } from 'react';
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
        setTimeout(() => this.fetchEpisodes(), 0);
        setTimeout(() => {
            this.episodesSubscription.update({ loading: false, error: true, episodes: null });
        }, 5000);
    }
    private fetchEpisodes() {
        console.log('FETCHING EPISODES!!!!!!!');
        fetch('http://localhost:8000/api/v1/episodes')
            .then(response => response.json())
            .then(data => {
                this.episodesSubscription.update({ loading: false, error: false, episodes: data });
            })
            .catch(() => {
                this.episodesSubscription.update({ loading: false, error: true, episodes: null });
            });
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
