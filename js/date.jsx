import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Today extends Component {
  constructor(props){
    super(props);
    var today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth(),
        day = today.getDate(),
        weekday = today.getDay();
    this.state = {
      year,
      month,
      day,
      weekday
    };
  }
  getWeekday = () => {
    const weekNameArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let weekdayName = weekNameArray[this.state.weekday];
    let toReturn = weekdayName.toUpperCase();
    return toReturn;
  }
  getMonthName = () =>{
    const monthNameArray = ["January", "February", "March", "April", "May", "June", "July", "August", 'September', 'October', 'November', 'December'];
    let monthName = monthNameArray[this.state.month];
    let toUpper = monthName.toUpperCase();
    let toReturn = toUpper.substring(0,3);
    return toReturn;
  }
  render(){
    return(
      <div className="date">
        <div className="date_dayMonthYear">
          <strong>{this.state.day} </strong>
          <div className="date_dayMonthYear_dayMonth">
            <span> {this.getMonthName()} </span>
            <span> {this.state.year}</span>
          </div>
        </div>
        <div className="date_weekday"> {this.getWeekday()} </div>
      </div>
    );
  }
}

export default Today;
