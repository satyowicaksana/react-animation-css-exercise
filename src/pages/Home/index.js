import React, { useState } from 'react'
import Styles from './style'
import Sidebar from '../../components/Sidebar'

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100%' }}>
      <Sidebar show={showSidebar} />
      <div style={ Styles.container }>
        <button onClick={ () => { setShowSidebar(!showSidebar) }}>TOGGLE SIDEBAR</button>
        This is home page.
      </div>
    </div>
  )
}

export default Home