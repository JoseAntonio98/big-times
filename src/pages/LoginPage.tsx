import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { logoGoogle, logoApple } from "ionicons/icons";
import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import WelcomeImage from "../assets/bigtimes.png";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  let history = useHistory();

  const handleLogin = () => {
    // Lógica de autenticación y validación
    console.log("Hi");

    // Navegar a la página de Home
    history.push("/home");
  };

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <img alt="Silhouette of mountains" src={WelcomeImage} />
          <IonText className="app-subtitle">Because we all have</IonText>
          <IonText color="secondary" className="app-name">
            Big Times
          </IonText>

          <div>
            <IonButton
              expand="block"
              color="light"
              className="ion-margin-bottom btn"
              onClick={handleLogin}
            >
              <IonIcon slot="start" icon={logoGoogle}></IonIcon>
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
