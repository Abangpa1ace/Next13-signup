import axios from "axios";

const baseURL = 'https://3billion-public-images.s3.ap-northeast-2.amazonaws.com';

export const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
})

export const axiosFileInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "text/plain" }
})