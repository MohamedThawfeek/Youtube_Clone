import React from "react";
import "./Header.css";
import logo from "../../assets/logo1.png";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button } from "@material-ui/core";
import {
  SearchOutlined,
  AppsOutlined,
  NotificationsNone,
} from "@material-ui/icons";
import { addUser } from "../Redux/Action/User";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signout = () => {
    dispatch(addUser(null));
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
      </div>

      <div className="header__center">
        <div className="header__input">
          <input type="text" placeholder={`Search video ${user.displayName}`} />
          <Button>
            <SearchOutlined className="button" />
          </Button>
        </div>
      </div>
      <div className="header__right">
        <AppsOutlined />
        <NotificationsNone />
        <Avatar src={user.photoURL} className="header__avatar" />
        <h5>{user.displayName}</h5>
        <Button type="submit" onClick={signout}>
          SignOut
        </Button>
      </div>
    </div>
  );
};

export default Header;
