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
      <td className="table-info">{contact["fullName"]}</td>
      <td className="table-info">{contact.department}</td>
      <td className="table-info">{contact.grade}</td>
      {new Array(31).fill(0).map((_: any, index: number) => {
        return <td className="table-attendance">p</td>;
      })}
      <td className="table-action">
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
