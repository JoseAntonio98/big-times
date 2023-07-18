import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";

import "./styles/HeaderScreen.css";

interface HeaderProps {
  title: string;
}

const HeaderScreen: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default HeaderScreen;
