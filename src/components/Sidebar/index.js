import React from 'react'
import Styles from './style'

const Sidebar = (props) => {
  const width = props.show ? {width: '200px'} : {width: '0%'}

  return (
    <div style={ {...Styles.container, ...width } }>
      <div style={ Styles.listItem }>
        aaa
      </div>
    </div>
  )
}

export default Sidebar