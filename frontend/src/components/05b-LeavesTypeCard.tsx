import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { type } from "os";

interface typeState {
  id: string;
  type: string;
  description: string;
}
const LeavesTypeCard: React.FC<{ obj: typeState }> = ({ obj }) => {
    const header = (
    <img
      alt="Card"
      src="images/usercard.png"
      // onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
    />
  );
//   const footer = (
//     <span>
//       <Button label="Save" icon="pi pi-check" />
//       <Button
//         label="Cancel"
//         icon="pi pi-times"
//         className="p-button-secondary ml-2"
//       />
//     </span>
//   );
  
  return (
    <div>
      <Card
        title={obj.type}
        // subTitle="Subtitle"
        style={{ width: "15em", margin: "1em"}}
        // footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          {obj.description} 
        </p>
      </Card>
    </div>
  );
};

export default LeavesTypeCard;
