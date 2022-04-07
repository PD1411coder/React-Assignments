import React from 'react';
import logo from './logo.svg';
import './App.css';

const employee = {
  name: 'Alan Ford',
  employeeId: '00005152',
  appointment: '9.00 (24-05-2016)',
  email: 'alan.ford@gmail.com',
  phone: '+311123456789',
  status: 'In Progress',
  door: 'Mark',
  time: '10:30 (25-05-2016)',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
       }

var arrow="<"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='header'>
      <div className='arrow'>{arrow}</div>
      <div className='id-name'>
        <p className='name'>{employee.name}</p>
      <p className='id'>{employee.employeeId}</p>
        </div>
      <button className='print'>Print</button>
      </div>
      <div className='customer-info'>
        <div><label>Appointment:</label> {employee.appointment}</div>
        <div><label>Email:</label> {employee.email}</div>
        <div><label>Phone:</label> {employee.phone}</div>
      </div>
      <div className='order-info'>
        <div><p>Status</p>
        <p>&#9679; {employee.status}</p>
        </div>
        <div><p>Door</p>
        <p>{employee.door}</p>
        </div>
        <div><p>Time</p>
        <p>{employee.time}</p>
        </div>
      </div>
      <div className='product-list'>
        <div>
          <input type="checkbox"></input>
          <span className='checkmark'></span>
        </div>
        <div>
          <img src={employee.profileImg}></img>
        </div>
        <div >
          <label>Boltaart Bosbssen</label>
          <p>Overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkorf.</p>
        </div>
        <div className='last'><div>{arrow}</div></div>
      </div>
    </div>
  );
}

export default App;
