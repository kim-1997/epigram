// 회원가입/로그인 API

import axios from "axios";

const API_URL = "https://fe-project-epigram-api.vercel.app/7594";

interface LoginData {
  email: string;
  password: string;
}

interface SignUpData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export async function loginApi(data: LoginData) {
  const response = await axios.post(`${API_URL}/auth/signIn`, data);
  return response.data;
}

export async function signupApi(data: SignUpData) {
  const response = await axios.post(`${API_URL}/auth/signUp`, data);
  return response.data;
}
