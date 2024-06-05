import "./App.css";
import { Typography, Divider } from "antd";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "10px auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "#ffffff 0px 5px 15px",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider style={{ backgroundColor: "black" }} />
      <TodoList />
    </div>
  );
}

export default App;
