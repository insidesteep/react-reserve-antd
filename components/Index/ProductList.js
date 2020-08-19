import React from 'react'
import { Card, Row, Col } from 'antd'

const { Meta } = Card

const ProductList = ({ products = [1, 2, 3] }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Row gutter={[32]}>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductList
