import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import UserImage from '../../../Assets/Images/60ca12f9265e1.jpg';
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
          <li>
            <Link to="/Dashboard">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Dashborad</span>
              <span className="tooltip">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/User">
              <i className="bx bxs-user" />
              <span className="links_name">User</span>
              <span className="tooltip">User</span>
            </Link>
          </li>
          <li>
            <Link to="/Messages">
              <i className="bx bx-chat" />
              <span className="links_name">Messages</span>
              <span className="tooltip">Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/Analytics">
              <i className="bx bx-pie-chart-alt-2" />
              <span className="links_name">Analytics</span>
              <span className="tooltip">Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/File_Manager">
              <i className="bx bx-folder" />
              <span className="links_name">File Manager</span>
              <span className="tooltip">File Manager</span>
            </Link>
          </li>
          <li>
            <Link to="/Order">
              <i className="bx bx-cart-alt" />
              <span className="links_name">Order</span>
              <span className="tooltip">Order</span>
            </Link>
          </li>
          <li>
            <Link to="/Saved">
              <i className="bx bx-heart" />
              <span className="links_name">Saved</span>
              <span className="tooltip">Saved</span>
            </Link>
          </li>
          <li>
            <Link to="/Settings">
              <i className="bx bx-cog" />
              <span className="links_name">Settings</span>
              <span className="tooltip">Settings</span>
            </Link>
          </li>
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
