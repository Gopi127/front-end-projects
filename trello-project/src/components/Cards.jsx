/* eslint-disable react/prop-types */
import {
  faEllipsis,
  faPhotoFilm,
  faPlus,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Cards({
  onClick,
  todoDetails,
  pendingDetails,
  handlePendingList,
  handleDoneList,
  doneDetails,
}) {
  const [showInput, setShowInput] = useState(true);
  const [pendingBox, setPendingBox] = useState(true);
  const [doneBox, setDoneBox] = useState(true);
  const [searchInput, setSerachInput] = useState("");
  const [pendingInput, setPendingInput] = useState("");
  const [doneInput, setDoneInput] = useState("");

  function handleTodoDetails(e) {
    e.preventDefault();
    // onClick(searchInput);
    setSerachInput("");
    if (searchInput === "") {
      alert("Enter a valid input");
    } else {
      onClick(searchInput);
    }
  }

  function handlePendingDetails(e) {
    e.preventDefault();
    if (pendingInput === "") {
      alert("Enter a valid input");
    } else {
      handlePendingList(pendingInput);
    }
    setPendingInput("");
  }

  function handleDoneDetails(e) {
    e.preventDefault();
    if (doneInput === "") {
      alert("Enter a valid input");
    } else {
      handleDoneList(doneInput);
    }
    setDoneInput("");
  }
  return (
    <div className="flex justify-center items-center gap-6 mt-[10px]">
      {/** Todo  card*/}
      <div>
        <div className="bg-cardBgColor min-h-[100px] w-[350px] rounded-[10px]">
          <div className="text-trello flex justify-between mr-[15px] ml-[15px]">
            <h4 className="pt-[20px] font-bold">To Do</h4>
            <div className="mt-[15px] w-[40px] h-[35px] hover:bg-gridHoverColor flex justify-center items-center rounded-[10px]">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          {todoDetails.map((list, index) => (
            <div
              className="w-[21em] min-h-[30px] bg-gridHoverColor m-[5px] rounded-[5px] p-[10px] text-trello hover:border hover:border-borderColor"
              key={index}
              draggable="true"
            >
              {list.content}
            </div>
          ))}

          {showInput ? (
            <div className="text-trello flex justify-start items-center gap-2 mt-2">
              <div className="w-[270px] h-[35px] hover:bg-gridHoverColor m-[10px] flex justify-start items-center pl-[10px] gap-[5px] rounded-[10px]">
                <FontAwesomeIcon icon={faPlus} />
                <button onClick={() => setShowInput(false)}>Add a card</button>
              </div>
              <div className="w-[40px] h-[35px] hover:bg-gridHoverColor font-sm flex justify-center items-center rounded-[10px]">
                <FontAwesomeIcon icon={faPhotoFilm} />
              </div>
            </div>
          ) : (
            <form onSubmit={handleTodoDetails}>
              <textarea
                className="w-[20em] h-[7em] bg-gridHoverColor ml-[10px] rounded-[5px] outline-none text-trello resize-none"
                placeholder="Enter a title for this card..."
                value={searchInput}
                onChange={(e) => setSerachInput(e.target.value)}
              />
              <div className="flex gap-2 ml-[10px] mt-[20px]">
                <button
                  className="w-[90px] h-10 bg-createButtonColor rounded-[2px] hover:bg-buttonHoverColor mb-[15px]"
                  type="submit"
                >
                  Add card
                </button>
                <div className="w-[40px] text-trello hover:bg-gridHoverColor flex justify-center items-center rounded-[2px] mb-[15px]">
                  <FontAwesomeIcon
                    icon={faX}
                    onClick={() => setShowInput(true)}
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      {/**Pending Card */}
      <div>
        <div className="bg-cardBgColor min-h-[100px] w-[350px] rounded-[10px]">
          <div className="text-trello flex justify-between mr-[15px] ml-[15px]">
            <h4 className="pt-[20px] font-bold">Pending</h4>
            <div className="mt-[15px] w-[40px] h-[35px] hover:bg-gridHoverColor flex justify-center items-center rounded-[10px]">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          {pendingDetails.map((list, index) => (
            <div
              className="w-[21em] min-h-[30px] bg-gridHoverColor m-[5px] rounded-[5px] p-[10px] text-trello hover:border hover:border-borderColor"
              key={index}
              draggable="true"
            >
              {list.content}
            </div>
          ))}

          {pendingBox ? (
            <div className="text-trello flex justify-start items-center gap-2 mt-2">
              <div className="w-[270px] h-[35px] hover:bg-gridHoverColor m-[10px] flex justify-start items-center pl-[10px] gap-[5px] rounded-[10px]">
                <FontAwesomeIcon icon={faPlus} />
                <button onClick={() => setPendingBox(false)}>Add a card</button>
              </div>
              <div className="w-[40px] h-[35px] hover:bg-gridHoverColor font-sm flex justify-center items-center rounded-[10px]">
                <FontAwesomeIcon icon={faPhotoFilm} />
              </div>
            </div>
          ) : (
            <form onSubmit={handlePendingDetails}>
              <textarea
                className="w-[21em] h-[7em] bg-gridHoverColor m-[5px] rounded-[5px] outline-none text-trello resize-none"
                placeholder="Enter a title for this card"
                value={pendingInput}
                onChange={(e) => setPendingInput(e.target.value)}
              />
              <div className="flex gap-2 ml-[10px] mt-[20px]">
                <button
                  className="w-[90px] h-10 bg-createButtonColor rounded-[2px] hover:bg-buttonHoverColor mb-[15px]"
                  type="submit"
                >
                  Add card
                </button>
                <div className="w-[40px] text-trello hover:bg-gridHoverColor flex justify-center items-center rounded-[2px] mb-[15px]">
                  <FontAwesomeIcon
                    icon={faX}
                    onClick={() => setPendingBox(true)}
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      {/**Done Card */}
      <div>
        <div className="bg-cardBgColor min-h-[100px] w-[350px] rounded-[10px]">
          <div className="text-trello flex justify-between mr-[15px] ml-[15px]">
            <h4 className="pt-[20px] font-bold">Done</h4>
            <div className="mt-[15px] w-[40px] h-[35px] hover:bg-gridHoverColor flex justify-center items-center rounded-[10px]">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          {doneDetails.map((list, index) => (
            <div
              className="w-[21em] min-h-[30px] bg-gridHoverColor m-[5px] rounded-[5px] p-[10px] text-trello hover:border hover:border-borderColor"
              key={index}
              draggable="true"
            >
              {list.content}
            </div>
          ))}

          {doneBox ? (
            <div className="text-trello flex justify-start items-center gap-2 mt-2">
              <div className="w-[270px] h-[35px] hover:bg-gridHoverColor m-[10px] flex justify-start items-center pl-[10px] gap-[5px] rounded-[10px]">
                <FontAwesomeIcon icon={faPlus} />
                <button onClick={() => setDoneBox(false)}>Add a card</button>
              </div>
              <div className="w-[40px] h-[35px] hover:bg-gridHoverColor font-sm flex justify-center items-center rounded-[10px]">
                <FontAwesomeIcon icon={faPhotoFilm} />
              </div>
            </div>
          ) : (
            <form onSubmit={handleDoneDetails}>
              <textarea
                className="w-[21em] h-[7em] bg-gridHoverColor m-[5px] rounded-[5px] outline-none text-trello resize-none"
                placeholder="Enter a title for this card"
                value={doneInput}
                onChange={(e) => setDoneInput(e.target.value)}
              />
              <div className="flex gap-2 ml-[10px] mt-[20px]">
                <button
                  className="w-[90px] h-10 bg-createButtonColor rounded-[2px] hover:bg-buttonHoverColor mb-[15px]"
                  type="submit"
                >
                  Add card
                </button>
                <div className="w-[40px] text-trello hover:bg-gridHoverColor flex justify-center items-center rounded-[2px] mb-[15px]">
                  <FontAwesomeIcon
                    icon={faX}
                    onClick={() => setDoneBox(true)}
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
