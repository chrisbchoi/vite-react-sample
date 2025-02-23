import React from 'react';
import './Container.css';
import Login from './Login';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
      <Login />
    </div>
  );
};

export default Container;
