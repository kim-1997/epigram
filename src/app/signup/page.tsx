"use client";
// 데이터를 가져올 때 useQuery
// 데이터를 보낼 때 useMutation

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { signupApi } from "@/lib/api/auth";

interface Form {
    email: string;
    nickname: string;
    password: string;
    passwordConfirmation: string;
}

export default function SignupPage() {
    const router = useRouter();

    // 입력값 상태
    const [form, setForm] = useState<Form>({
        email: "",
        nickname: "",
        password: "",
        passwordConfirmation: "",
    });

    const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev: Form) => ({
            ...prev,
            [name]: value,
        }));
    };
    const { email, nickname, password, passwordConfirmation } = form;

    // API 요청
    const mutation = useMutation({
        mutationFn: signupApi,
        onSuccess: () => {
            alert("회원가입 성공!");
            router.push("/login");
        },
        onError: (error: any) => {
            alert("회원가입 실패: " + error.message);
        },
    });

    // 제출
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({
            email,
            nickname,
            password,
            passwordConfirmation,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={email} name="email" placeholder="이메일" onChange={handleSignUpChange} />
            <input value={nickname} name="nickname" placeholder="닉네임" onChange={handleSignUpChange} />
            <input
                type="password"
                value={password}
                name="password"
                placeholder="비밀번호"
                onChange={handleSignUpChange}
            />
            <input
                type="password"
                value={passwordConfirmation}
                name="passwordConfirmation"
                placeholder="비밀번호 확인"
                onChange={handleSignUpChange}
            />
            <button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "가입 중..." : "회원가입"}
            </button>
        </form>
    );
}
