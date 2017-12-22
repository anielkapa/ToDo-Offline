import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Add from './add.jsx';
import List from './list.jsx';

document.addEventListener('DOMContentLoaded', function(){
    class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          value:'',
          listToDo: [],
          listDone:[],
          done: false
        };
      }
      addToList = (event) =>{
        event.preventDefault();
        let submited = this.state.value;
        this.setState({
          value: '',
          listToDo: [this.state.value, ...this.state.listToDo]
        })
      }
      newToDo = (event) =>{
        this.setState({value:event.target.value});
      }
      createList = ()=>{
        let liList = this.state.listToDo;
        if (liList.length === 0){
          return null;
        }else {
          const toRender = liList.map((element,index)=>{
            return(<li key={index} className="active">
              <button className="done_button" onClick={e=>this.doneItem(index)}>V</button>
              {element}
              <button className='delete_button' onClick={e=>this.deleteItem(index)}>X</button>
              </li>)
          });
          return toRender;
        }
      }
      createDoneList = ()=>{
        let liList = this.state.listDone;
        if (liList.length === 0){
          return null;
        }else {
          const toRender = liList.map((element,index)=>{
            return(<li key={index} className="done">
              <button className="active_button" onClick={e=>this.activeItem(index)}>...</button>
              {element}
              <button className='delete_button' onClick={e=>this.deleteItem(index)}>X</button>
              </li>)
          });
          return toRender;
        }
      }
      deleteItem = (index) =>{
          let listUpdated = this.state.listToDo;
          listUpdated.splice(index, 1);
          this.setState({listToDo:listUpdated});
      }
      activeItem = (index) =>{
          const listUpdated = this.state.listDone;
          const activeItems = this.state.listToDo;
          activeItems.push(listUpdated[index]);
          listUpdated.splice(index, 1);
          this.setState({listDone: listUpdated, listToDo: activeItems});
      };
      doneItem = (index) => {
         const listUpdated = this.state.listToDo;
         const doneItems = this.state.listDone;
         doneItems.push(listUpdated[index]);
         listUpdated.splice(index, 1);
         this.setState({listDone: doneItems, listToDo: listUpdated});
     }
      classChange = ()=>{
        this.state.done ? 'done': null;
      }
      render(){
        return(
					<div style={{width:"100vw"}} >
            <h1>This is your pocket-offline TODO list</h1>
						<Add
              addToList={this.addToList}
              newToDo={this.newToDo}
              value={this.state.value} />
						<List
              createList={this.createList}
              createDoneList={this.createDoneList}/>
					</div>
        );
      }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
