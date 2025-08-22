"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import AuthHeader from "./AuthHeader";
import Header from "./Header";

export default function QueryProvider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    const pathname = usePathname();
    const authPages = ["/login", "/signup"];
    const isAuthPage = authPages.includes(pathname);

    return (
        <QueryClientProvider client={queryClient}>
            {isAuthPage ? <AuthHeader /> : <Header />}
            {children}
        </QueryClientProvider>
    );
}
