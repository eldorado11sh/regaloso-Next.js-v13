// services/apiService.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiService = {
  async get(endpoint) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    return await response.json();
  },
  async post(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  },
  async put(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  },
  async delete(endpoint) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'DELETE',
    });
    return response.status === 204; // 204 indicates success for DELETE
  },
};
