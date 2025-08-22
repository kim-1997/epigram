"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <>
            {/* KV 섹션 */}
            <section className="bg-cover bg-center h-screen flex justify-center items-center h-[calc(100vh-69px)] bg-[url('/images/kv.jpg')]">
                <div className="text-center">
                    <h2
                        className="text-[64px] text-[#454545]"
                        data-aos="fade-up"
                    >
                        나만 갖고 있기엔
                        <br />
                        아까운 글이 있지 않나요?
                    </h2>
                    <p
                        className="mt-10 text-[#454545] text-[20px]"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        다른 사람들과 감정을 공유해 보세요.
                    </p>
                    <button
                        className="mt-10 bg-[#454545] text-white text-[20px] rounded-lg px-4 py-2 w-[286px] h-[64px]"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    >
                        시작하기
                    </button>
                </div>
            </section>

            {/* 다른 섹션들 */}
            <section>1</section>
            <section>2</section>
            <section>3</section>
            <section>4</section>
            <section>5</section>
        </>
    );
}
