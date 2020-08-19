import React from 'react'
import { Row, Col, Statistic, Button, Divider } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

const CartSummary = () => {
  return (
    <>
      <Divider />
      <Row gutter={16} style={{ textAlign: 'center' }}>
        <Col span={12}>
          <Statistic title='Sub total (USD)' value={112893} />
        </Col>
        <Col span={12}>
          <Button
            style={{ marginTop: 16 }}
            type='primary'
            icon={<ShoppingCartOutlined />}
          >
            Checkout
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default CartSummary
