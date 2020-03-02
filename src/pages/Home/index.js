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
        <div style={ Styles.homeCard } >
          <p style={ Styles.homeText }>This sentence is styled using global styles function.</p>
          <p>This card styled using global styles object.</p>
        </div>
      </div>
    </div>
  )
}

export default Home