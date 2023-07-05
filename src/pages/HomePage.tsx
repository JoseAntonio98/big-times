import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { add, calendar, heart, image, list } from "ionicons/icons";
import EntriesPage from "./EntriesPage";
import FavoritesPage from "./FavoritesPage";
import AddPage from "./AddPage";
import CalendarPage from "./CalendarPage";
import MediaPage from "./MediaPage";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig"

const HomePage: React.FC = () => {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.displayName)
    }
    else {
      console.log("Debe iniciar sesión")
    }
  });

  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home/entries">
              <EntriesPage />
            </Route>
            <Route exact path="/home/favorites">
              <FavoritesPage />
            </Route>
            <Route path="/home/add">
              <AddPage />
            </Route>
            <Route exact path="/home/calendar">
              <CalendarPage />
            </Route>
            <Route path="/home/media">
              <MediaPage />
            </Route>
            <Route exact path="/home">
              <Redirect to="/home/entries" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="entries" href="/home/entries">
              <IonIcon aria-hidden="true" icon={list} />
            </IonTabButton>
            <IonTabButton tab="favorites" href="/home/favorites">
              <IonIcon aria-hidden="true" icon={heart} />
            </IonTabButton>
            <IonTabButton tab="add" href="/home/add">
              <IonIcon aria-hidden="true" icon={add} />
            </IonTabButton>
            <IonTabButton tab="calendar" href="/home/calendar">
              <IonIcon aria-hidden="true" icon={calendar} />
            </IonTabButton>
            <IonTabButton tab="media" href="/home/media">
              <IonIcon aria-hidden="true" icon={image} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};

export default HomePage;
