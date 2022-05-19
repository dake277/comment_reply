import React, {useState} from "react";
import {formatDateTime} from "../../util";

export default function ReplyComment({item}){

  const [isShow, setIsShow] = useState(true)

  const handleShow = () =>{
    setIsShow(!isShow)
  }
  // console.log(index)

  return(
    <>
      <div style={{marginTop:'-2px',marginBottom:'5px'}}>
        <span className="comhead"> {`id:${item.id}`} </span>
        <span className="comhead"> {formatDateTime(item.time)} </span>
        <span className="comhead"> | next </span>
        <span className="comhead">
          <a href="#!" onClick={handleShow}>{`${isShow? '[–]':'[1 more]'} `}</a>
        </span>
      </div>
      <div className= {`comment ${isShow ? '': 'none'}`}>
        <span className="c00"> {item.value} </span>

      </div>

    </>
  )
}