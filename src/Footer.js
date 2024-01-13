import React, {useState, useEffect} from 'react';
import "./Footer.css"



const Footer = () => {
  

  const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

  return (

    <footer className="footer">
      <div className="left-part">
        <p>&copy; 2024 Anton Almishev</p>
      </div>
      <div className="right-part">
        <p>{formatTime()}</p>
      </div>
    </footer>
  );
};


export default Footer;