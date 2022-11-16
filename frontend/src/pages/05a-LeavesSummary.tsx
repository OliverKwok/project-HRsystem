import React, { Fragment, useState } from "react";
import EditableRow from "../components/05a-EditableRow";
import ReadOnlyRow from "../components/05a-ReadOnlyRow";
import data from "../jsonFiles/leave_data.json";

const LeavesSummary = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    leave_type: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    leave_type: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData: any = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData: any = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event: any) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      leave_type: addFormData.leave_type,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts: any = [...contacts, newContact];

    let jsonData = JSON.stringify(newContacts);
    // fs.writeFileSync("../jsonFiles/attendance_data.json", jsonData);
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event: any) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      leave_type: editFormData.leave_type,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    const newContacts: any = [...contacts];
    const index = contacts.findIndex((contact) => {
      return contact.id === editContactId;
    });
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event: any, contact: any) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      leave_type: contact.leave_type,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId: any) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <>
      <div className="attendance_container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th className="table-head">Leave type</th>
                <th className="table-head">Address</th>
                <th className="table-head">Phone Number</th>
                <th className="table-head">Email</th>

                <th className="table-head">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact: { id: any }) => {
                return (
                  <Fragment>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </form>

        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter a name"
            required
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter an address"
            required
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter a phone number"
            required
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter an email"
            required
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default LeavesSummary;
function nanoid() {
  throw new Error("Function not implemented.");
}
