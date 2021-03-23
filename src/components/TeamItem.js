import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const TeamItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.strTeamBadge} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.strTeam}</h1>
          <ul>
            <li>
              <strong>Year Established:</strong> {item.intFormedYear}
            </li>
            <li>
              <strong>Stadium Name: </strong>
              {item.strStadium}
            </li>
            <li>
              <strong>Stadium Capacity: </strong> {item.intStadiumCapacity}
            </li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <span>
            <a
              href={"http://" + item.strTwitter}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </span>
          <span>
            <a
              href={"http://" + item.strFacebook}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </span>
          <span>
            <a
              href={"http://" + item.strInstagram}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
