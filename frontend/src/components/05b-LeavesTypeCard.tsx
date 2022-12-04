import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface typeState {
  id: string;
  type: string;
  // picture: string;
}
const LeavesTypeCard: React.FC<{ obj: typeState }> = ({ obj }) => {
  const header = (
    <img
      alt="Card"
      src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
        style={{ width: "12em", margin: "0.5em" }}
        // footer={footer}
        header={header}
      >
        {/* <p className="m-0" style={{ lineHeight: "1.5" }}>
          {obj.description} 
        </p> */}
      </Card>
    </div>
  );
};

export default LeavesTypeCard;
