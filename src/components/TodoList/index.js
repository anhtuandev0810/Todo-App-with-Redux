import React, { useState } from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { todoRemainingSelector } from '../../redux/selector';
import { v4 as uuidv4} from 'uuid';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priorities, setPriorities] = useState('Medium');
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector);
  const handleAddTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      completed: false,
      priority: priorities,
    }));

    setTodoName('');
    setPriorities('Medium');
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePrioritiesChange = (value) => {
    setPriorities(value);
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo id={todo.id} key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed}/>
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priorities} onChange={handlePrioritiesChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};