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
      <div className="add">
        <form>
          <input value={this.props.value} placeholder=" add to-do " type="text" onChange={this.props.newToDo}></input>
          <button className="add_button" onClick={this.props.addToList}>+</button>
        </form>
      </div>
    );
  }
};

export default Add;
