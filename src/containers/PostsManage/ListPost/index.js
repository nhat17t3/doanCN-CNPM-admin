import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deletePost, getListPost, getListPostCompleted } from "../../../actions";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/Pagination";
import PostItem from "./PostItem";


ListPost.propTypes = {};

function ListPost(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [subject, setSubject] = useState("All");
  // const [grade, setGrade] = useState("All");
  // const [address, setAddress] = useState("All");
  const [listpost, setListpost] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);
  const [searchField, setSearchField] = useState("");


  useEffect(() => {
    dispatch(getListPostCompleted());
  }, []);

  const posts = useSelector((state) => state.posts.listPostCompleted);

  useEffect(() => {
    setListpost(posts);
  }, [posts]);

  const handleSearch = (e) => {
    e.preventDefault();
    const listHandleSearch = posts.filter((post) => {
      return (
        post.title?.toLowerCase().includes(searchField.toLowerCase()) ||
        post.grade?.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setListpost(listHandleSearch);
  };

  // Get current posts
   const indexOfLastCustomer = currentPage * customersPerPage;
   const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
   const currentCustomers = listpost?.slice(
     indexOfFirstCustomer,
     indexOfLastCustomer
   );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //  const checkfilter = (subject, grade, address, post) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = post.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = post.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = post.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = posts.filter((tutor) =>
  //     checkfilter(subject, grade, address, tutor)
  //   );
  //   console.log(listfillter);
  //   setListpost(listfillter);
  // };

  const handlePostViewClick = (post) => {
    console.log("View: ", post);
    const viewPostUrl = `/postview/${post.id}`;
    history.push(viewPostUrl);
  };

  const handlePostRemoveClick = async (post) => {
    console.log("delete: ", post);
    await dispatch(deletePost(post));
  };

  return (
    <>
     <Layout>
        <h1 className="text-center">List Post</h1>
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <div className="card">
              {/* <div className="card-header">
                <h3 className="card-title">DataTable with default features</h3>
              </div> */}
              {/* /.card-header */}
              <div className="card-body">
                <div
                  id="example1_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      {/* <div className="dataTables_length" id="example1_length">
                        <label>
                          Show{" "}
                          <select
                            name="example1_length"
                            aria-controls="example1"
                            className="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>{" "}
                          entries
                        </label>
                      </div> */}
                      
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="example1_filter" className="dataTables_filter">
                        <form onSubmit={handleSearch}>
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder="search posts"
                            aria-controls="example1"
                            value={searchField}
                        onChange={(e) => setSearchField(e.target.value)}
                          />
                        </label>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="example1"
                        className="table table-bordered table-striped dataTable dtr-inline"
                        role="grid"
                        aria-describedby="example1_info"
                      >
                        <thead data-test="datatable-head">
                          <tr>
                            <th style={{ width: "10%" }}>id</th>
                            <th style={{ width: "30%" }}>Title</th>
                            <th style={{ width: "10%" }}>Grade</th>
                            <th style={{ width: "10%" }}>Subject</th>
                            <th style={{ width: "10%" }}>Price</th>
                            <th style={{ width: "10%" }}>Address</th>
                            <th style={{ width: "20%" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody data-test="table-body">
                          {currentCustomers?.map((post) => (
                            <PostItem
                              post={post}
                              onRemoveClick={handlePostRemoveClick}
                              onViewClick={handlePostViewClick}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      {/* <div
                        className="dataTables_info"
                        id="example1_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div> */}
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="example1_paginate"
                      >
                        <Pagination
                          customersPerPage={customersPerPage}
                          totalCustomers={listpost?.length}
                          paginate={paginate}
                          currentPage={currentPage}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
          </div>
          <div className="col-md-1" />
        </div>
      </Layout>
    </>
  );
}

export default ListPost;
