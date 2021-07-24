import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userInput) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userInput.username, age: userInput.age, id: userInput.id },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length !== 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
