import { Col, Row, Input, Typography, Radio, Select, Tag, RadioChangeEvent } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { priorityFilterChange, searchFilterChange, statusFilterChange } from "../../redux/actions";

const { Search } = Input;
const { Paragraph } = Typography;

export default function Filters() {
  const [searchText, setSearchText] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [filterPriorities, setFilterPriorities] = useState<string[]>([])

  const dispatch = useDispatch();

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
      dispatch(searchFilterChange(e.target.value));
  }

  const handleStatusChange = (e: RadioChangeEvent) => {
      setFilterStatus(e.target.value);
      dispatch(statusFilterChange(e.target.value));
  }

  const handlePrioritiesChange = (e: string[]) => { 
    setFilterPriorities(e);
    dispatch(priorityFilterChange(e));
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Paragraph>
        <Search placeholder="search text"
          value={searchText}
          onChange={handleSearchTextChange} />
      </Col>
      <Col span={24}>
        <Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please Select"
          style={{ width: "100%" }}
          value={filterPriorities}
          onChange={handlePrioritiesChange}
        >
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
      </Col>
    </Row>
  );
}
