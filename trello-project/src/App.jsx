import { useState } from "react";
import Cards from "./components/Cards";
import TaskNavBar from "./components/TaskNavBar";
import TrelloNav from "./components/TrelloNav";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function App() {
  const [todoDetails, setTodoDetails] = useState([]);
  const [pendingDetails, setPendingDetails] = useState([]);
  const [doneDetails, setDoneDetails] = useState([]);

  function handleTodoData(value) {
    setTodoDetails([
      ...todoDetails,
      { id: uuidv4(), content: value, isEditing: false, destination: null },
    ]);
  }

  function handlePendingData(value) {
    setPendingDetails([
      ...pendingDetails,
      { id: uuidv4(), content: value, isEditing: false, destination: null },
    ]);
  }

  function handleDoneData(value) {
    setDoneDetails([
      ...doneDetails,
      { id: uuidv4(), content: value, isEditing: false, destination: null },
    ]);
  }
  return (
    <div>
      <TrelloNav />
      <TaskNavBar />
      <div>
        <Cards
          onClick={handleTodoData}
          todoDetails={todoDetails}
          pendingDetails={pendingDetails}
          doneDetails={doneDetails}
          handlePendingList={handlePendingData}
          handleDoneList={handleDoneData}
        />
      </div>
    </div>
  );
}
