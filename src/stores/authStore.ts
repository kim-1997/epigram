// zustand로 유저 정보 저장
import { create } from "zustand";

// User 타입 정의
interface User {
  id: number;
  email: string;
  nickname: string;
  teamId: string;
  image: string | null;
}

// 상태 타입 정의
interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  login: (user: User, accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

// zustand 스토어 생성
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,

  // 로그인 함수 - 상태 업데이트용
  login: (user, accessToken, refreshToken) => {
    set({
      user,
      accessToken,
      refreshToken,
      isLoggedIn: true,
    });
  },

  // 로그아웃 함수 - 상태 초기화
  logout: () => {
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoggedIn: false,
    });
  },
}));
