import React from 'react';

const Profile = props => {
  // events

  const handleLogout = () => {
    props.handleLogout();
  };

  // render

  return (
    <section className="profile">
      <h4 className="profile__title">Bienvenida usuaria</h4>
      <button className="profile__btn" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </section>
  );
};

export default Profile;
