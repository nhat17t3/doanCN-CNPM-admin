import React from "react";
import PropTypes from "prop-types";

PostItem.propTypes = {
  post: PropTypes.object,
  onViewClick: PropTypes.func,
  onAcceptClick: PropTypes.func,
  onDenyClick: PropTypes.func,
};

PostItem.defaultProps = {
  post: {},
  onViewClick: null,
  onDenyClick: null,
  onViewClick: null,
};

function PostItem(props) {
  const { post, onAcceptClick, onDenyClick, onViewClick } = props;


  const handleAccpetClick = () => {
    if (onAcceptClick) onAcceptClick(post);
  };

  const handleDenyClick = () => {
    if (onDenyClick) onDenyClick(post);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(post);
  };

  return (
    <>
      <tr key={post.id}>
        <td style={{ width: "5%" }}>{post.id}</td>
        <td style={{ width: "35%", }}>{post.title}</td>
        <td style={{ width: "10%" }}>{post.grade}</td>
        <td style={{ width: "10%" }}>{post.subject.map((a)=><span>{a}   </span>)}</td>
        <td style={{ width: "10%" }}>{post.price}</td>
        <td style={{ width: "10%" }}>{post.address}</td>
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
