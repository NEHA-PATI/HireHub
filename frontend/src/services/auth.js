import API from '../utils/api';

export const loginUser = (formData) => API.post('/auth/login', formData);
export const signupUser = (formData) => API.post('/auth/signup', formData);
