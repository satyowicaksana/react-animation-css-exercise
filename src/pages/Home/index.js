import React, { useState } from 'react'
import Styles from './style'
import {
  Button,
  Sidebar
} from '../../components'

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100%' }}>
      <Sidebar show={showSidebar} />
      <div style={ Styles.container }>
        <Button onClick={ () => { setShowSidebar(!showSidebar) }}>TOGGLE SIDEBAR</Button>
        This is home page.
      </div>
    </div>
  )
}

export default Home