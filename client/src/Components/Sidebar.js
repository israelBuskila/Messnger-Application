import React from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../style/Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import { useChat } from "../contexts/ChatProvider";

function Sidebar({ users }) {
  const [select, setSelect] = useChat()
  
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars.githubusercontent.com/u/44799678?v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        {users.map((user, index) => {
          if (
            user.UserName !==
            JSON.parse(sessionStorage.getItem("userInfo")).UserName
          )
            return (
              <button
                key={index}
                className="btn"
                onClick={()=>setSelect(index)}
              >
                {" "}
                <SidebarChat key={index} user={user} />
              </button>
            );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
