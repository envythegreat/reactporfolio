import React from 'react';

const CircleColor = ({color}) => {
  return(
    <button className="drop__pickerBtn">
      <box-icon type='solid' name='circle' color={color}></box-icon>
    </button>
  )
}

export default CircleColor;