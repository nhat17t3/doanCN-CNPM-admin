import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNotifyByAdmin } from "../../../actions/Notify/notify.actions";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";
import NotifyAdmin from "../NotifyAdmin";



ListNotification.propTypes = {};

function ListNotification(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listnotify_customer, setListnotify_customer] = useState([]);
  const [listnotify_admin, setListnotify_admin] = useState([]);
  // const { role } = useSelector((state) => state.user.user);
  const role = localStorage.getItem("role");
  const [a, setA] = useState(false);


  useEffect(() => {
    dispatch(getNotifyByAdmin());
  }, []);
 

  const listNotifyByAdmin = useSelector((state) => state.notifys.listNotifyByAdmin);

  useEffect(() => {
    setListnotify_admin(listNotifyByAdmin);
  }, [listNotifyByAdmin]);


  return (
    <>
      <Layout>
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-12">
                <div className="notify">
                  <h4 className="notify__heading">Thông báo</h4>
                  <div className="grid__row " style={{ margin: "auto 0" }}>
                    <div className="grid__column-3 notify-header__item " style={{ fontSize: "20px" }}>
                      Thời gian
                    </div>
                    <div className="grid__column-6 notify-header__item" style={{ fontSize: "20px" }}>
                      Nội dung
                    </div>
                    <div className="grid__column-3 notify-header__item " style={{ fontSize: "20px" }}>
                      Loại thông báo
                    </div>
                    {/* <div className="grid__column-2 notify-header__item">
                      Hoạt động
                    </div> */}
                  </div>

                  { listnotify_admin?.map((notify) => (
                        <div className="notify-item" key={notify.id} style={{ fontSize: "20px" }}>
                          <NotifyAdmin notify={notify} />
                        </div>
                      ))
                   }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListNotification;
