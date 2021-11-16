import http from "../config/http";

export const createEstimative = (values) => http.post("/estimates", values);
