import classNames from 'classnames/bind';
import styles from '../Advertisement/Advertisement.module.scss';

let cx = classNames.bind(styles);



function Advertisement() {
    return <section className={(cx('Advertisement'))}>
        <img src="https://b-f6-zpcloud.zdn.vn/5479668691857916612/56ea304c5b699c37c578.jpg" alt="" />

        <div className={(cx('content'))} >
            <div className={(cx('content-heading'))}>
                <h4 className={(cx('title', 'title-main'))}>
                    bộ sưu tập
                </h4>

                <div className={(cx('hightlight'))}>Mới</div>
            </div>

            <p className={(cx('desc'))}>
                Miễn phí giao hàng toàn quốc. Bảo hành 1 năm
            </p>        

            <button className={(cx('btn-link'))}>Mua ngay</button>
        </div>

    </section>
}

export default Advertisement;