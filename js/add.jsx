import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Add extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div>
        <form>
          <input value={this.props.value} placeholder="add to-do" type="text" onChange={this.props.newToDo}></input>
          <button onClick={this.props.addToList}>Add!</button>
        </form>
      </div>
    );
  }
};

export default Add;
