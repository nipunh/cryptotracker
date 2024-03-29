import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'Ocp-Apim-Subscription-Key': process.env.REACT_APP_CRYPTONEWSAPI,
}



const baseUrl = 'https://api.bing.microsoft.com/v7.0';

const createRequest = (url) => ({url , headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNews',
    baseQuery : fetchBaseQuery({baseUrl
    }),

    endpoints : (builder) => ({
        getCryptoNews : builder.query({query : ({newsCategory, count}) =>  createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
    })
}) 

export const{
    useGetCryptoNewsQuery,
} = cryptoNewsApi;