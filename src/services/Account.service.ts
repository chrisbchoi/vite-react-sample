const AccountService = {
  login: async (/* credentials */) => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Login successful' });
      }, 1000);
    });
  },
};

export default AccountService;
