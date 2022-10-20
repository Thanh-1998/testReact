import classNames from 'classnames/bind';
import Banner from './Components/Banner';
import Advertisement from './Components/Advertisement';
import Collection from './Components/Collection';
import Policy from './Components/Policy';
import styles from '../Home/Home.module.scss';


let cx = classNames.bind(styles);


function Home() {
    return <main className={(cx('container', 'main_home'))}>
        <Banner />
        <Advertisement />
        <Collection />
        <Policy />
    </main>
}

export default Home;