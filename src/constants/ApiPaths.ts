import { parseParams } from '../utils/apiUtils';
import { DEV_URL, PORT } from './development';

const baseDevURL = DEV_URL + PORT;
export const EPISODES_API: string = baseDevURL + '/episodes';
export const EPISODE_API = (season: number, episode: number): string =>
    baseDevURL + '/episode' + parseParams({ season, episode });

export const COMMENT_API: string = baseDevURL + '/comment';
