import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  acceptTutor,
  deleteTutor,
  denyTutor,
  getListTutor,
  getListTutorMustVerify,
} from "../../../actions";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/Pagination";
import TutorItem from "./TutorItem";

ListTutorMustVerify.propTypes = {};

function ListTutorMustVerify(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [subject, setSubject] = useState("All");
  // const [grade, setGrade] = useState("All");
  // const [address, setAddress] = useState("All");
  const [listTutor, setListTutor] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tutorsPerPage] = useState(5);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    dispatch(getListTutorMustVerify());
  }, []);

  const tutors = useSelector((state) => state.tutors.listTutorMustVerify);

  useEffect(() => {
    setListTutor(tutors);
  }, [tutors]);

  const handleSearch = (e) => {
    e.preventDefault();
    const listHandleSearch = tutors.filter((tutor) => {
      return tutor.name?.toLowerCase().includes(searchField.toLowerCase());
    });
    setListTutor(listHandleSearch);
  };

  // Get current tutors
  const indexOfLastTutor = currentPage * tutorsPerPage;
  const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
  const currentTutors = listTutor?.slice(indexOfFirstTutor, indexOfLastTutor);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //  const checkfilter = (subject, grade, address, tutor) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = tutor.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = tutor.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = tutor.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = tutors.filter((tutor) =>
  //     checkfilter(subject, grade, address, tutor)
  //   );
  //   console.log(listfillter);
  //   setListTutor(listfillter);
  // };

  const handleTutorViewClick = (tutor) => {
    console.log("View: ", tutor);
    const viewTutorUrl = `/tutorview-verify/${tutor.id}`;
    history.push(viewTutorUrl);
  };

  const handleTutorAcceptClick = async (tutor) => {
    console.log("accept: ", tutor);
    await dispatch(
      acceptTutor({
        id: tutor.id,
        approval: true,
      })
    );
  };

  const handleTutorDenyClick = async (tutor) => {
    console.log("deny: ", tutor);
    await dispatch(denyTutor({ id: tutor.id, approval: false }));
  };

  return (
    <>
      <Layout>
        <h1 className="text-center">Verify Tutor</h1>
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
                              placeholder="search tutors"
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
                            <th style={{ width: "15%" }}>Name</th>
                            <th style={{ width: "10%" }}>Phonenumber</th>
                            <th style={{ width: "15%" }}>Subject</th>
                            <th style={{ width: "15%" }}>Grade</th>
                            <th style={{ width: "15%" }}>Address</th>
                            <th style={{ width: "20%" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody data-test="table-body">
                          {currentTutors?.map((tutor) => (
                            <TutorItem
                              tutor={tutor}
                              onViewClick={handleTutorViewClick}
                              onAcceptClick={handleTutorAcceptClick}
                              onDenyClick={handleTutorDenyClick}
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
                          customersPerPage={tutorsPerPage}
                          totalCustomers={listTutor?.length}
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

export default ListTutorMustVerify;
