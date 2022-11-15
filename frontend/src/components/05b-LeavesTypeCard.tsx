import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
interface typeState {
  type: string;
  description: string;
}
const LeavesTypeCard: React.FC<{ obj: typeState }> = ({ obj }) => {
  return (
    <div>
      <Card
        title={obj.type}
        // subTitle="Subtitle"
        style={{ width: "20em" }}
        // footer={footer}
        // header={header}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          {obj.description}
        </p>
      </Card>
    </div>
  );
};

export default LeavesTypeCard;
