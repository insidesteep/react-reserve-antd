import { useState } from 'react'
import { Form, Col, Row, Button, Input, Typography } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

const { TextArea } = Input
const { Title } = Typography

const Create = () => {
  const [mediaPreview, setMediaPreview] = useState('')

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setMediaPreview(window.URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <div className='login-form'>
      <Title type='secondary'>Create New Product</Title>

      <Form layout='vertical' onFinish={(e) => console.log(e)}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name='name'
              label='Name'
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder='Name' onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='price'
              label='Price'
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input type='number' min={0} placeholder='Price' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='media'
              label='media'
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input type='file' placeholder='Media' onChange={handleChange} />
            </Form.Item>
          </Col>
          {mediaPreview && (
            <Col span={24} style={{ textAlign: 'center' }}>
              <img src={mediaPreview} style={{ maxWidth: '200px' }} />
            </Col>
          )}
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name='description'
              label='Description'
              rules={[
                {
                  required: true,
                  message: 'Description',
                },
              ]}
            >
              <TextArea placeholder='Description' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type='primary' icon={<SaveOutlined />} htmlType='submit'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Create
