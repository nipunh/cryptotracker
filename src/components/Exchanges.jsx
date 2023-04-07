import { Col, Collapse, Row } from 'antd';
import React from 'react'
import { useGetExchangesQuery } from '../services/cryptoAPI'

const { Panel } = Collapse;

const Exchanges = () => {

  const {data, isFetching} = useGetExchangesQuery();  

  if (isFetching) return <>Loading....</>

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col> 
        <Col span={6}>Markets</Col>
        <Col span={6}>Changes</Col>
      </Row>
    <Row>
      {

        data?.data?.exchanges.map((exchange) => 
        <Panel header="This is panel header 1" key="1">
          <p>{exchange.name}</p>
        </Panel>
        )
      }
    </Row>
    </>
  )
}

export default Exchanges