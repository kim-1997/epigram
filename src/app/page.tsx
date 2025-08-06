"use client";

import { useAuthStore } from "@/stores/authStore";

export default function Home() {
  const user = useAuthStore((state) => state.user);
  return (
    <div>
      {user ? (
        <h1>{user.nickname}님, 환영합니다!</h1>
      ) : (
        <h1>로그인 해주세요</h1>
      )}
    </div>
  );
}
