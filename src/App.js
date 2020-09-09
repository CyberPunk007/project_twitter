import React from 'react';
import { Button } from 'antd';
import './App.css';
import Dtpicker from './Components/Dtpicker';
import Head from './Components/Head';
import Post from './Components/Post';

const App = () => (
  <div className="App">
    <Head/>
    <Post/>
    <Dtpicker/><br/>
    <Button type="danger" htmlType='submit'>Post Tweet</Button>
  </div>
);

export default App;
