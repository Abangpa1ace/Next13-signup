import axios from "axios";

const baseURL = 'https://kkwy2n35ug.execute-api.ap-northeast-2.amazonaws.com/dev';
const fileURL = 'https://3billion-public-images.s3.ap-northeast-2.amazonaws.com';

export const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
})

export const axiosFileInstance = axios.create({
  baseURL: fileURL,
  headers: { "Content-Type": "text/plain" }
})