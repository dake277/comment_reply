import React, {useEffect, useState} from "react";
import Comment from "./comment";
import CommentReply from "./commentReply";

const CommentTree = function ({commentList}){
  console.log(commentList)
  const [foldId, setFoldId] = useState(0);
  const [isShow, setIsShow] = useState(true)

  const handleShowFoldId = (id) =>{
    setFoldId(id)
  }
  const isFold = (id,itemid) =>{
    let idarr = Array.from(id.toString())
    let itemidarr = Array.from(itemid.toString())
    if(itemidarr.length <= idarr.length){
      return false
    }else {
      // idarr.forEach((item, index) =>{
      //   if(item !== itemidarr[index]){
      //     console.log(item, itemidarr[index])
      //     return false
      //   }
      // })
      for(let i=0; i<idarr.length; i++){
        if(idarr[i] !== itemidarr[i]){
          return false
        }
      }
    }
    console.log(itemid)
    return true
  }
  useEffect(()=>{
    // handleShowFoldId(id)
  },[foldId, isShow])

  return (
    <table className="commentTree">
      <tbody>
          {commentList.flat(Infinity).map((item,index) =>{
            return(
              <tr className={`${(isFold(foldId, item.id) && !isShow) ? 'none': ''}`}>
                <td>
                  <table border={0}>
                    <tbody>
                      <tr>
                        <td className="ind" indent="1">
                          <img src="s.gif" height="1" width={`${item.subcomment * 40}px`}/>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a id="up_31418680" className="clicky"
                                     href="vote?id=31418680&amp;how=up&amp;auth=1bf5ca0e951bf869130944259e60a2fc5dab3ed0&amp;goto=item%3Fid%3D31417839#31418680">
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td >
                          <Comment item={item} key={index}  handleShow={setIsShow} handleShowFoldId = {setFoldId}/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            )
          })}

      </tbody>
    </table>
  )
}




export default CommentTree;
