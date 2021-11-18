import http from "../config/http";

export const createEstimative = (values) => http.post("/estimates", values);
export const createOrder = async (orderData) => {
    try {
      const response = await http.post('/orders', orderData)
      return {
        error: false,
        data: response.data
      }
    } catch (error) {
      return {
        error: true,
        data: error.response?.data || 'Erro inesperado.'
      }
    }
  }