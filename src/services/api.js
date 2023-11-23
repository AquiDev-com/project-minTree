import axios from "axios";

export const api = axios.create({
  baseURL: "https://wakanda.aquidev.com/api/v1",
  //baseURL: "http://localhost:8000/api/v1",
  //timeout: 9000,
});
