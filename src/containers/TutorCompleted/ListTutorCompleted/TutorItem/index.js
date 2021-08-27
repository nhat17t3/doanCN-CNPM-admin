import React from "react";
import PropTypes from "prop-types";

PostItem.propTypes = {
  tutor: PropTypes.object,
  onViewClick: PropTypes.func,

};

PostItem.defaultProps = {
  tutor: {},
  onAcceptClick: null,

};

function PostItem(props) {
  const { tutor, onAcceptClick, onDenyClick, onViewClick } = props;



  const handleViewClick = () => {
    if (onViewClick) onViewClick(tutor);
  };

  return (
    <>
      <tr key={tutor.id}>
        <td style={{ width: "5%" }}>{tutor.id}</td>
        <td style={{ width: "20%" }}>{tutor.name}</td>
        <td style={{ width: "10%" }}>{tutor.age}</td>
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
        <td style={{ width: "10%" }}>{tutor.address}</td>
        <td className="project-actions text-center" style={{ width: "10%" }}>
          <button
            className="btn btn-success btn-sm "
            style={{ margin: 5 }}
            onClick={handleViewClick}
          >
            <i className="fas fa-folder"></i>
            View
          </button>
        </td>
      </tr>
    </>
  );
}

export default PostItem;
