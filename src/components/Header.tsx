"use client";

import { useAuthStore } from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    const user = useAuthStore((state) => state.user);
    return (
        <header className="border-b border-gray-300 fixed w-full z-50 bg-white">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center p-4">
                <div>
                    <Image
                        src="/icons/search.svg"
                        width={36}
                        height={36}
                        alt="로고"
                        className="cursor-pointer"
                    />
                </div>
                <div>
                    <Link href="/">
                        <Image
                            src="/icons/logo.svg"
                            width={131}
                            height={136}
                            alt="로고"
                        />
                    </Link>
                </div>
                <div>
                    {user ? (
                        <div className="flex justify-center items-center">
                            <Image
                                src="/icons/user.svg"
                                width={24}
                                height={24}
                                alt="유저"
                                className="mr-2"
                            />
                            <span>{user.nickname}</span>
                        </div>
                    ) : (
                        <Link href="/login" className="text-gray-500">
                            로그인
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
