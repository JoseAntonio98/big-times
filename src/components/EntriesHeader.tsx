import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";

import "./EntriesHeader.css";

interface EntriesHeaderProps {
  username: string;
}

const EntriesHeader: React.FC<EntriesHeaderProps> = ({ username }) => {
  return (
    <div className="header">
      <h1 className="title">Welcome {username}</h1>
      <IonIcon icon={ellipsisVertical}></IonIcon>
    </div>
  );
};

export default EntriesHeader;
