import React, { useState } from 'react'
import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsAPI';
import { useGetCryptosQuery } from '../services/cryptoAPI';


const {Title, Text} = Typography;
const {Option} = Select;
const demoImage = '';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory || 'Cryptocurrency', count: simplified ? 6 : 12 })
  const { data : cryptosList} = useGetCryptosQuery(100);

  if (!cryptoNews?.data) return "Loading...";
  return (

    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder="Select a crypto"
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
              {cryptosList?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews?.data.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                 <Title className="news-title" level={4}>
                  {news.title}
                  </Title>
                <img style={{ maxWidth : '200px', maxHeight : '100px'}} src={news?.thumbnail || demoImage} alt="news"></img> 
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
              </p> 

              <div className="provider-container">
                <div>
                  <Avatar src={news?.source?.favicon || demoImage} alt="" />
                  <Text className="provider-name">{news.source.name}</Text>
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))
      }
    </Row>
  )
}

export default News