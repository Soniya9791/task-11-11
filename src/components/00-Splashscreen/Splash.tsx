import React, { useEffect, useState } from "react";
import image from "../../assests/images/image.png";
import {
  IonActionSheet,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Splash = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear timeout if component unmounts before timeout finishes
    return () => clearTimeout(timer);
  }, []);

  const [isActionSheetOpen, setIsActionSheetOpen] = useState(true);

  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            background: "#d90216",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            position: "absolute",
          }}
        >
          <div
            style={{
              background: `url(${image}) no-repeat`,
              width: "150px",
              height: "150px",
            }}
          ></div>
        </div>

        {loading ? (
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "flex-end",
              paddingBottom: "20px",
              zIndex: "100",
              position: "relative",
            }}
          >
            <div
              className="footer "
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                width: "100%",
                borderRadius: "50px",
              }}
            >
              <IonImg
                style={{ width: "50px", height: "50px" }}
                src={image}
              ></IonImg>
              <span
                style={{
                  width: "auto",
                  height: "50px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                Made in Qatar with love ❤️
              </span>
            </div>
          </div>
        ) : (
          <div
            className="languageSettings"
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "flex-end",
              zIndex: "100",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "#fff",
                width: "100%",
                height: "30vh",
                padding: "20px",
                justifyContent: "center",
                textAlign: "center",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            >
              <p style={{ fontSize: "large", color: "black", fontWeight: "600" }}>
                Select your language
              </p>
              <p style={{ borderBottom: "1px solid black", padding: "10px" }}>
                <button>English</button>
              </p>

              <p>
                <button>Telugu</button>
              </p>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Splash;
