import './App.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Button } from 'antd';
import AntdTable from '../AntdTable/AntdTable';

function App() {
  
  const [posts, setPosts] = useState({});
  useEffect(() => {
    initPosts();
  }, []);

  function initPosts() {
    return api.showPosts()
      .then(res => {
        setPosts(res)
      })
  }

  return (
    <div className="app">
      {/* <Button type="primary">Button</Button> */}
      <Switch>
        <Route exact path='/'>
          <AntdTable posts={posts}/>
        </Route>
        <Route path='/signUp'>
          <SignUp />
        </Route>
        <Route path='/signIn'>
          <SignIn />      
        </Route>
      </Switch>
    </div>
  );
}

export default App;
