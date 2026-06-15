import AuthKey from "../constants/AuthKey";

const BASE_URL = 'https://api.weatherapi.com/v1'

export const getApiUrl = (endPoints:string):string => BASE_URL + endPoints;

//https://api.weatherapi.com/v1/current.json?q=26.072067%2C%2083.185654&key=0dca2c24bd1241ebb74113956261506
export const Current_Weather_Api = (lat_long:string):string => getApiUrl(`/current.json?q=${lat_long}&key=${AuthKey.Weather_API_key}`)

