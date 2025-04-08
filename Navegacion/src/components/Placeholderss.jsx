import React from 'react';

const Placeholders = () => {
  return (
    <>
      <div className="card">
        <img
          src="https://th.bing.com/th/id/R.00f24dd9594e5fa198a65ec29d28e61c?rik=qZF4qPtvJJfT%2fw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-0_Lk7-_nLOI%2fUMI8EYrCwZI%2fAAAAAAAAAAg%2fc1W5QJzqQO8%2fs1600%2fhola%2bsoy%2bgerman.jpg&ehk=ZLaDkpyQ14M0xGofIrxxGS9v9R5QOb%2fjs5j1CbCop6o%3d&risl=&pid=ImgRaw&r=0"
          className="card-img-top"
          alt="German Antonio Gonzalez Mejía"
          style={{ width: '700px', height: 'auto', margin: '0 auto' }} // Centrado horizontal
        />
        <div className="card-body">
          <h5 className="card-title">German Antonio Gonzalez Mejía</h5>
          <p className="card-text">
            Soy un programador que actualmente estudia en el instituto tecnico ricaldone, me apasiona correr por las
            mañanas, comer hojas y atrapar insectos
          </p>
          <a href="#" className="btn btn-primary">
            ¿Quieres saber mas de
          </a>
        </div>
      </div>
    </>
  );
};

export default Placeholders;
