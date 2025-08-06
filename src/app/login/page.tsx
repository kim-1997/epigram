"use client";
// 데이터를 가져올 때 useQuery
// 데이터를 보낼 때 useMutation

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "@/lib/api/auth";
import { useAuthStore } from "@/stores/authStore";
import { useMutation } from "@tanstack/react-query";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuthStore();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // API 요청
  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      const { accessToken, refreshToken, user } = response;
      login(user, accessToken, refreshToken); // zustand 상태 업데이트
      router.push("/"); // 성공 시 페이지 이동
    },
    onError: () => {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    mutation.mutate(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 flex flex-col gap-4"
    >
      <input
        type="email"
        value={form.email}
        name="email"
        placeholder="이메일"
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        type="password"
        value={form.password}
        name="password"
        placeholder="비밀번호"
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-black text-white p-2 rounded">
        로그인
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
