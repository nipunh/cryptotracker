import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4f897de2f0mshaf9248d3369d577p1181ccjsn7cb7c1e90251',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url , headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNews',
    baseQuery : fetchBaseQuery({baseUrl
    }),

    endpoints : (builder) => ({
        getCryptoNews : builder.query({query : ({newsCategory, count}) =>  createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
    })
}) 

export const{
    useGetCryptoNewsQuery,
} = cryptoNewsApi;