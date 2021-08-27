import React from "react";
import PropTypes from "prop-types";

PostItem.propTypes = {
  tutor: PropTypes.object,
  onViewClick: PropTypes.func,
  onAcceptClick: PropTypes.func,
  onDenyClick: PropTypes.func,
};

PostItem.defaultProps = {
  tutor: {},
  onAcceptClick: null,
  onDenyClick: null,
  onViewClick: null,
};

function PostItem(props) {
  const { tutor, onAcceptClick, onDenyClick, onViewClick } = props;

  const handleAccpetClick = () => {
    if (onAcceptClick) onAcceptClick(tutor);
  };

  const handleDenyClick = () => {
    if (onDenyClick) onDenyClick(tutor);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(tutor);
  };

  return (
    <>
      <tr key={tutor.id}>
        <td style={{ width: "10%" }}>{tutor.id}</td>
        <td style={{ width: "15%" }}>{tutor.name}</td>
        <td style={{ width: "10%" }}>{tutor.phonenumber}</td>
        <td style={{ width: "15%" }}>
          {tutor.subject.map((a) => (
            <span>{a} </span>
          ))}
        </td>
        <td style={{ width: "15%" }}>
          {tutor.grade.map((a) => (
            <span>{a} </span>
          ))}
        </td>
        <td style={{ width: "15%" }}>{tutor.address}</td>
        <td className="project-actions text-center" style={{ width: "20%" }}>
          <button
            className="btn btn-primary btn-sm "
            style={{ margin: 5 }}
            onClick={handleViewClick}
          >
            <i className="fas fa-folder"></i>
            View
          </button>
          <button
            className="btn btn-info btn-sm"
            // style={{ margin: 5 }}
            onClick={handleAccpetClick}
          >
            <i class="fas fa-check-square"></i>
            Accept
          </button>
          {/* <button
            className="btn btn-warning btn-sm"
            style={{ margin: 5 }}
            onClick={handleDenyClick}
          >
           <i class="fas fa-not-equal"></i>
            Deny
          </button> */}
        </td>
      </tr>
    </>
  );
}

export default PostItem;
