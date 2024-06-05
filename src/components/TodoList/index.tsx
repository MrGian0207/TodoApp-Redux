import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { todoType } from "../../types/TodoType";
import { addTodo } from "../../redux/actions";
import { todosRemainingSelector } from "../../redux/selectors";
import Todo from "../Todo";


export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState<string>("");
  const [priority, setPriority] = useState<string>("Medium");

  const todoList: todoType[] = useSelector(todosRemainingSelector);

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );

    setTodoName('');
    setPriority("Medium");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (e: string) => {
    setPriority(e);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo: todoType) => {
          return <Todo key={todo.id} id={todo.id} name={todo.name} completed={todo.completed} priority={todo.priority} />
        })}

      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }} >
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
