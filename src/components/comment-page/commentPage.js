import SubmitForm from "./submitForm";
import React, {useContext, useEffect, useState} from "react";
import CommentTree from "./commentTree";
import {CommentContext} from "../../context";
function CommentPage() {
  const {commentList, setCommentList} = useContext(CommentContext)
  const setCommentArr = (comment) =>{
    let _commentList = [...commentList]
    comment[0].id = parseInt((_commentList.length+1))
    _commentList.push(comment)
    setCommentList(_commentList)
    localStorage.setItem('commentArr', JSON.stringify(_commentList))
  }


  return (
    <div className="App">

        <table  border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef">
          <tbody >
          <tr>
            <td>
              <SubmitForm setCommentArr = {setCommentArr}/>
            </td>
          </tr>

          <tr>
            <td>
              <CommentTree commentList={commentList}/>
            </td>
          </tr>
          </tbody>
        </table>
        <br/>
        <br/>

    </div>
  );
}

export default CommentPage;
