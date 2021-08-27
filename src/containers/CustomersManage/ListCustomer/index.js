import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCustomer, getListCustomer } from "../../../actions";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/Pagination";
import CustomerItem from "./CustomerItem";

ListCustomer.propTypes = {};

function ListCustomer(props) {
  const dispatch = useDispatch();

  // const [subject, setSubject] = useState("All");
  // const [grade, setGrade] = useState("All");
  // const [address, setAddress] = useState("All");
  const [listcustomer, setListcustomer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);
  const [searchField, setSearchField] = useState("");


  useEffect(() => {
    dispatch(getListCustomer());
  }, []);

  const customers = useSelector((state) => state.customers.listCustomer);

  useEffect(() => {
    setListcustomer(customers);
  }, [customers]);

  const handleSearch = (e) => {
    e.preventDefault();
    const listHandleSearch = customers.filter((customer) => {
      return (
        customer.username?.toLowerCase().includes(searchField.toLowerCase()) ||
        customer.email?.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setListcustomer(listHandleSearch);
  };

  // Get current tutors
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = listcustomer?.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  // Change page
  const paginate = (pageNumber) => {setCurrentPage(pageNumber);
  console.log("click")};

  //  const checkfilter = (subject, grade, address, customer) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = customer.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = customer.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = customer.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = customers.filter((tutor) =>
  //     checkfilter(subject, grade, address, tutor)
  //   );
  //   console.log(listfillter);
  //   setListcustomer(listfillter);
  // };

  // const handleCustomerEditClick = (customer) => {
  //   console.log("Edit: ", customer);
  //   const editCustomerUrl = `/customeredit/${customer.id}`;
  //   history.push(editCustomerUrl);
  // };

  // const handleCustomerViewClick = (customer) => {
  //   console.log("View: ", customer);
  //   const viewCustomerUrl = `/customerview/${customer.id}`;
  //   history.push(viewCustomerUrl);
  // };

  const handleCustomerRemoveClick = async (customer) => {
    console.log("delete: ", customer);
    await dispatch(deleteCustomer(customer));
  };

  return (
    <>
      <Layout>
        <h1 className="text-center">List User</h1>
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
                      <Link className="btn btn-success" to="/addcustomer">
                        Add User
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="example1_filter" className="dataTables_filter" >
                      <form onSubmit={handleSearch}>
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder="Search user"
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
                            <th style={{ width: "20%" }}>Username</th>
                            <th style={{ width: "20%" }}>Email</th>
                            <th style={{ width: "20%" }}>Phonenumber</th>
                            <th style={{ width: "15%" }}>Role</th>
                            <th style={{ width: "15%" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody data-test="table-body">
                          {currentCustomers?.map((customer) => (
                            <CustomerItem
                              customer={customer}
                              onRemoveClick={handleCustomerRemoveClick}
                              // onEditClick={handleCustomerEditClick}
                              // onViewClick={handleCustomerViewClick}
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
                          totalCustomers={listcustomer.length}
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

export default ListCustomer;
