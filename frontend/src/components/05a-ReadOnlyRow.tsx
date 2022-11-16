import React from "react";

const ReadOnlyRow = ({
  contact,
  handleEditClick,
  handleDeleteClick,
}: {
  contact: any;
  handleEditClick: any;
  handleDeleteClick: any;
}) => {
  return (
    <tr>
      <td>{contact.leave_type}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={(event) => handleEditClick(event, contact)}>
          Edit
        </button>
        <button
          onClick={() => {
            handleDeleteClick(contact.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
