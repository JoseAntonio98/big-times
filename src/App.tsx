import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import LoginPage from "./pages/LoginPage";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import HomePage from "./pages/HomePage";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

import "./App.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <I18nextProvider i18n={i18n}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Redirect to="/login" />
        </IonRouterOutlet>
      </IonReactRouter>
    </I18nextProvider>
  </IonApp>
);

export default App;
