import React from "react";
import {Link} from "react-router-dom";

export default function CommentReply({index}){
  return (
    <div className="reply">
      <p><font size="1">
        <Link className="link" to={`/reply?id=${index}`}>reply</Link>
        {/*<Link className="link" to={{*/}
        {/*  pathname: 'reply',*/}
        {/*  state:{*/}
        {/*    index:index*/}
        {/*  }*/}
        {/*}}>reply</Link>*/}
      </font>
      </p>
    </div>
  )
}