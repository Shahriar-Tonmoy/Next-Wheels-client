import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
           <div className="">
           <Nav></Nav>
           <Outlet ></Outlet>
           <Footer ></Footer>
        </div>
    );
};

export default Root;