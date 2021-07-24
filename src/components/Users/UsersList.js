import styles from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((element) => (
          <li key={element.id}>
            {element.name} ({element.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
