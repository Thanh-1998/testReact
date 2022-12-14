import classNames from "classnames/bind";
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../../actions/action';
import styles from "../Cart/Cart.module.scss";

let cx = classNames.bind(styles);

function Cart({items, IncreaseQuantity,DecreaseQuantity,DeleteCart}) {

    const handlerChange =() => { };

    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });

   
    return (
        
        <main className={cx("container", "main_cart")}>
            { ListCart.length ?
            <>
            <section className={cx("main_cart-left")}>
                <div className={cx("tab-content")}>
                    <div className={cx("heading")}>
                        <div className={cx("heading-name")}>
                            <input type={"checkbox"} id="all" className={cx("choose-all")}></input>
                            <label htmlFor="all">Chọn tất cả</label>

                            <span className={cx("heading-del")}>
                                Xóa tất cả
                            </span>
                        </div>
                        <div className={cx("heading-price", "heading-coll")}>
                            ĐƠN GIÁ
                        </div>
                        <div className={cx("heading-amount", "heading-coll")}>
                            SỐ LƯỢNG
                        </div>
                        <div className={cx("heading-total", "heading-coll")}>
                            THÀNH TIỀN
                        </div>
                        <div className={cx("heading-delete")}></div>
                    </div>
                   
                    {ListCart.map((cart, key) => (
                        <div className={cx("content")} key={key}>
                            <div className={cx("heading-name")}>
                                <input type={"checkbox"}></input>

                                <div className={cx("infor")}>
                                    <img src={cart.image} alt={cart.name} />
                                    <span className={cx("name-product")}>
                                        {cart.name}
                                    </span>
                                </div>
                            </div>

                            <div className={cx("heading-price", "text-bold")}>
                                {cart.price}
                            </div>

                            <div className={cx("heading-amount")}>
                                <button
                                    onClick={()=>DecreaseQuantity(key)}
                                    className={cx("amount", "minus")}
                                >
                                    -
                                </button>
                                <input
                                    value={cart.quantity
                                    }
                                    onChange={handlerChange}
                                ></input>
                                <button
                                    onClick={()=>IncreaseQuantity(key)}
                                    className={cx("amount", "plus")}
                                >
                                    +
                                </button>
                            </div>

                            <div className={cx("heading-total", "text-bold")}>
                            {cart.price * cart.quantity}
                            </div>

                            <div
                                onClick={()=>DeleteCart(key)}
                                className={cx("heading-delete")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_30_375)">
                                        <path
                                            d="M5.41989 18C5.24126 17.9623 5.06073 17.9312 4.88364 17.8859C3.48702 17.5282 2.49527 16.2526 2.49374 14.8016C2.49032 11.8014 2.49298 8.80073 2.49222 5.80047C2.49222 5.43619 2.63428 5.15366 2.96334 4.99129C3.2566 4.84658 3.5453 4.88343 3.80504 5.07958C4.03432 5.25232 4.12611 5.49108 4.12573 5.77974C4.12306 8.76733 4.12382 11.7549 4.1242 14.7425C4.1242 15.4895 4.57552 16.1018 5.27402 16.2918C5.41912 16.3313 5.57375 16.3513 5.72419 16.3513C7.90766 16.3551 10.0911 16.3547 12.2746 16.3536C13.1902 16.3532 13.8746 15.6638 13.875 14.7429C13.8757 11.7426 13.875 8.742 13.8757 5.74174C13.8757 5.3644 14.1035 5.04964 14.4443 4.94561C14.7917 4.83967 15.1737 4.96365 15.3576 5.27804C15.4407 5.41968 15.5001 5.59971 15.5005 5.76247C15.5088 8.79458 15.5161 11.8271 15.5024 14.8592C15.4951 16.4399 14.2711 17.7762 12.7053 17.9646C12.6623 17.9696 12.6212 17.9881 12.5793 18.0003C10.1932 18 7.80673 18 5.41989 18Z"
                                            fill="#3C5264"
                                        />
                                        <path
                                            d="M16.3125 3.48226C16.2893 3.52525 16.2645 3.56748 16.2432 3.61162C16.0924 3.91909 15.8509 4.09337 15.5066 4.09337C11.169 4.0949 6.83139 4.0949 2.4934 4.09337C2.1491 4.09337 1.90726 3.91986 1.75682 3.612C1.73549 3.56786 1.71073 3.52564 1.6875 3.48226C1.6875 3.35443 1.6875 3.22699 1.6875 3.09917C1.8566 2.61435 2.20585 2.43931 2.70325 2.44852C3.64207 2.4658 4.58165 2.45351 5.52085 2.45351C5.58902 2.45351 5.6572 2.45351 5.7467 2.45351C5.7467 2.36446 5.7467 2.29575 5.7467 2.22665C5.74708 1.76717 5.74022 1.3073 5.74937 0.848207C5.75927 0.362239 6.08909 0.00755184 6.55374 0.00524868C8.18458 -0.00204468 9.8158 -0.00242854 11.4466 0.00524868C11.9185 0.00755184 12.2438 0.366846 12.2514 0.8674C12.2586 1.32036 12.2533 1.7737 12.2533 2.22703C12.2533 2.29575 12.2533 2.36446 12.2533 2.45351C12.3428 2.45351 12.411 2.45351 12.4792 2.45351C13.4184 2.45351 14.3579 2.4658 15.2967 2.44852C15.7945 2.43931 16.143 2.61512 16.3125 3.09917C16.3125 3.22699 16.3125 3.35482 16.3125 3.48226ZM7.39087 2.43816C8.47099 2.43816 9.53854 2.43816 10.6053 2.43816C10.6053 2.166 10.6053 1.90881 10.6053 1.65316C9.5252 1.65316 8.46223 1.65316 7.39087 1.65316C7.39087 1.92187 7.39087 2.1802 7.39087 2.43816Z"
                                            fill="#3C5264"
                                        />
                                        <path
                                            d="M6.5632 10.2253C6.5632 9.28712 6.56282 8.34935 6.56359 7.41119C6.56397 6.91448 6.8995 6.55173 7.35958 6.54789C7.83604 6.54367 8.19252 6.89989 8.19328 7.39891C8.19633 9.28136 8.19633 11.1638 8.19328 13.0463C8.19252 13.5461 7.83718 13.9042 7.36187 13.9004C6.90027 13.8969 6.56359 13.5349 6.5632 13.0394C6.56244 12.1012 6.5632 11.163 6.5632 10.2253Z"
                                            fill="#3C5264"
                                        />
                                        <path
                                            d="M11.4367 10.2268C11.4367 11.165 11.4374 12.1028 11.4363 13.0409C11.4359 13.5361 11.0981 13.8973 10.6357 13.9004C10.1612 13.9034 9.80698 13.5449 9.80622 13.0447C9.80356 11.1623 9.80317 9.27984 9.80622 7.39739C9.80698 6.89914 10.1646 6.54291 10.6411 6.5479C11.1011 6.55251 11.4355 6.91487 11.4359 7.41274C11.4374 8.35051 11.4367 9.28867 11.4367 10.2268Z"
                                            fill="#3C5264"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_375">
                                            <rect
                                                width="18"
                                                height="18"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </section>

            <section className={cx("main_cart-right")}>
                <div className={cx("box-right")}>
                    <h3 className={cx("right-title")}>tổng giỏ hàng</h3>

                    <div className={cx("desc-order")}>
                        <span>Tạm tính</span>
                        <span>{Number(TotalCart)}</span>
                    </div>

                    <div className={cx("desc-order")}>
                        <span>Phí vận chuyển</span>
                        <span>{Number(TotalCart) !== 0 ? 40000 : '--'}</span>
                    </div>

                    <div className={cx("line")}></div>

                    <div className={cx("desc-order")}>
                        <span>Tổng cộng</span>
                        <span className={cx("total")}>
                            
                        {Number(TotalCart) + 40000}
                        </span>
                    </div>

                    <button className={cx("btnBuy")}>Mua Hàng</button>
                </div>
            </section>
            </> : <span style={{ textAlign: "center", fontSize: 30, display: "block", width: "100%" }}> Cart empty </span> }
        </main>
        
    );
}

const mapStateToProps = state =>{
    return{
        items:state.todoProduct
    }
}
  
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)
  