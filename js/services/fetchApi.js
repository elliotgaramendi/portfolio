export const fetchReadElliotGaramendi = async () => {
  const method = 'GET';
  const url = 'https://elliotgaramendi.github.io/api-json-public/json/portafolio-elliot.json';
  try {
    const options = {
      method,
      url
    };
    const { data } = await axios(options);
    return data;
  } catch (error) {
    console.log(error);
  }
};