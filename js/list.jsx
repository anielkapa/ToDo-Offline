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
      <div className="list">
          {this.props.createList()}
      </div>
    );
  }
}
export default List;
