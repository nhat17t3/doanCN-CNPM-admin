import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getListPost, getListPostCompleted } from "../../../actions";
import Layout from "../../../components/Layout";

InforPost.propTypes = {};

function InforPost(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getListPostCompleted());
  }, []);

  const editedPost = useSelector((state) => {
    const foundPost = state.posts.listPostCompleted.find((x) => x.id === +postId);
    // console.log({ posts: state.posts, postId, foundPost });
    return foundPost;
  });

  const v = useSelector((state) => state.posts.listPostCompleted);
  if (v.length == 0) return null;
  // console.log({ postId, editedPost });
  const postview = editedPost;
  console.log("vieeeepost", postview);

  return (
    <>
      <Layout>
        <div className="post-infor" style={{marginLeft:"20px"}}>
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-3 post-infor__left ">
                <div className="post-infor__heading">
                  THÔNG TIN LỚP HỌC CHI TIẾT
                </div>
                <ul className="post-infor__list">
                  <li className="post-infor__item">
                    <i className="fa fa-book post-infor__icon" />
                    Môn học :
                    {postview.subject.map((subject_item) => (
                      <span>{subject_item} ,</span>
                    ))}
                  </li>
                  <li className="post-infor__item">
                    <i className="fa fa-briefcase post-infor__icon" />
                    {postview.grade}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-map-marker-alt post-infor__icon" />
                    Địa chỉ: {postview.address}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-phone post-infor__icon" />
                    Số điện thoại: {postview.phonenumber}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-dollar-sign post-infor__icon" />
                    Học phí: {postview.price} VND/buổi
                  </li>
                 
                </ul>
              </div>
              <div className="grid__column-9">
                <div className="post-infor__right">
                  <div className="post-infor__right-top">
                    <div className="post-infor__title">{postview.title}</div>
                    <div className="post-infor__user-time">
                      <i className="fas fa-user  post-infor__icon" />
                      <span className="post-infor__name">
                        ID STUDENT:{postview.idStudent}
                      </span>
                      <i className="fas fa-clock  post-infor__icon" />
                      <span className="post-infor__time ">
                        Ngày tạo lớp: 21/05/2021 09:05
                      </span>
                      <span className="post-infor__id"> Mã số lớp: 5336</span>
                    </div>
                  </div>
                  <div className="post-infor__right-bottom">
                    <i className="fas fa-tasks post-infor__icon" />
                    Yêu cầu học :
                    <div className="post-infor__description">
                      {postview.description}
                    </div>
                    <i className="fas fa-calendar-alt post-infor__icon" />
                    Thời gian có thể học ( Màu XANH hiển thị những lịch có thể
                    học ):

                    <div className="calender">
                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 2</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postview.schedules.sang_2
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
                                postview.schedules.chieu_2
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
                                postview.schedules.toi_2
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
                                postview.schedules.sang_3
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
                                postview.schedules.chieu_3
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
                                postview.schedules.toi_3
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
                                postview.schedules.sang_4
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
                                postview.schedules.chieu_4
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
                                postview.schedules.toi_4
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
                                postview.schedules.sang_5
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
                                postview.schedules.chieu_5
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
                                postview.schedules.toi_5
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
                                postview.schedules.sang_6
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
                                postview.schedules.chieu_6
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
                                postview.schedules.toi_6
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
                                postview.schedules.sang_7
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
                                postview.schedules.chieu_7
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
                                postview.schedules.toi_7
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
                                postview.schedules.sang_cn
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
                                postview.schedules.chieu_cn
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
                                postview.schedules.toi_cn
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

export default InforPost;
