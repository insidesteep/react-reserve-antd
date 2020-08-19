import React from 'react'
import { Layout } from 'antd'
import Head from 'next/head'
import HeaderContent from './HeaderContent'
import Header from './Header'

const { Content, Footer } = Layout

const MyLayout = ({ children }) => {
  return (
    <>
      <Head>
        <HeaderContent />
        <title>React Reserve - AntD</title>
        <link rel='stylesheet' type='text/css' href='/static/styles.css' />
      </Head>
      <Layout>
        <Header />
        <Content
          className='site-layout'
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 380 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          React Resrve - AntD ©2020 Created by Suxrob
        </Footer>
      </Layout>
    </>
  )
}

export default MyLayout
