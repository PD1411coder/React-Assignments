import React from "react"

const Card = ({obj}) => {
    const { name, location, likes, description, PostImage, date } = obj;
    console.log(obj)
  return (
    <div className='card'>
      <div className="name-location">
        <div className="options">...</div>
        <h3>{obj.name}</h3>
       
   
        <p className="location">{obj.location}</p>
        
      </div>
      <div>
        {/* <img src={`require...({obj.PostImage})`} alt="Shinchan" /> */}
        <img src={PostImage} alt="Shinchan" />
      </div>
      <div className="info">
        <div className="like-send-button">
          <span className="likebutton">{"\u2661"}</span>
          <span className="sendbutton">{"\u27A2"}</span>
        </div>
        <div className="date">{obj.date}</div>
      
      <div className="last">
        <div className="likes">{obj.likes} likes</div>
        <div className="desc">{obj.description}</div>  
      </div>
      </div>

    </div>
  )
}

export default Card