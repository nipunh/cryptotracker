import React from 'react'
import {Line} from 'react-chartjs-2';
import {Col, Row, Typography} from 'antd'; 

const {Title, Text} = Typography;

const LineChart = ({coinHistory, currrentPrice, coinName}) => {
  return (
    <>
        <Row className="chart-header">
            <Title className='chart-title' level={2}>{coinName} Price Chart</Title>
            <Col className="price-container">
                <Title level={5} className="price-change">{coinHistory?.data?.change}</Title>
                <Title level={5} className="current-price">Current {coinName} Price : $ {currrentPrice}</Title>
            </Col>
        </Row>
    </>
  )
}

export default LineChart