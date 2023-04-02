import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ClassList from '../components/ClassList';
import './ClassesPage.css';

const ClassesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Classes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ClassList />
      </IonContent>
    </IonPage>
  );
};

export default ClassesPage;
