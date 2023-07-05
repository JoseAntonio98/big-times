import { IonButton, IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import { logoGoogle, logoApple } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router-dom";

import { auth, providerGoogle } from "../firebaseConfig"

import WelcomeImage from "../assets/bigtimes.png";
import "./LoginPage.css";
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";

const LoginPage: React.FC = () => {
  
  let history = useHistory();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //const uid = user.uid;
      history.push("/home");
    }
    else {
      console.log("Debe iniciar sesión");
      history.push("/login");
    }
  });

  const handleLogin = () => {
    signInWithRedirect(auth, providerGoogle);
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
