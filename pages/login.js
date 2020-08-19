import Link from 'next/link'
import { Form, Input, Button, Card, Alert, Typography } from 'antd'
import { LockOutlined, MailOutlined, LoginOutlined } from '@ant-design/icons'

const { Title } = Typography

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className='login-form'>
      <Title type='secondary'>Log In</Title>

      <Alert
        type='error'
        showIcon
        message='Oops!'
        description='Password must be at least 6 characters'
      />
      <Alert
        type='success'
        showIcon
        message='Success!'
        description='Redirecting to account ...'
      />
      <Card>
        <Form
          name='normal_login'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className='site-form-item-icon' />}
              placeholder='Email'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              icon={<LoginOutlined />}
            >
              Log in
            </Button>
            Or{' '}
            <Link href='/signup'>
              <a>register now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
