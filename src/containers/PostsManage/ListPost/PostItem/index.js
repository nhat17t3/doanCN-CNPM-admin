import React from "react";
import PropTypes from "prop-types";

PostItem.propTypes = {
  post: PropTypes.object,
  onViewClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PostItem.defaultProps = {
  post: {},
  onRemoveClick: null,
  onViewClick: null,
};

function PostItem(props) {
  const { post, onRemoveClick, onViewClick } = props;


  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(post);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(post);
  };

  return (
    <>
      <tr key={post.id}>
        <td style={{ width: "10%" }}>{post.id}</td>
        <td style={{ width: "30%", }}>{post.title}</td>
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
          {/* <button className="btn btn-info btn-sm" style={{ margin: 5 }}>
            <i className="fas fa-pencil-alt"></i>
            Edit
          </button> */}
          <button
            className="btn btn-danger btn-sm"
            style={{ margin: 5 }}
            onClick={handleRemoveClick}
          >
            <i className="fas fa-trash"></i>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default PostItem;
