import React from 'react';

const Profile = props => {
  // render

  const handleLogout = () => {
    props.handleLogout();
  };

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
