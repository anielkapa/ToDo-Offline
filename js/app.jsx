import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Add from './add.jsx';
import List from './list.jsx';
import Today from './date.jsx';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

document.addEventListener('DOMContentLoaded', function(){
    class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          value:'',
          listToDo: ['Buy new sweatshirt', 'Begin promotional phase', 'Read an article', 'Try not to fall asleep', 'Watch "Sherlock"', 'Begin QA for the product', 'Go for a walk'],
          active:["done","done","active","active","active","active","active"],
          buttonActive:["done_button","done_button","undone_button","undone_button","undone_button","undone_button","undone_button"]
        };
      };
      createList = ()=>{
        const SortableItem = SortableElement(({value}) =>
            <li>
              {value}
          </li>
        );
        const SortableList = SortableContainer(({items}) => {
        return (
            <ul>
              {items.map((value, index) => (
                <div key={index} className={this.state.active[index]}>
                <SortableItem key={`items-${index}`} index={index} value={value}/>
                <button onClick={e=>this.doneItem(index)} key={`done-${index}`} className={this.state.buttonActive[index]} index={index}>  </button>
                <button onClick={e=>this.deleteItem(index)} key={`del-${index}`} className="delete_button" index={index}> X </button>
              </div>
            ))}
            </ul>
          );
        });
        let liList = this.state.listToDo;
        if (liList.length === 0){
          return null;
        }else {
          return <SortableList items={this.state.listToDo} onSortEnd={this.onSortEnd} />;
        }
      };
      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
          listToDo: arrayMove(this.state.listToDo, oldIndex, newIndex),
          active: arrayMove(this.state.active, oldIndex, newIndex),
          buttonActive: arrayMove(this.state.buttonActive, oldIndex, newIndex)
        });
      };
      newToDo = (event) =>{
        this.setState({value:event.target.value});
      };
      addToList = (event) =>{
        event.preventDefault();
        let submited = this.state.value;
        this.setState({
          value: '',
          listToDo: [this.state.value, ...this.state.listToDo],
          active: ['active', ...this.state.active],
          buttonActive:['undone_button', ...this.state.buttonActive]
        })
      };
      deleteItem = (index) =>{
          const listUpdated = this.state.listToDo;
          const activeUpdated = this.state.active;
          const activeButton = this.state.buttonActive;
          listUpdated.splice(index, 1);
          activeUpdated.splice(index, 1);
          activeButton.splice(index, 1);
          this.setState({listToDo:listUpdated, active:activeUpdated,buttonActive:activeButton});
      };
      doneItem = (index) => {
        const activeList = this.state.active;
        const activeButton = this.state.buttonActive;
        activeList[index] ==="active"? activeList[index]="done" : activeList[index]="active";
        activeButton[index] === "done_button"? activeButton[index] = "undone_button" : activeButton[index] ="done_button";
        this.setState({active:activeList, buttonActive:activeButton})
     };
      render(){
        return(
					<div className={"container"}>
            <Today />
						<Add
              addToList={this.addToList}
              newToDo={this.newToDo}
              value={this.state.value}
              />
						<List
              createList={this.createList}
              createDoneList={this.createDoneList}/>
					</div>
        );
      }
    };
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
