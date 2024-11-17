import { Outlet } from "react-router-dom";
import LeftLayout from "../Layouts/LeftLayout";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";


const Main = () => {

    const {name} = useContext(AuthContext)
    return (
        <div>
            <div className="grid grid-cols-12">
                <aside className="col-span-3">
                    <LeftLayout></LeftLayout>
                </aside>
                <main className="col-span-6">
                <Outlet></Outlet>
                </main>
                <aside className="col-span-3">
                     right side{name}
                </aside>
            </div>
        </div>
    );
};

export default Main;