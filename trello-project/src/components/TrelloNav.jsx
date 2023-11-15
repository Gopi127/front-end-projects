import { BsFillGrid3X3GapFill, BsTrello } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import AccountTooltip from "./tooltips/AccountTooltip";
import SideBar from "./tooltips/SideBar";

export default function TrelloNvav() {
  return (
    <div className="bg-trelloNav h-13 flex justify-between items-center border-b border-trello">
      <div className="flex justify-start items-center gap-1">
        <div className="flex justify-start items-center">
          <div className="hover:bg-gridHoverColor w-8 h-8 flex justify-center items-center rounded-sm text-trello m-2">
            <BsFillGrid3X3GapFill />
          </div>
          <div className="hover:bg-gridHoverColor w-24 rounded-sm flex justify-center items-center h-8 gap-1">
            <BsTrello
              style={{ fontSize: "17px", color: "#9EACBA", marginTop: "2px" }}
            />
            <h1 className="text-xl font-bold text-trello">Trello</h1>
          </div>
          <AccountTooltip text="Workspaces">
            <button className="hover:bg-gridHoverColor h-8 w-32 flex justify-center items-center rounded-sm gap-2 text-trello">
              <span>Workspaces</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </AccountTooltip>
          <AccountTooltip text="Recent">
            <button className="hover:bg-gridHoverColor h-8 w-24 flex justify-center items-center rounded-sm gap-2 text-trello">
              <span>Recent</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </AccountTooltip>
          <AccountTooltip text="Starred">
            <button className="hover:bg-gridHoverColor h-8 w-24 flex justify-center items-center rounded-sm gap-2 text-trello">
              <span>Starred</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </AccountTooltip>
          <AccountTooltip text="Templates">
            <button className="hover:bg-gridHoverColor h-8 w-28 flex justify-center items-center rounded-sm gap-2 text-trello">
              <span>Templates</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </AccountTooltip>
        </div>
        <div>
          <button className="bg-createButtonColor w-16 h-8 rounded-sm hover:bg-buttonHoverColor">
            Create
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mr-2 gap-1 focus:shadow-md focus:shadow-inputShadow">
        <div className="flex justify-start items-center min-w-min h-8 rounded-md border border-trello bg-inputColor gap-1 pl-2 text-trello">
          <svg width="18" height="20" viewBox="0 0 24 24" role="presentation">
            <path
              d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
              fill="currentColor"
              fillRule="evenodd"
              className="text-trello"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-inputPlaceholderColor focus:w-96"
          />
        </div>
        <SideBar text="Notifications">
          <div className="hover:bg-gridHoverColor w-9 h-8 flex justify-center items-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="presentation"
              className="text-trello"
            >
              <path
                d="M6.586 17.829a2 2 0 002.829 0L6.585 15a2 2 0 000 2.829zm4.798-12.351A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725zm2.739 9.63c.517-.975 1.568-2.396 2.354-3.182l.725-.726a3.048 3.048 0 00.387-3.835c-.19-.286-.718-.766-.859-.86A3.043 3.043 0 0015.047 6a3.04 3.04 0 00-2.156.892l-.95.951c-.784.785-2.219 1.82-3.201 2.311l-1.74.87 6.07 6.069 1.053-1.985z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </SideBar>
        <SideBar text="Information">
          <div className="hover:bg-gridHoverColor w-9 h-8 flex justify-center items-center rounded-full">
            <svg
              width="24"
              height="24"
              role="presentation"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="text-trello"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12ZM4 12C4 16.4188 7.58124 20 12 20C16.4188 20 20 16.4188 20 12C20 7.58124 16.4188 4 12 4C7.58124 4 4 7.58124 4 12ZM8 10C7.99999 7.48383 10.3214 5.51108 12.9389 6.10713C14.3829 6.43513 15.5569 7.60513 15.8899 9.04813C16.3809 11.1771 15.1719 13.0911 13.3589 13.7471C13.1549 13.8201 13.0099 14.0021 13.0099 14.2191V14.0001C13.0099 14.5521 12.5629 15.0001 12.0099 15.0001C11.4579 15.0001 11.0099 14.5521 11.0099 14.0001V12.9871C11.0179 12.4411 11.4599 12.0001 11.9999 12.0001C13.1029 12.0001 13.9999 11.1021 13.9999 10.0001C13.9999 8.89713 13.1029 8.00013 11.9999 8.00013C10.8959 8.00013 9.99935 8.92313 10.0004 10.0271C9.98522 10.5666 9.54291 11 9 11C8.47773 11 8.04856 10.599 8.00385 10.0882C8.00385 10.0882 8 10.0297 8 10ZM12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17C13 17.552 12.552 18 12 18Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </SideBar>
        <SideBar text="Account">
          <div className="hover:bg-gridHoverColor w-9 h-8 rounded-full flex justify-center items-center">
            <div className="text-profileColor bg-profileBgColor rounded-full w-7 h-7 flex justify-center items-center">
              <p className="text-xs font-bold">MG</p>
            </div>
          </div>
        </SideBar>
      </div>
    </div>
  );
}
