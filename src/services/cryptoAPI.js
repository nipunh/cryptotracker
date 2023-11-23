import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_XRapidAPIKey,
    'X-RapidAPI-Host': process.env.REACT_APP_XRapidAPIHost
}

const baseUrl = 'https://api.coinranking.com/v2';

const createRequest = (url) => ({url , headers : cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({
        baseUrl,
    }),
    endpoints : (builder) => ({
        getCryptos : builder.query({ query : (count) => createRequest(`/coins?limit=${count}`)}),
        getCryptoDetails : builder.query({query : (coinId) => createRequest(`/coin/${coinId}`)}),
        getCryptoHistory : builder.query({query : ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)}),
        getExchanges : builder.query({query : () => createRequest(`/exchanges?limit=10`)})
    })
})

export const{
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;
