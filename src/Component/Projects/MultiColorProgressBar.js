import {Component} from 'react';
import './MultiColorProgressBar.css';


class MultiColorProgressBar extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
  
    render() {
  
        const parent = this.props;
  
        let bars = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="bar" style={{'backgroundColor': item.color, 'width': item.value + '%'}}  key={i}> </div>
                )
            }
            return null;
        }, this);
  
        let legends = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
              if(item.value > 0) {
                return (
                    <div className="legend" key={i}>
                        <span className="dot" style={{'color': item.color}}>●</span>
                        <span className="label"><b>{item.name}</b><label>{item.value +'%'}</label></span>
                    </div>
             )
         }
         return null;
      }, this);
  
      return (
          
        <div className="multicolor-bar">
       
            <div className="bars">
                {bars === ''?'':bars}
            </div>
            <div className="legends">
                {legends === ''?'':legends}
            </div>
        </div>
      );
    }
  }
  
  export default MultiColorProgressBar;