import React, {useContext, useRef, useState} from "react";
import {CommentContext} from "../../context";
import {useEffect} from "react";
function SubmitForm({setCommentArr}){
  const textArea = useRef()
  // let textValue = ''
  // const handleText = e =>{
  //   console.log(e);
  // }
  const addComment = () =>{

    if(textArea.current.value === ''){
      alert("输入不能为空")
    }else{
      let commentArr = [{
        name: 'Localhost',
        value: textArea.current.value,
        time: new Date,
        subcomment: 0,
      }]
      setCommentArr(commentArr)

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
          <input className="AddComment" type= "submit" value= "add comment" onClick={addComment} />
        </td>
      </tr>
      </tbody>
      {/*<br/><br/>*/}
    </table>
  )
}
export default SubmitForm;

