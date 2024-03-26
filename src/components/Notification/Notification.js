

import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, duration, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <>
      {isVisible && (
        <div className="notification">
          <p>Congratulations!!! {message}</p>
        </div>
      )}
    </>
  );
};

export default Notification;
