import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import { acceptOpenClass, getListClassRequestOpen } from "../../actions/Class/class.actions";
import ClassItem from "./ClassItem";

ClassRequestOpen.propTypes = {};

function ClassRequestOpen(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [subject, setSubject] = useState("All");
  // const [grade, setGrade] = useState("All");
  // const [address, setAddress] = useState("All");
  const [listClass, setListClass] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [classesPerPage] = useState(5);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    dispatch(getListClassRequestOpen());
  }, []);

  const classes = useSelector((state) => state.classes.listClassRequestOpen);

  useEffect(() => {
    setListClass(classes);
  }, [classes]);

  const handleSearch = (e) => {
    e.preventDefault();
    const listHandleSearch = classes.filter((classOpen) => {
      return classOpen?.post.title.toLowerCase().includes(searchField.toLowerCase());
    });
    setListClass(listHandleSearch);
  };

  // Get current classes
  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasss = listClass?.slice(indexOfFirstClass, indexOfLastClass);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //  const checkfilter = (subject, grade, address, classOpen) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = classOpen.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = classOpen.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = classOpen.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = classes.filter((classOpen) =>
  //     checkfilter(subject, grade, address, classOpen)
  //   );
  //   console.log(listfillter);
  //   setListClass(listfillter);
  // };

  const handleClassViewClick = (classOpen) => {
    console.log("View: ", classOpen);
    const viewClassUrl = `/postview/${classOpen.post.id}`;
    history.push(viewClassUrl);
  };

  const handleClassAcceptClick = async (classOpen) => {
    console.log("accept: ", classOpen);
    await dispatch(
      acceptOpenClass({
        id: classOpen.post.id,
        approval: true,
      })
    );
  };

 
  return (
    <>
      <Layout>
        <h1 className="text-center">List Class</h1>
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
                              placeholder="search classes"
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
                            <th style={{ width: "5%" }}>idPost</th>
                            <th style={{ width: "40%" }}>Title</th>
                            <th style={{ width: "15%" }}>Name Student</th>
                            <th style={{ width: "15%" }}>Name Tutor</th>
                            <th style={{ width: "15%" }}>Price</th>
                            <th style={{ width: "10%" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody data-test="table-body">
                          {currentClasss?.map((classOpen) => (
                            <ClassItem
                              classOpen={classOpen}
                              onViewClick={handleClassViewClick}
                              onAcceptClick={handleClassAcceptClick}
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
                          customersPerPage={classesPerPage}
                          totalCustomers={listClass?.length}
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

export default ClassRequestOpen;
