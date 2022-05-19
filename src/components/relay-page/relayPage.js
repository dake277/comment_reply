import SubmitForm from "../comment-page/submitForm";
import React, {useEffect, useState, useContext} from "react";
import queryString, {parse} from 'query-string'
import {CommentContext} from "../../context";
import ReplyTop from "./replyTop";
import Comment from "../comment-page/comment";
import ReplySubmit from "./replySubmit";
import ReplyComment from "./replyComment";
import {Link,withRouter} from "react-router-dom";
import {findItemByID, getItemLengthByID, pushItemToList} from "../../util";
function RelayPage(props) {

  const {commentList, setCommentList} = useContext(CommentContext)
  let commentStr = localStorage.getItem('commentArr')
  let commentJSON = JSON.parse(commentStr)


  const commentid = parseInt(queryString.parse(window.location.search)['id'])

  const replyComment = findItemByID(commentList, commentid)


  const addRePlyArr = (comment) => {
    let _commentList = [...commentList]
    comment[0].subcomment = replyComment.subcomment + 1
    let replyLen = getItemLengthByID(_commentList, commentid)
    // console.log(replyLen)
    console.log(comment[0])
    comment[0].id = parseInt(commentid.toString() + replyLen.toString() )
    console.log(comment[0].id)
    comment[0].Commentid = commentid
    console.log(comment)
    const replyRes = pushItemToList(_commentList, commentid, comment)
    setCommentList(replyRes)
    localStorage.setItem('commentArr', JSON.stringify(replyRes))
    props.history.push("/");
  }

  useEffect(() =>{
    if(commentJSON !== null){
      setCommentList(commentJSON)
    }
  }, [])

  return (
    <div className="App">
        <table  border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef">
          <tbody >

          <tr bgcolor="#ff6600">
            <td>
              <ReplyTop/>
            </td>
          </tr>

          <tr>
            <td>
              <div className="tdReply">
                {/*<Comment className="replyComment" item={commentJSON[commentid]}/>*/}
                <ReplyComment className="replyComment" item={replyComment} />
              </div>

            </td>
          </tr>

          <tr>
            <td>
                <ReplySubmit addRePlyArr = {addRePlyArr}/>
              {/*<SubmitForm setCommentArr = {setCommentArr}/>*/}
            </td>
          </tr>

          </tbody>
        </table>
        <br/>
        <br/>
    </div>
  );
};

export default withRouter(RelayPage)
