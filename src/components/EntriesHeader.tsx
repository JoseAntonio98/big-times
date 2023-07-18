import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";

import "./styles/EntriesHeader.css";

interface EntriesHeaderProps {
  title: string;
}

const EntriesHeader: React.FC<EntriesHeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default EntriesHeader;
