import axios from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const config = axios;
const aams = config.create({
  baseURL: 'https://aamsapi.azurewebsites.net/api/',
});

aams.interceptors.request.use((config) => {
  const token = localStorage.getItem("aams:access_token");

  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export const methods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

// eslint-disable-next-line no-unused-vars
export const request = async (url, method, _data = {}, _config = {}) => {
  try {
    let result;
    switch (method) {
      case "GET": {
        result = await aams.get(url);
        break;
      }
      case "POST": {
        result = await aams.post(url, _data);
        break;
      }
      case "PUT": {
        result = await aams.put(url, _data);
        break;
      }
      case "PATCH": {
        result = await aams.patch(url, _data);
        break;
      }
      case "DELETE": {
        result = await aams.delete(url);
        break;
      }
      default: {
        // eslint-disable-next-line no-throw-literal
        throw "InvalidMethod";
      }
    }
    const { data } = result;
    return [null, data];
  } catch (error) {
    const errDto = {
      status: error?.response?.status,
      statusText: error?.response?.statusText,
      data: error?.response?.data,
    };
    return [errDto];
  }
};
