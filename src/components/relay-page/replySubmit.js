import React, {useContext, useRef, useState} from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
function ReplySubmit({addRePlyArr}){
  const textArea = useRef()

  const addReply = () =>{

    if(textArea.current.value === ''){
      alert("输入不能为空")
    }else{
      let commentArr = [{
        name: 'Localhost',
        value: textArea.current.value,
        time: new Date,
        // subcomment: 0,
      }]
      addRePlyArr(commentArr)

      textArea.current.value = '';
    }
  }

  return (
    <table className="fatitem"  border="0">
      <tbody>
      <tr style={{height: '10px'}}/>
      <tr>
        <td width="15px"/>
        <td>
          <textarea ref={textArea}   name="text" rows= {8} cols={80}/>
          {/*<Link to="/" >*/}
            <input className="AddComment" type= "submit" value= "add reply"  onClick={addReply}/>
          {/*</Link>*/}

        </td>
      </tr>
      </tbody>
      {/*<br/><br/>*/}
    </table>
  )
}
export default ReplySubmit;

