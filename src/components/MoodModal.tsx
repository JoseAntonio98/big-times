import React, {useState} from "react";
import { IonModal, IonContent, IonButton } from "@ionic/react";

import "./styles/MoodModal.css";
import HeaderScreen from "./HeaderScreen";

interface MoodModalProps {
  isOpen: boolean;
  updateMood: (_mood: String) => void;
  onClose: () => void;
}

const MoodModal: React.FC<MoodModalProps> = ({ isOpen, updateMood, onClose }) => {
  
  const [moodTmp, setMoodTemp] = useState("")

  const setMood = (_mood: String) => {
    //console.log(_mood)
    updateMood(_mood)
    onClose()
  }

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="custom-modal">
      <div className="block">
        <HeaderScreen title="How are you?"></HeaderScreen>
        <div className="moods">
          <div className="mood mood-angry">
            <span className="emoji-large" onClick={() => setMoodTemp("angry")}>&#128544;</span>
          </div>
          <div className="mood mood-happy">
            <span className="emoji-large" onClick={() => setMoodTemp("happy")}>&#128512;</span>
          </div>
          <div className="mood mood-sad">
            <span className="emoji-large" onClick={() => setMoodTemp("sad")}>&#128546;</span>
          </div>
        </div>
        <div className="mood-btns">
          <IonButton onClick={onClose} className="mood-btn" color="light">
            Cancel
          </IonButton>
          <IonButton className="mood-btn" color="primary" onClick={() => setMood(moodTmp)}>
            Save
          </IonButton>
        </div>
      </div>
    </IonModal>
  );
};

export default MoodModal;
