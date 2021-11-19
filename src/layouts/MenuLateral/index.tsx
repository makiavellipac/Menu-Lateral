import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../Data/Routes';

import UserImage from '../../Assets/Images/60ca12f9265e1.jpg';
import './index.css';

const index: FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const setClass = () => setActive(!active);
  return (
    <>
      <div className={active ? 'sidebar active' : 'sidebar'}>
        <div className="logo-content">
          <div className="logo">
            <i className="bx bxl-c-plus-plus" />
            <div className="logo-name">CodingLab</div>
          </div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={setClass}
            role="presentation"
          />
        </div>
        <ul className="nav_list">
          <li>
            <i
              className="bx bx-search"
              onClick={setClass}
              role="presentation"
            />
            <input type="text" placeholder="Search..." />
          </li>
          {Routes.map(({ path, name, className }) => (
            <li key={`routes ${path}`}>
              <Link to={path}>
                <i className={className} />
                <span className="links_name">{name}</span>
                <span className="tooltip">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="profile-content">
          <div className="profile">
            <div className="profile-details">
              <img src={UserImage} alt="Elon" />
              <div className="name-job">
                <div className="name">Elon Musk</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out" />
          </div>
        </div>
      </div>
      <div className="home-content">
        <div className="text">{children}</div>
      </div>
    </>
  );
};

export default index;
