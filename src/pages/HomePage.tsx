import { Redirect, Route } from "react-router-dom";
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { add, book, calendar, eye, settings } from "ionicons/icons";
import DiaryPage from "./DiaryPage";
import FavoritesPage from "./InsightsPage";
// import AddPage from "./backup/AddPage";
import CalendarPage from "./CalendarPage";
import MediaPage from "./SettingsPage";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useState } from "react";
import AddEntryModal from "../components/AddEntryModal";

const HomePage: React.FC = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.displayName);
    } else {
      console.log("Debe iniciar sesión");
    }
  });

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log("clicked")
  };

  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home/diary">
              <DiaryPage />
            </Route>
            <Route exact path="/home/calendar">
              <CalendarPage />
            </Route>
            {/* <Route path="/home/add">
              <AddPage />
            </Route> */}
            <Route exact path="/home/insights">
              <FavoritesPage />
            </Route>
            <Route path="/home/settings">
              <MediaPage />
            </Route>
            <Route exact path="/home">
              <Redirect to="/home/diary" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="diary" href="/home/diary">
              <IonIcon aria-hidden="true" icon={book} />
              <IonLabel>Diary</IonLabel>
            </IonTabButton>
            <IonTabButton tab="calendar" href="/home/calendar">
              <IonIcon aria-hidden="true" icon={calendar} />
              <IonLabel>Calendar</IonLabel>
            </IonTabButton>
            {/* <IonTabButton tab="add" href="/home/add">
              <IonFab>
                <IonFabButton size="small">
                  <IonIcon icon={add}></IonIcon>
                </IonFabButton>
              </IonFab>
            </IonTabButton> */}
            <IonTabButton>
              <IonFab onClick={openModal}>
                <IonFabButton size="small">
                  <IonIcon icon={add}></IonIcon>
                </IonFabButton>
              </IonFab>
            </IonTabButton>
            <IonTabButton tab="insights" href="/home/insights">
              <IonIcon aria-hidden="true" icon={eye} />
              <IonLabel>Insights</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/home/settings">
              <IonIcon aria-hidden="true" icon={settings} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        <AddEntryModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </IonReactRouter>
    </IonPage>
  );
};

export default HomePage;
