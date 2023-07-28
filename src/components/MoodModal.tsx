import React from "react";
import { IonModal, IonContent, IonButton } from "@ionic/react";

import "./styles/MoodModal.css";
import HeaderScreen from "./HeaderScreen";

interface MoodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MoodModal: React.FC<MoodModalProps> = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="custom-modal">
      <div className="block">
        <HeaderScreen title="How are you?"></HeaderScreen>
        <div className="moods">
          <div className="mood mood-angry">
            <span className="emoji-large">&#128544;</span>
          </div>
          <div className="mood mood-happy">
            <span className="emoji-large">&#128512;</span>
          </div>
          <div className="mood mood-sad">
            <span className="emoji-large">&#128546;</span>
          </div>
        </div>
        <div className="btns">
          <IonButton onClick={onClose} className="btn" color="light">
            Cancel
          </IonButton>
          <IonButton className="btn" color="primary">
            Save
          </IonButton>
        </div>
      </div>
    </IonModal>
  );
};

export default MoodModal;
