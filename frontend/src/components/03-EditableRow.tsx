import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}: {
  editFormData: any;
  handleEditFormChange: any;
  handleCancelClick: any;
}) => {
  return (
    <>
      <div className="attendance-row">
        <div className="attendance-info">
          <input
            type="text"
            name="name"
            placeholder="Enter a name"
            required
            value={editFormData.fullName}
            onChange={handleEditFormChange}
          />
        </div>
        <div className="attendance-info">
          <input
            type="text"
            name="department"
            placeholder="Enter a department"
            required
            value={editFormData.department}
            onChange={handleEditFormChange}
          />
        </div>
        <div className="attendance-info">
          {" "}
          <input
            type="text"
            name="grade"
            placeholder="Enter a grade"
            required
            value={editFormData.grade}
            onChange={handleEditFormChange}
          />
        </div>
        <div className="attendance-loop-container"></div>
        <div className="header-action">
          <button type="submit">Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default EditableRow;
