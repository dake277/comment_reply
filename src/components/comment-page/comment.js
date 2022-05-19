import React, {useState} from "react";
import {formatDateTime} from "../../util";
import {Link} from "react-router-dom";
export default function Comment({item, handleShow, handleShowFoldId}){

  const [show, setShow] = useState(true)

  const handleFold = () =>{
    handleShowFoldId(item.id)
    handleShow(!show)
    setShow(!show)
  }
  // console.log(index)

  return(
    <>
      <div style={{marginTop:'-2px',marginBottom:'5px'}}>
        <span className="comhead"> {`Id:${item.id}`} </span>
        <span className="comhead"> {formatDateTime(item.time)} </span>
        <span className="comhead"> | next </span>
        <span className="comhead">
          <a href="#!" onClick={handleFold}>{`${show? '[–]':'[more]'} `}</a>
        </span>
      </div>
      <div className= {`comment ${show ? '': 'none'}`}>
        <span className="c00"> {item.value} </span>
      </div>
      <div className= {`${show ? '': 'none'}`}>
        <p><font size="1">
          <Link className="link" to={`/reply?id=${item.id}&subcomment=${item.subcomment}`}>reply</Link>
        </font>
        </p>
      </div>

    </>
  )
}