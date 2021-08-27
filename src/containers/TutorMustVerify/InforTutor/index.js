import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getListTutor, getListTutorMustVerify } from "../../../actions";
import Layout from "../../../components/Layout";

InforTutor.propTypes = {};

function InforTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { tutorId } = useParams();

  useEffect(() => {
    dispatch(getListTutorMustVerify());
  }, []);

  const editedTutor = useSelector((state) => {
    const foundTutor = state.tutors.listTutorMustVerify.find((x) => x.id === +tutorId);
    // console.log({ tutors: state.tutors, tutorId, foundTutor });
    return foundTutor;
  });

  // const v = useSelector((state) => state.tutors.listTutorMustVerify);
  // if (v.length == 0) return null;

  const tutorview = editedTutor;
  console.log("vieeeetutor", tutorview);

  return (
    <>
      <Layout>
        <div className="post-infor" style={{ marginLeft: "20px" }}>
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-3 post-infor__left ">
                <div className="post-infor__heading">
                  THÔNG TIN GIA SƯ CHI TIẾT
                </div>
                <ul className="post-infor__list">
                  <li className="post-infor__item">
                    <i className="fas fa-map-marker-alt post-infor__icon" />
                    Họ và tên: {tutorview?.name}
                  </li>
                  <li className="post-infor__item">
                    <i className="fa fa-book post-infor__icon" />
                    Môn học :
                    {tutorview?.subject.map((subject_item) => (
                      <span>{subject_item} ,</span>
                    ))}
                  </li>
                  <li className="post-infor__item">
                    <i className="fa fa-briefcase post-infor__icon" />
                    {tutorview?.grade.map((grade_item) => (
                      <span>{grade_item} ,</span>
                    ))}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-map-marker-alt post-infor__icon" />
                    Địa chỉ: {tutorview?.address}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-phone post-infor__icon" />
                    Số điện thoại: {tutorview?.phonenumber}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-dollar-sign post-infor__icon" />
                    Nghề nghiệp: {tutorview?.qualification}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-dollar-sign post-infor__icon" />
                    Mô tả: {tutorview?.description}
                  </li>
                </ul>
              </div>
              <div className="grid__column-9">
                <div className="post-infor__right">
                  <div className="post-infor__right-top">
                    {/* <div className="tutor-infor__user-time">
                      <i className="fas fa-user  tutor-infor__icon" />
                      <span className="tutor-infor__name">
                        ID STUDENT:{tutorview?.id}
                      </span>
                      <i className="fas fa-clock  tutor-infor__icon" />
                      <span className="tutor-infor__time ">
                        Ngày tạo lớp: 21/05/2021 09:05
                      </span>
                      <span className="tutor-infor__id"> Mã số lớp: 5336</span>
                    </div> */}
                     <div className="row mb-3">
                      
                      <div className="col-sm-6">
                      <h4 >Avatar</h4>
                        <img
                          className="img-fluid"
                          src={tutorview?.avatar}
                          alt="AVATAR"
                        />
                      </div>
                      <div className="col-sm-6">
                      <h4 >Cmnd</h4>
                        <img
                          className="img-fluid"
                          src={tutorview?.cmnd}
                          alt="CMND"
                        />
                      </div>
                    </div>

                    
                  </div>
                  <div className="post-infor__right-bottom">
                    {/* <i className="fas fa-tasks tutor-infor__icon" />
                    Yêu cầu học :
                    <div className="tutor-infor__description">
                      {tutorview?.description}
                    </div>
                    <i className="fas fa-calendar-alt tutor-infor__icon" /> */}
                    Thời gian có thể học ( Màu XANH hiển thị những lịch có thể
                    học ):
                    <div className="calender">
                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 2</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.sang_2
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.chieu_2
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.toi_2
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 3</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.sang_3
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.chieu_3
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.toi_3
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 4</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.sang_4
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.chieu_4
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.toi_4
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 5</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.sang_5
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.chieu_5
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.toi_5
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 6</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.sang_6
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.chieu_6
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.toi_6
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 7</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.sang_7
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.chieu_7
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.toi_7
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Chủ nhật</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.sang_cn
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.chieu_cn
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                tutorview?.schedules?.toi_cn
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default InforTutor;
