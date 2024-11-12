import React from "react";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  IonButton,
} from "@ionic/react";

const Map = () => {
  return (
    <IonPage>
      

      <IonContent fullscreen>
        {/* Google Map iframe */}
        <div style={{ width: "100%", height: "70vh" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15630.742090609701!2d78.15249547512073!3d11.6457435900715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef6bdbbc3f7d%3A0x404c804a4826efdf!2sZAdroit%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sta!2sin!4v1731326157723!5m2!1sta!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Location Search */}
        <IonItem style={{ margin: "10px 20px" }}>
          <IonInput placeholder="Doha, Doha, Qatar" />
        </IonItem>

        {/* Confirm Button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <IonButton expand="block" color="danger" style={{ width: "90%" }}>
            Confirm location
          </IonButton>
        </div>
      </IonContent>

      {/* Footer */}
      <IonFooter>
        <IonToolbar style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
          <IonImg src="/path/to/logo.png" style={{ width: "40px", height: "40px" }} />
          <IonLabel>curated by Mobbin</IonLabel>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Map;
