import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout, Menu, Avatar } from 'antd'
import {
  ShoppingCartOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
  FileAddFilled,
} from '@ant-design/icons'

const Header = () => {
  const router = useRouter()
  console.log(router)

  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[router.pathname]}>
        <Menu.Item key='/'>
          <Link href='/'>
            <a>
              <Avatar
                size='default'
                shape='square'
                src='/static/logo.svg'
                style={{ marginRight: '0.5em' }}
              />{' '}
              React Reserve
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key='/create' icon={<FileAddFilled />}>
          <Link href='/create'>
            <a>Create Post</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='/cart' icon={<ShoppingCartOutlined />}>
          <Link href='/cart'>
            <a>Cart</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='/account' icon={<UserOutlined />}>
          <Link href='/account'>
            <a>Account</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='/login' icon={<LoginOutlined />} active>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='/signup' icon={<UserAddOutlined />}>
          <Link href='/signup'>
            <a>Signup</a>
          </Link>
        </Menu.Item>
        <Menu.Item icon={<LogoutOutlined />}>Logout</Menu.Item>
      </Menu>
    </Layout.Header>
  )
}

export default Header
