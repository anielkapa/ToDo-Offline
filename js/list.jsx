import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div>
        <ul className="toDo">
          {this.props.createList()}
        </ul>
        <ul className="done">
          {this.props.createDoneList()}
        </ul>
      </div>
    );
  }
}
export default List;
