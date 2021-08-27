import React from "react";
import PropTypes from "prop-types";

CustomerItem.propTypes = {
  customer: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

CustomerItem.defaultProps = {
  customer: {},
  onEditClick: null,
  onRemoveClick: null,
  onViewClick: null,
};

function CustomerItem(props) {
  const { customer, onEditClick, onRemoveClick, onViewClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(customer);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(customer);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(customer);
  };

  return (
    <>
      <tr key={customer.id}>
        <td style={{ width: "10%" }}>{customer.id}</td>
        <td style={{ width: "20%" }}>{customer.username}</td>
        <td style={{ width: "20%" }}>{customer.email}</td>
        <td style={{ width: "20%" }}>{customer.phonenumber}</td>
        <td style={{ width: "15%" }}>{customer.roles[0]}</td>
        {customer.roles[0] !== "ROLE_ADMIN" ? (
          <td style={{ width: "15%" }}>
            <div className="project-actions  text-center">
              <button
                className="btn btn-danger btn-sm"
                style={{ margin: 5 }}
                onClick={handleRemoveClick}
              >
                <i className="fas fa-trash"></i>
                Delete
              </button>
            </div>
          </td>
        ) : (
          <td style={{ width: "15%" }}>
            <div className="project-actions  text-center">
              <button
                className="btn btn-danger btn-sm disabled"
                style={{ margin: 5 }}
              >
                <i className="fas fa-trash "></i>
                Delete
              </button>
            </div>
          </td>
        )}
      </tr>
    </>
  );
}

export default CustomerItem;
