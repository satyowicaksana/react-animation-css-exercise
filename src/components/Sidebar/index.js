import React from 'react'
import Styles from './style'
import { FaBeer } from 'react-icons/fa';

const Sidebar = (props) => {
  const { show } = props;
  const width = show ? {width: '200px'} : {width: '40px', padding: '10px'}

  return (
    <div style={ {...Styles.container, ...width } }>
      <div style={ Styles.listItem }>
        <div>
          <FaBeer />
        </div>
        <div style={ !show ? Styles.hide : Styles.title }>
          BEER
        </div>
      </div>
    </div>
  )
}

export default Sidebar