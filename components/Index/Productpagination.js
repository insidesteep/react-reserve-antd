import React from 'react'
import { Pagination } from 'antd'

const Productpagination = () => {
  return (
    <div className='pagination'>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}

export default Productpagination
