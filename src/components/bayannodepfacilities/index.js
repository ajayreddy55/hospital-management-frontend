import { useState } from "react";
import "./index.css";

const BayannoDepartmentFacilities = (props) => {
  const { eachObject } = props;
  const [facilityOpened, setFacilityOpened] = useState(false);
  return (
    <div
      key={eachObject.id}
      className="bayanno-departments-facilities-items-container"
    >
      <h4
        className={`bayanno-departments-facilities-item-heading ${
          facilityOpened
            ? "bayanno-departments-facilities-item-heading-active"
            : ""
        }`}
        onClick={() => setFacilityOpened((prevState) => !prevState)}
      >
        {eachObject.title}
      </h4>
      <hr className="bayanno-departments-facilities-item-hr-line" />
      <p
        className={`bayanno-departments-facilities-item-description ${
          facilityOpened
            ? ""
            : "bayanno-departments-facilities-item-description-shown"
        }`}
      >
        {eachObject.description}
      </p>
    </div>
  );
};

export default BayannoDepartmentFacilities;
