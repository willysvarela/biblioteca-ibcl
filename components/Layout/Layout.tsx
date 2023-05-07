import React, { FC, ReactElement } from "react";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";
interface LayoutProps {
    children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    return (
        <div data-theme="light">
            <div className="navbar flex justify-between">
                <button
                    className="btn btn-ghost normal-case text-xl"
                    onClick={() => router.back()}
                >
                    <FiArrowLeft />
                </button>
                <span className="text-xl">Biblioteca IBCL</span>
            </div>
            {children}
        </div>
    );
};

export default Layout;
