import Marquee from "react-fast-marquee";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";


const MainLayout = () => {
    return (
        <div className="w-4/5 mx-auto">
            <header>
                <Header></Header>
                <div>
                    <div className="flex">
                        <p className="p-3 bg-red-500">Latest</p>
                        <Marquee pauseOnHover>
                            <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur obcaecati illo et provident mollitia.</Link>
                            <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur obcaecati illo et provident mollitia.</Link>
                            <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur obcaecati illo et provident mollitia.</Link>
                        </Marquee>
                    </div>
                </div>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Main></Main>
            </main>
        </div>
    );
};

export default MainLayout;