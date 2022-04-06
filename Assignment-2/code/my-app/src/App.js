import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


function App(props) {
 const {employee}=props;
console.log(employee)
return(
  <div className="container">
  {/* Start your React code here */}
  <img className="profile"  src={employee.profileImg}></img>
  <div className="name">{employee.name}</div>
  <div className="info">
    <div className="label">Location</div>
    <div className="label-value">{employee.location}</div>
    <div className="label">Blood group</div>
    <div className="label-value">{employee.bloodGroup}</div>
    <div className="label">Age</div>
    <div className="label-value">{employee.age}</div>
  </div>


  
</div>
)
}



export default App;
