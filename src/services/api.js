import axios from "axios";

export const api = axios.create({
  baseURL: "https://wakanda.aquidev.com/public/api/v1",
  // timeout: 9000,
});
