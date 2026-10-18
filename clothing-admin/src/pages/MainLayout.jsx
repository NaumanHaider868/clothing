import { Outlet } from "react-router-dom";
import Navbar from './Public/Navbar'
import Sidebar from "./Public/Sidebar";

function MainLayout() {

    return (
        <>
            <div className={`main-section h-auto overflow-hidden`}>
                <div className={`w-full`}>
                    <Navbar />
                    <section className="flex h-full">
                        <Sidebar />
                        <div className="w-full h-full mt-[40px]">
                            <Outlet />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default MainLayout;
