import React from 'react'
import { Result, Button, List } from 'antd'
import { ShoppingOutlined, CloseOutlined } from '@ant-design/icons'

const CartItemList = () => {
  const user = false

  const data = [
    {
      id: 1,
      title: 'Bernie Gledhill',
      media:
        'https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/f/d/fd1_lngchr_bh_frontlow-field-lounge-chair-tait-blush.jpg',
      price: 3600,
      quantity: 3,
    },
    {
      id: 2,
      title: 'Bernie Gledhill',
      media:
        'https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/f/d/fd1_lngchr_bh_frontlow-field-lounge-chair-tait-blush.jpg',
      price: 3600,
      quantity: 3,
    },
  ]

  return user ? (
    <List
      itemLayout='vertical'
      size='large'
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[<Button icon={<CloseOutlined />}>Delete</Button>]}
          extra={<img width={150} alt='img' src={item.media} />}
        >
          <List.Item.Meta
            title={
              <a href='#'>
                <h2>{item.title}</h2>
              </a>
            }
            description={`${item.quantity}x${item.price}`}
          />
        </List.Item>
      )}
    />
  ) : (
    <Result
      icon={<ShoppingOutlined />}
      title='No products in your cart. Add some!'
      extra={<Button type='primary'>Login to Add Products</Button>}
    />
  )
}

export default CartItemList
