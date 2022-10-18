import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import { buyProduct } from "../../../../actions/action";
import { connect } from "react-redux";
import styles from "../Collection/Collection.module.scss";

let cx = classNames.bind(styles);

function Collection(item) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(
            "https://eoffice.merapgroup.com/testeoffice/api/api/test/products"
        )
            .then((res) => res.json())
            .then((result) => setItems(result.data));
    }, []);

    const handerBuy = (item) => {
        buyProduct(item);
        console.log(buyProduct(item));
    };

    return (
        <section className={cx("collection")}>
            <div className={cx("collection-heading")}>
                <h5 className={cx("heading-title", "title-main")}>
                    sản phẩm nỗi bật
                </h5>
                <p className={cx("heading-desc")}>
                    Với hơn 100 công nhân viên hoạt động sản xuất trong ngành
                    nội thất mây, chúng tôi luôn nỗ lực và phấn đấu để cho ra
                    đời những sản phẩm đẹp nhất, chất lượng nhất.
                </p>
            </div>

            <div className={cx("list-product")}>
                {items.map((item) => {
                    const colors = item.product_color;
                    const productNew = item.product_new;
                    const productFavourite = item.product_favourite;
                    const discount = item.product_price_origin;

                    return (
                        <div
                            key={item.id_product}
                            className={cx("product-item")}
                        >
                            <a href="#" className={cx("img-pro")}>
                                <img
                                    src={item.product_image}
                                    alt={item.product_name}
                                />

                                {productNew ? (
                                    <div
                                        className={cx(
                                            "hightlight",
                                            "product-new"
                                        )}
                                    >
                                        Mới
                                    </div>
                                ) : (
                                    ""
                                )}

                                {productFavourite ? (
                                    <div className={cx("favourite")}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="21"
                                            viewBox="0 0 24 21"
                                            fill="none"
                                        >
                                            <path
                                                d="M12 20.7143C12.2143 20.7143 12.4286 20.6339 12.5893 20.4732L20.933 12.4375C21.0536 12.317 24 9.625 24 6.41071C24 2.48661 21.6027 0.142856 17.5982 0.142856C15.2545 0.142856 13.058 1.99107 12 3.03571C10.942 1.99107 8.74554 0.142856 6.40179 0.142856C2.39732 0.142856 0 2.48661 0 6.41071C0 9.625 2.94643 12.317 3.05357 12.4107L11.4107 20.4732C11.5714 20.6339 11.7857 20.7143 12 20.7143Z"
                                                fill="#D71010"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className={cx("favourite")}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="22"
                                            viewBox="0 0 24 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M21.52 3.024C20.68 2.184 19.7 1.58667 18.58 1.232C17.46 0.877333 16.3213 0.793333 15.164 0.979999C14.0067 1.148 12.952 1.58667 12 2.296C10.992 1.512 9.86267 1.036 8.612 0.867999C7.38 0.681332 6.176 0.802666 5 1.232C3.84267 1.66133 2.844 2.36133 2.004 3.332C1.18267 4.284 0.641333 5.376 0.38 6.608C0.137333 7.84 0.193333 9.05333 0.548 10.248C0.921334 11.4427 1.56533 12.4787 2.48 13.356L9.732 20.608C10.1427 21.0187 10.6187 21.2893 11.16 21.42C11.72 21.5693 12.2707 21.5693 12.812 21.42C13.372 21.2893 13.8573 21.0187 14.268 20.608L21.52 13.356C22.4533 12.4227 23.0787 11.3307 23.396 10.08C23.732 8.82933 23.732 7.57867 23.396 6.328C23.0787 5.05867 22.4533 3.95733 21.52 3.024ZM19.868 11.732L12.644 18.984C12.476 19.152 12.2613 19.236 12 19.236C11.7573 19.236 11.552 19.152 11.384 18.984L4.132 11.704C3.516 11.0693 3.096 10.332 2.872 9.492C2.648 8.63333 2.648 7.784 2.872 6.944C3.096 6.08533 3.516 5.33867 4.132 4.704C4.76667 4.06933 5.504 3.64933 6.344 3.444C7.20267 3.22 8.052 3.22 8.892 3.444C9.75067 3.64933 10.4973 4.06933 11.132 4.704C11.356 4.928 11.6267 5.04 11.944 5.04C12.28 5.04 12.56 4.928 12.784 4.704C13.4187 4.06933 14.156 3.64933 14.996 3.444C15.8547 3.22 16.704 3.22 17.544 3.444C18.4027 3.64933 19.1493 4.06933 19.784 4.704C20.4187 5.33867 20.848 6.076 21.072 6.916C21.296 7.756 21.3053 8.60533 21.1 9.464C20.8947 10.304 20.484 11.0507 19.868 11.704V11.732Z"
                                                fill="#201F2E"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </a>

                            <div className={cx("detail-box")}>
                                <p className={cx("name-cate")}>
                                    {item.category_name}
                                </p>

                                <ul className={cx("rated")}>
                                    <li className={cx("rated-item")}>
                                        {item.rated}
                                    </li>
                                </ul>
                            </div>
                            <p className={cx("name-pro")}>
                                {item.product_name}
                            </p>

                            <div className={cx("product_color")}>
                                {colors.map((color, index) => (
                                    <span
                                        key={index}
                                        style={{ backgroundColor: color.code }}
                                    ></span>
                                ))}
                            </div>

                            <div className={cx("action-price")}>
                                <div className={cx("box-price")}>
                                    {discount !== 0 ? (
                                        <del className={cx("price-del")}>
                                            {item.product_price_origin} đ
                                        </del>
                                    ) : (
                                        ""
                                    )}

                                    <p className={cx("price")}>
                                        {item.product_price} đ
                                    </p>
                                </div>

                                <button
                                    onClick={handerBuy.bind(this, item)}
                                    className={cx("btn-buy")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="24"
                                        viewBox="0 0 20 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M19.9205 22.9975L18.4601 6.73362C18.4202 6.28947 18.048 5.94926 17.6021 5.94926H14.5904V4.59096C14.5904 2.05951 12.5311 0 9.99972 0C7.46849 0 5.40933 2.05951 5.40933 4.59096V5.94926H2.39559C1.94972 5.94926 1.57746 6.28947 1.53761 6.73362L0.0714567 23.0615C0.0498635 23.3025 0.130493 23.5413 0.293705 23.7197C0.456918 23.8982 0.687666 23.9999 0.92944 23.9999H19.0684C19.0691 23.9999 19.07 23.9999 19.0707 23.9999C19.5465 23.9999 19.9321 23.6142 19.9321 23.1385C19.932 23.0906 19.9281 23.0434 19.9205 22.9975ZM7.13219 4.59096C7.13219 3.00949 8.41859 1.72286 9.99983 1.72286C11.5812 1.72286 12.8677 3.00949 12.8677 4.59096V5.94926H7.13219V4.59096ZM1.87173 22.2771L3.18317 7.67212H5.40933V9.21259C5.40933 9.68832 5.79491 10.074 6.27076 10.074C6.74662 10.074 7.13219 9.68832 7.13219 9.21259V7.67212H12.8677V9.21259C12.8677 9.68832 13.2533 10.074 13.7291 10.074C14.205 10.074 14.5906 9.68832 14.5906 9.21259V7.67212H16.8147L18.1261 22.2771H1.87173Z"
                                            fill="#201F2E"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyProduct: (item) => dispatch(item),
    };
};

export default connect(mapDispatchToProps)(Collection);
