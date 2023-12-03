'use server';

import { FetchEvent } from 'next/dist/compiled/@edge-runtime/primitives';

interface IFetchAnime {
    page: number;
    limit?: number;
    order?: string;
}

const setQueryParams = (params: any) => {
    const queryParams = new URLSearchParams();
    for (const key in params) {
        params[key] && queryParams.append(key, params[key]);
    }
    return queryParams;
};

export const fetchAnime = async ({ limit = 8, ...resProps }: IFetchAnime) => {
    const params = setQueryParams({ limit, ...resProps });
    const res = await fetch(
        'https://shikimori.one/api/animes?' + params.toString()
    );
    const data = await res.json();
    return data;
};
