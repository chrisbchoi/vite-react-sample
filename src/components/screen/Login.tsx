import React, { useEffect } from 'react';
import AccountService from '../../services/Account.service';
import Button from '../ui/Button';
import Card from '../ui/Card';
import './Login.css';

const Login: React.FC = () => {
  useEffect(() => {
    const loginAttempt = async () => {
      const result = await AccountService.login();
      console.log(result);
    };

    loginAttempt();
  }, []);

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="card-container">
        <Card>
          {/* Username and Password inputs */}
          <div>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
        </Card>
        <Card>and this is second card</Card>
      </div>
      <Button onClick={() => alert('Login button clicked')}>Login</Button>
      {/* Add login form elements here */}
    </div>
  );
};

export default Login;
