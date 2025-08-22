import Image from "next/image";
import Link from "next/link";
export default function AuthHeader() {
    return (
        <header className="border-b border-gray-300">
            <div className="max-w-[1600px] mx-auto flex justify-center items-center p-4">
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
            </div>
        </header>
    );
}
