import React, {useRef, useState, useEffect} from "react"
import { useMousePosition } from './useMousePosition.js'

const Eye = ({r=100}) => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  /* const {x, y, width, height} = ref.current.getBoundingClientRect();
   * const cx = x + width / 2;
   * const cy = y + height / 2;
   */
  const outerStyle = {
    backgroundColor: 'grey',
    width: `${r}px`,
    height: `${r}px`,
    borderRadius: '50%'
  };

  const inner_r = r * 0.6;

  const innerStyle = {
    backgroundColor: 'black',
    width: `${inner_r}px`,
    height: `${inner_r}px`,
    borderRadius: '50%'
  }


  return (
    <div style={outerStyle} ref={ref}>
      <div style={innerStyle}>eye</div>
    </div>
  )
}

export default Eye;
