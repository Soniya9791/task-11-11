import React from "react";
import image from "../../assests/images/image.png";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { ellipse, square, triangle } from "ionicons/icons";
import { useLocation } from "react-router";

const Menubar = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      {location.pathname === "/tab1" ||
      location.pathname === "/tab2" ||
      location.pathname === "/tab3" ? (
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      ) : (
        <></>
      )}
    </>
  );
};

export default Menubar;
