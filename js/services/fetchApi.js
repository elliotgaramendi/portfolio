import axiosInstance from "../configs/axiosInstance.js";

export const fetchReadElliotGaramendi = async () => {
  try {
    const options = {
      method: 'GET',
      url: '/json/portafolio-elliot.json'
    };
    const { data } = await axiosInstance(options);
    return data;
  } catch (error) {
    console.log(error);
  }
};