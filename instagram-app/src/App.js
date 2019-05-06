import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';

import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {

constructor(){
   super();

   this.state = {
     dummyData: dummyData
   }
}

  render() {
    return (
      <div className="App" >
         {
           this.state.dummyData.map(dataContent => {
              return (<PostContainer  dataContent={dataContent} key={dataContent.timestamp}/>)
           })
         }
      </div>
    );
    }
}

export default App;
