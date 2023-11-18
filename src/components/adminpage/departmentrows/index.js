import { Link } from "react-router-dom";
import "./index.css";

const DepartmentPageRows = (props) => {
  const { eachObject } = props;
  const { icon, name, departmentDescription } = eachObject;

  return (
    <tr>
      <td className="bayanno-admin-department-table-data">
        <img
          src={icon}
          alt={name}
          className="bayanno-admin-department-table-data-icon"
        />
      </td>
      <td className="bayanno-admin-department-table-data">{name}</td>
      <td className="bayanno-admin-department-table-data bayanno-admin-department-table-data-des">
        {departmentDescription}
      </td>
      <td className="bayanno-admin-department-table-data">
        <div className="d-flex align-items-center flex-wrap">
          <Link className="bayanno-admin-department-table-data-manage-facilities-container mt-2 mb-2 mr-2">
            <i className="fa-solid fa-plus bayanno-admin-department-table-data-plus-icon"></i>
            <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
              Manage Facilities
            </span>
          </Link>
          <button className="bayanno-admin-department-table-data-edit-button mt-2 mb-2 mr-2">
            <i className="fa-solid fa-pencil bayanno-admin-department-table-data-plus-icon"></i>
            <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
              Edit
            </span>
          </button>
          <button className="bayanno-admin-department-table-data-delete-button mt-2 mb-2 mr-2">
            <i className="fa-regular fa-trash-can bayanno-admin-department-table-data-plus-icon"></i>
            <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
              Delete
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DepartmentPageRows;
