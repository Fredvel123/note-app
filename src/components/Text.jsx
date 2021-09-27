import React, { Fragment } from 'react';
import useLocalStorage from '../context/useLocalStorage';
 
function Text() {
  const [ text, setText ] = useLocalStorage('text', '');
  return(
    <Fragment>
      <textarea 
        placeholder="What's in your mine?"
        onChange={e => setText(e.target.value)}
        value={text}
        name="" 
        id="" 
        cols="30" 
        rows="10"
      ></textarea>
      <button>Send Info</button>
    </Fragment>
  )
}
export default Text;