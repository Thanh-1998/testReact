import classNames from 'classnames/bind';
import images from '../../../../assets';
import styles from '../Banner/Banner.module.scss';



let cx = classNames.bind(styles);

function Banner() {
    return <section className={(cx('banner'))}>
        <div className={(cx('banner-left', 'col-6'))}>
            <div className={(cx('box-image'))}>
                <img src={images.banner} alt='img' />
            </div>
            <button className={(cx('more-banner'))}>Ấm áp</button>
        </div>

        <div className={(cx('banner-right', 'col-6'))}>
            <div className={(cx('box-image'))}>
                <img src={images.banner_2} alt='img' />
            </div>
            <button className={(cx('more-banner'))}>ngọt ngào</button>
        </div>
    </section>
}

export default Banner;