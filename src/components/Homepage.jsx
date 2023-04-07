import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI'
import {Cryptocurrencies, News }from '../components'
import Loader from './Loader'

const {Title} = Typography;

const Homepage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);

  if (isFetching) return <Loader />;

  const globalStats = data?.data?.stats;
  return (
    <>
      <Title>Global Crypto Statictics</Title>
      <Row>
        {/* Total 24 spaces */}
        <Col span={12}><Statistic title={"Total Crypto Currency"} value={globalStats.total} /></Col>
        <Col span={12}><Statistic title={"Total Exchanges"} value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title={"Total Market Cap"} value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title={"Total 24 Hour Volume"} value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title={"Total Markets"} value={millify(globalStats.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Crypto</Title>
        <Title level={3} className="show-more">
          <Link to='/cryptocurrencies'>Show more</Link>
          </Title>
      </div>

      <Cryptocurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Lates Crypto News</Title>
        <Title level={3} className="show-more">
          <Link to='/news'>Show more</Link>
          </Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage