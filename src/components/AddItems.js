import React, { useState } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";

const AddItems = ({ addItems }) => {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addItems({ text, category, user });
    setText("");
    setUser("");
    setCategory("");
  };
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Item"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                placeholder="User"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="0">Select Category</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Admin">Amin</option>
                <option value="Moderator">Moderator</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary">
                Add Item
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddItems;
