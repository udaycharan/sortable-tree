import './App.css';
import React from "react";
import Tree from "./components/Tree";
import Button from './components/DownloadJson';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';



function App() {

  return (
    <Provider store={store}>
    <div className="App" >
      <div className="btn-style">
      <Button/>
      </div>
      <Tree/>
    </div>
    </Provider>
  );
}

export default App;
