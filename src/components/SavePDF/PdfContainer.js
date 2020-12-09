import { Avatar } from '@material-ui/core';
import React from 'react';
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

export default (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
          <Avatar style={{ color: 'black' ,backgroundColor: '#00ff89'}}>
            <PictureAsPdfIcon  onClick={createPdf}/>
          </Avatar>
       
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  )
}