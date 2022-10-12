import React from 'react';
import './Updates.css';
import { updatesData } from '../../data/Data';

const Updates = () => {
  return (
    <div className="updates">
      {updatesData.map((update, index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
