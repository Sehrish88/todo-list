import React from 'react';

function TimeOfDay() {
  
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
          timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
          timeOfDay = "afternoon"
        } else {
          timeOfDay = "night"
        }
        
        return (
          <h3 style={{color: "green"}}>Have a good {timeOfDay}!</h3>
        ) 
      

}

export default TimeOfDay 