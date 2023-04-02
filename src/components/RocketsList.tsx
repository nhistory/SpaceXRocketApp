import React, { useEffect, useState } from 'react';
import { IonAvatar, IonItem, IonLabel, IonList } from '@ionic/react';
import './RocketsList.css';
import axios from 'axios';

interface RocketListItem {
  id: string;
  name: string;
}

const RocketsList: React.FC = () => {
  const [rockets, setRockets] = useState<RocketListItem[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://api.spacexdata.com/v4/rockets`);
      // console.log(response);
      setRockets(response.data);
    })();
  }, []);

  // useEffect(()=>{
  //   if(rockets.length === 0){
  //     console.log('rockets state is empty')
  //   } else {
  //     console.log('rockets state is not empty')
  //   }
  // }, [rockets])

  return (
    <IonList>
      {rockets.map((rocket) => {
        return (
          <IonItem
            button
            detail
            key={rocket.id}
            routerLink={`/rockets/${rocket.id}`}
          >
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>{rocket.name}</IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default RocketsList;
