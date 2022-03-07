import React from "react";
import { Button, Badge } from "react-bootstrap";
import Moment from "react-moment";

const AllItems = ({
  deleteItem,
  item: { _id, text, category, user, created },
}) => {
  const setVariant = () => {
    if (category === "High") {
      return "primary";
    } else if (category === "Moderator") {
      return "warning";
    } else {
      return "success";
    }
  };
  return (
    <tr>
      <td>
        <Badge bg={setVariant()} className="p-2">
          {category}
        </Badge>
      </td>
      <td>{user}</td>
      <td>{text}</td>
      <td>
        <Moment format="MMMM Do YYYY, h:mm:ss">{new Date(created)}</Moment>
      </td>
      <td>
        <Button variant="danger" size="small" onClick={() => deleteItem(_id)}>
          X
        </Button>
      </td>
    </tr>
  );
};

export default AllItems;
