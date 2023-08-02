import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { auth, providerGoogle } from "../FirebaseConfig";
import { IonButton, IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import { logoGoogle, logoApple } from "ionicons/icons";
import {
  signInWithRedirect,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";
import WelcomeImage from "../assets/bigtimes.png";
import "./styles/LoginPage.css";

const LoginPage: React.FC = () => {
  const history = useHistory();

  const handleLogin = async () => {
    await signInWithRedirect(auth, providerGoogle);
  };


  onAuthStateChanged(auth, (user) => {
    if (user) {
      history.push("/home");
    } else {
      console.log("Debe iniciar sesión");      
    }
  });

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <img alt="Silhouette of mountains" src={WelcomeImage} />
          <IonText className="app-subtitle">Because we all have</IonText>
          <IonText className="app-name">Big Times</IonText>

          <div>
            <IonButton
              expand="block"
              color="light"
              className="ion-margin-bottom btn"
              onClick={handleLogin}
            >
              <IonIcon slot="start" icon={logoGoogle} color="primary"></IonIcon>
              Login with Google
            </IonButton>
            <IonButton
              expand="block"
              color="dark"
              className="btn"
              onClick={handleLogin}
            >
              <IonIcon slot="start" icon={logoApple}></IonIcon>
              Login with Apple
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
