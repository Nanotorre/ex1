import React from 'react';

const ValidInput = (props) => {
  return props.totalLength<5? <p>Text too short</p> : <p>Text long enough</p>
}

export default ValidInput;