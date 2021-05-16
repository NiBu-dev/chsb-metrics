import React, { FC, ReactNode } from 'react'
import Layout from '../components/layout'


export const Homepage: FC<ReactNode> = () => {

  return (
    <Layout>
      <h1 style={{fontSize: "28px", color: "green"}}>CHSB metrics page</h1>
    </Layout>
  )
}

export default Homepage
