import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
   'x-rapidapi-key': '4f897de2f0mshaf9248d3369d577p1181ccjsn7cb7c1e90251',
    'x-rapidapi-host': 'google-news22.p.rapidapi.com'
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