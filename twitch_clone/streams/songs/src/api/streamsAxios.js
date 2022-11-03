import axios from "axios";

export const streamCreate = axios.create({
  baseURL: "http://localhost:3001",
});
