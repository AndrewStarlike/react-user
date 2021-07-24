import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
    id: Math.random(),
  });
  const [error, setError] = useState();

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setUserInput((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age greater than 0",
      });
      return;
    }

    props.onAddUser({
      username: userInput.username,
      age: userInput.age,
      id: userInput.id,
    });

    setUserInput({
      username: "",
      age: "",
      id: "",
    });
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userInput.username}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userInput.age}
            onChange={handleInputChange}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
