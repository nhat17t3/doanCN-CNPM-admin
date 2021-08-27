import React from "react";
import PropTypes from "prop-types";

PostItem.propTypes = {
};

PostItem.defaultProps = {
};

function PostItem(props) {
  const { classOpen, onAcceptClick, onViewClick } = props;

  const handleAccpetClick = () => {
    if (onAcceptClick) onAcceptClick(classOpen);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(classOpen);
  };

  return (
    <>
      <tr key={classOpen.post.id}>
        <td style={{ width: "5%" }}>{classOpen.post.id}</td>
        <td style={{ width: "40%" }}>{classOpen.post.title}</td>
        <td style={{ width: "15%" }}>{classOpen.post.studentName}</td>
        <td style={{ width: "15%" }}>{classOpen.tutor.name}</td>
        <td style={{ width: "15%" }}>{classOpen.post.price} VND</td>


        <td className="project-actions text-center" style={{ width: "10%" }}>
          {/* <button
            className="btn btn-primary btn-sm "
            style={{ margin: 5 }}
            onClick={handleViewClick}
          >
            <i className="fas fa-folder"></i>
            View
          </button> */}
          <button
            className="btn btn-info btn-sm"
            onClick={handleAccpetClick}
          >
            <i class="fas fa-check-square"></i>
            Accept
          </button>
          
        </td>
      </tr>
    </>
  );
}

export default PostItem;
