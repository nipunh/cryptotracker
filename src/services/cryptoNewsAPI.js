import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
   'x-rapidapi-key': process.env.REACT_APP_XRapidAPIKey,
    'x-rapidapi-host': process.env.REACT_APP_XRapidAPIHost
}

const baseUrl = 'https://google-news22.p.rapidapi.com/v1';

const createRequest = (url) => ({url , headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNews',
    baseQuery : fetchBaseQuery({baseUrl
    }),

    endpoints : (builder) => ({
        getCryptoNews : builder.query({query : ({newsCategory, count}) =>  createRequest(`/search?q=${newsCategory}&country=us&language=en`),
    })
    })
}) 

export const{
    useGetCryptoNewsQuery,
} = cryptoNewsApi;