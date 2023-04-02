import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import RocketDetails from '../components/RocketDetails';
import './RocketDetailsPage.css';
import { RouteComponentProps } from 'react-router';

interface RouteParams {
  id: string;
}

const RocketDetailsPage: React.FC<RouteComponentProps<RouteParams>> = (
  props
) => {
  // console.log(props);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rocket Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RocketDetails id={props.match.params.id} />
      </IonContent>
    </IonPage>
  );
};

export default RocketDetailsPage;
