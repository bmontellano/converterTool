import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import {calculatorOutline, cutOutline} from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
     <IonHeader className="ion-no-border">
      <IonToolbar color='primary'>
        <IonTitle>Calculator Tool</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">      
      <IonGrid className="ion-text-center ion-margin" id="result-BMI">
        <IonRow>
          <IonCol>
          <IonItem>
        <IonLabel position="floating">Height</IonLabel>
        <IonInput id="height-input"></IonInput>
      </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonItem>
        <IonLabel position="floating">Weight</IonLabel>
        <IonInput id="weight-input"></IonInput>
      </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton fill="outline" id="calculate-BMI-Button">
              <IonIcon slot="icon-only" icon={calculatorOutline}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton fill="outline" id="reset-BMI">
              <IonIcon slot="icon-only" icon={cutOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol id="bmi-result">
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
);

export default App;
