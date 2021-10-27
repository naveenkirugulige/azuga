const validatePasswordFormat = (password) => {
  if (password.length < 6) return 6 - password.length;
  else {
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(password);
  }
};
