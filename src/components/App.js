import React, { useState, useEffect } from "react";
import { Container, Table, Alert } from "react-bootstrap";
import AddItems from "./AddItems";
import AllItems from "./AllItems";
import { ipcRenderer } from "electron";

const App = () => {
  const [items, setItems] = useState([]);

  function addItems(item) {
    if (item.text == "" || item.category == "" || item.user == "") {
      showAlert("Please enter all item ", "danger");
      return false;
    }
    // item._id = Math.floor(Math.random() * 90000) + 10000;
    // item.created = new Date().toString();
    // setItems([...items, item]);
    ipcRenderer.send("items:add", item);
    showAlert("Item Added");
  }
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    variant: "success",
  });
  function showAlert(message, variant = "success", seconds = 3000) {
    setAlert({
      show: true,
      message,
      variant,
    });
    setTimeout(() => {
      setAlert({
        show: false,
        message,
        variant: "success",
      });
    }, seconds);
  }
  function deleteItem(_id) {
    ipcRenderer.send("items:delete", _id);
    showAlert("Item remove");
  }
  useEffect(() => {
    ipcRenderer.send("items:load");
    ipcRenderer.on("items:get", (e, items) => {
      setItems(JSON.parse(items));
    });

    ipcRenderer.on("items:clear", () => {
      setItems([]);
      showAlert("Logs Cleared");
    });
  }, []);

  return (
    <Container>
      <AddItems addItems={addItems} />
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <AllItems key={item._id} item={item} deleteItem={deleteItem} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
