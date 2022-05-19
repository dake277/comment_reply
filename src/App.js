import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CommentPage from "./components/comment-page/commentPage";
import RelayPage from "./components/relay-page/relayPage";
import {CommentContext} from "./context";
import {useEffect, useState} from "react";
function App() {
  const [commentList, setCommentList] = useState([])
  let commentStr = localStorage.getItem('commentArr')
  let commentJSON = JSON.parse(commentStr)


  useEffect(() =>{
    if(commentJSON !== null){
      setCommentList(commentJSON)
    }
  }, [])

  return (
    <CommentContext.Provider value={{commentList, setCommentList}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <CommentPage/>
          </Route>
          <Route path="/reply">
            <RelayPage/>
          </Route>
        </Switch>
      </Router>
    </CommentContext.Provider>
  );
}

export default App;
