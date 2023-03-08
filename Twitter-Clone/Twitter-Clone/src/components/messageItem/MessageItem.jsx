import { useState, useEffect } from "react";
import "./index.css";

const MessageItem = ({ messageData }) => {
  const { userId, body } = messageData;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="MessageItem">
      <img
        className="MessageItem__photo"
        src={userData.image}
        alt={userData.username}
      />
      <div className="MessageItem__content">
        <span>{userData.username}</span>
        <span>{userData.email}</span>
        <p>{body}</p>
        <div className="MessageItem__content--icons">
          <img
            src="https://img.icons8.com/windows/256/speech-bubble--v1.png"
            alt="chat"
          ></img>
          <img
            src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
            alt="arrow"
          ></img>
          <img
            src="https://img.icons8.com/material-outlined/256/hearts.png"
            alt="heart"
          ></img>
          <img
            src="https://img.icons8.com/sf-regular/256/upload.png"
            alt="upload"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
