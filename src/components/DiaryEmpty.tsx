import React from "react";

import "./styles/DiaryEmpty.css";

const DiaryEmpty: React.FC = () => {
  return (
    <div className="container-center">
      <h1 className="ee-title">Nothing here yet</h1>
      <p className="ee-message">
        Write down your thoughts and track your mood to get insigths. Add your
        first entry
      </p>
    </div>
  );
};

export default DiaryEmpty;
