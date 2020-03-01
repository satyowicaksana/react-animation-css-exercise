import React from 'react';
import {
  Button
} from 'reactstrap'
import Styles from './style'

export default (props) => {
  const { color, onClick } = props;

  return(
    <Button
      style={ Styles.button }
      color={ color }
      onClick={ onClick }
    >
      {
        props.children
      }
    </Button>
  )
}