import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";

import "./EntriesHeader.css";

interface EntriesHeaderProps {
  title: string;
}

const EntriesHeader: React.FC<EntriesHeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <IonIcon icon={ellipsisVertical}></IonIcon>
    </div>
  );
};

export default EntriesHeader;