import React, { useEffect, useState } from 'react';
import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from '@ionic/react';
import './ClassList.css';
import axios from 'axios';

interface ClassListItem {
  id: string;
  type: string;
  teacher: {
    name: string;
    image: string;
  };
}

const ClassList: React.FC = () => {
  const [classes, setClasses] = useState<ClassListItem[]>([]);

  const getClassData: () => Promise<any> = async () => {
    const response = await axios.get(
      `https://w0458329-fullstack.onrender.com/api/classes`
    );
    return response.data;
  };

  useEffect(() => {
    (async () => {
      const data = await getClassData();
      setClasses(data);
    })();
  }, []);

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    const data = await getClassData();
    setClasses(data);
    event.detail.complete();
  };

  // useEffect(()=>{
  //   if(rockets.length === 0){
  //     console.log('rockets state is empty')
  //   } else {
  //     console.log('rockets state is not empty')
  //   }
  // }, [rockets])

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <IonList>
        {classes.map((item) => {
          return (
            <IonItem key={item.id}>
              <IonAvatar>
                {
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img
                    alt={`Image of ${item.teacher.name}`}
                    src={item.teacher.image}
                  />
                }
              </IonAvatar>
              <IonLabel>{item.teacher.name + ' - ' + item.type}</IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </>
  );
};

export default ClassList;
