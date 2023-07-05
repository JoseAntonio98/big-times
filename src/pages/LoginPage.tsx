import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
  let history = useHistory();
  const handleLogin = () => {
    // Lógica de autenticación y validación

    // Navegar a la página de Home
    history.push("/home");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
