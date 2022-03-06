import React, { FC, ReactElement } from "react";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";
interface LayoutProps {
    children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    return (
        <div  data-theme="dark">
            <div className="navbar bg-base-100">
                <button
                    className="btn btn-ghost normal-case text-xl"
                    onClick={() => router.back()}
                >
                    <FiArrowLeft />
                </button>
            </div>
            {children}
        </div>
    );
};

export default Layout;
