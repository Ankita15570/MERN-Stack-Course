const getData = async () => {
  try {
    const userData = await user.find();
  } catch (error) {
    console.log(error);
  }
};
