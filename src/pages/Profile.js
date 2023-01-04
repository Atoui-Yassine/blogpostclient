import React, { useContext } from 'react';
import Auth from '../components/auth'
import { UidContext } from '../components/AppContext';
import UpdateProfil from '../components/profil/UpdateProfil';

const Profile = () => {
  const uid =useContext(UidContext)

    return (
        <div className='profil-page'>
          {uid ? (
            <UpdateProfil/>
          ) : (
            <div className='log-container'>
            <Auth signin={false} signup={true} />
            <div className='img-container'>
            
               <img src='./img/log.svg' alt='log-img'/>
            </div>


          </div>
      
          )}
          
        </div>
    );
};

export default Profile;