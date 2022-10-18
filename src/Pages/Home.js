import classNames from "classnames/bind";
import Banner from "../Pages/Home/Components/Banner";
import Advertisement from "../Pages/Home/Components/Advertisement";
import Collection from "./Home/Components/Collection/index";
import Policy from "../Pages/Home/Components/Policy";
import styles from "../Pages/Home/Home.module.scss";

import Cart from "../Pages/Cart/Cart";

let cx = classNames.bind(styles);

function Home() {
    return (
        <main className={cx("container", "main_home")}>
            <Banner />
            <Advertisement />
            <Collection />
            <Policy />
            <Cart />
        </main>
    );
}

export default Home;
