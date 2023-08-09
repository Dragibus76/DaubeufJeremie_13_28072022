import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../api/api';
import { fetchUser, login, logout } from '../../features/login/loginSlice';
import styles from './Profile.module.css';

export default function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const loggedIn = useSelector((state) => state.login.loggedIn); // Assurez-vous que le nom de la slice est correct
  const editing = useSelector((state) => state.editMode.editing);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Argent Bank - Profile';
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { firstName, lastName } = await getUserData();
        setFirstName(firstName);
        setLastName(lastName);
        if (firstName && lastName) {
          dispatch(login());
          dispatch(fetchUser());
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      {loggedIn && (
        <>
          <div className={styles.header}>
            {firstName && <h1>Welcome back {firstName}!</h1>}
            <button
              type="button"
              className={styles['edit-button']}
              // Vous pouvez ajouter des fonctionnalités à ce bouton si nécessaire
            >
              Edit Name
            </button>
            {/* Assurez-vous que votre composant EditUsernameForm est correctement rendu ici */}
          </div>
        </>
      )}
    </main>
  );
}
