const setToDeadOrAlive = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber > 4) {
    return true;
  }
  return false;
};

export default setToDeadOrAlive;
