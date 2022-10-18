import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from '../Header/Header.module.scss';


let cx = classNames.bind(styles);


const listMenu = [
    {
        path: '/',
        title: 'papasan'
    },
    {
        path: '/',
        title: 'sofa mây'
    },
    {
        path: '/',
        title: 'bàn mây'
    },
    {
        path: '/',
        title: 'ghế mây đơn'
    }
    ,
    {
        path: '/',
        title: 'giường tủ'
    },
    {
        path: '/',
        title: 'thùng đựng đồ'
    }
    ,
    {
        path: '/',
        title: 'vật dụng decor'
    }
]

function Header() {

    const [show, setShow] = useState(false);

    const handlerMenu = () => {
       setShow(!show)
    }



    return <header className={(cx('header', 'container'))}>
        <div className={(cx('logo'))}>
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="225" height="55" viewBox="0 0 225 55" fill="none">
                    <path d="M30.696 10.92C31.592 10.92 32.312 11.208 32.856 11.784C33.4 12.328 33.672 13.064 33.672 13.992V42.408C33.672 43.304 33.416 44.008 32.904 44.52C32.392 45.032 31.72 45.288 30.888 45.288C30.056 45.288 29.4 45.032 28.92 44.52C28.44 44.008 28.2 43.304 28.2 42.408V22.632L20.04 38.088C19.656 38.792 19.24 39.32 18.792 39.672C18.344 39.992 17.816 40.152 17.208 40.152C16.6 40.152 16.072 39.992 15.624 39.672C15.176 39.352 14.76 38.824 14.376 38.088L6.168 22.872V42.408C6.168 43.272 5.912 43.976 5.4 44.52C4.92 45.032 4.264 45.288 3.432 45.288C2.6 45.288 1.944 45.032 1.464 44.52C0.984 44.008 0.744 43.304 0.744 42.408V13.992C0.744 13.064 1 12.328 1.512 11.784C2.056 11.208 2.776 10.92 3.672 10.92C4.92 10.92 5.896 11.608 6.6 12.984L17.256 33.288L27.864 12.984C28.568 11.608 29.512 10.92 30.696 10.92ZM72.6394 41.304C72.8314 41.72 72.9274 42.136 72.9274 42.552C72.9274 43.288 72.6234 43.912 72.0154 44.424C71.4394 44.936 70.7674 45.192 69.9994 45.192C69.4874 45.192 69.0074 45.064 68.5594 44.808C68.1114 44.52 67.7594 44.088 67.5034 43.512L64.6234 37.08H47.7274L44.8474 43.512C44.5914 44.088 44.2394 44.52 43.7914 44.808C43.3434 45.064 42.8474 45.192 42.3034 45.192C41.5674 45.192 40.8954 44.936 40.2874 44.424C39.6794 43.912 39.3754 43.288 39.3754 42.552C39.3754 42.136 39.4714 41.72 39.6634 41.304L52.9114 12.84C53.1994 12.2 53.6314 11.72 54.2074 11.4C54.8154 11.048 55.4554 10.872 56.1274 10.872C56.7994 10.872 57.4234 11.048 57.9994 11.4C58.6074 11.72 59.0554 12.2 59.3434 12.84L72.6394 41.304ZM49.8394 32.28H62.5114L56.1754 18.024L49.8394 32.28ZM52.5274 7.848C52.0794 8.296 51.5834 8.52 51.0394 8.52C50.5274 8.52 50.0794 8.344 49.6954 7.992C49.3434 7.608 49.1674 7.176 49.1674 6.696C49.1674 6.152 49.4234 5.672 49.9354 5.256L53.9194 1.56C54.5914 0.983998 55.3274 0.695998 56.1274 0.695998C56.9274 0.695998 57.6634 0.983998 58.3354 1.56L62.3194 5.256C62.7994 5.704 63.0394 6.2 63.0394 6.744C63.0394 7.224 62.8634 7.64 62.5114 7.992C62.1594 8.344 61.7274 8.52 61.2154 8.52C60.6714 8.52 60.1754 8.296 59.7274 7.848L56.1274 4.152L52.5274 7.848ZM95.7349 11.976C96.3109 11.272 96.9989 10.92 97.7989 10.92C98.5349 10.92 99.1909 11.208 99.7669 11.784C100.343 12.328 100.631 12.984 100.631 13.752C100.631 14.392 100.391 15 99.9109 15.576L89.0149 28.872V42.168C89.0149 43.16 88.7269 43.928 88.1509 44.472C87.5749 45.016 86.8389 45.288 85.9429 45.288C85.0149 45.288 84.2629 45.016 83.6869 44.472C83.1109 43.928 82.8229 43.16 82.8229 42.168V28.872L71.9269 15.576C71.4469 15 71.2069 14.392 71.2069 13.752C71.2069 12.984 71.4949 12.328 72.0709 11.784C72.6469 11.208 73.3029 10.92 74.0389 10.92C74.8389 10.92 75.5269 11.272 76.1029 11.976L85.9429 24.168L95.7349 11.976ZM144.096 12.504C144.608 11.416 145.456 10.872 146.64 10.872C147.44 10.872 148.16 11.128 148.8 11.64C149.44 12.152 149.76 12.792 149.76 13.56C149.76 13.912 149.664 14.312 149.472 14.76L136.176 43.368C135.888 43.976 135.44 44.456 134.832 44.808C134.256 45.128 133.632 45.288 132.96 45.288C132.288 45.288 131.648 45.128 131.04 44.808C130.464 44.456 130.032 43.976 129.744 43.368L116.496 14.76C116.304 14.312 116.208 13.928 116.208 13.608C116.208 12.808 116.528 12.152 117.168 11.64C117.84 11.128 118.592 10.872 119.424 10.872C119.968 10.872 120.464 11.016 120.912 11.304C121.392 11.56 121.76 11.96 122.016 12.504L133.056 37.032L144.096 12.504ZM157.77 45.288C156.842 45.288 156.09 45 155.514 44.424C154.97 43.848 154.698 43.096 154.698 42.168V13.992C154.698 13.064 154.97 12.328 155.514 11.784C156.09 11.208 156.842 10.92 157.77 10.92C158.73 10.92 159.482 11.208 160.026 11.784C160.602 12.328 160.89 13.064 160.89 13.992V42.168C160.89 43.096 160.602 43.848 160.026 44.424C159.482 45 158.73 45.288 157.77 45.288ZM172.134 45C171.206 45 170.47 44.744 169.926 44.232C169.414 43.72 169.158 43 169.158 42.072V14.088C169.158 13.16 169.414 12.44 169.926 11.928C170.47 11.416 171.206 11.16 172.134 11.16H189.462C190.39 11.16 191.11 11.368 191.622 11.784C192.134 12.2 192.39 12.792 192.39 13.56C192.39 14.36 192.134 14.984 191.622 15.432C191.11 15.848 190.39 16.056 189.462 16.056H175.206V25.368H188.502C189.43 25.368 190.15 25.576 190.662 25.992C191.174 26.408 191.43 27.016 191.43 27.816C191.43 28.584 191.174 29.176 190.662 29.592C190.15 30.008 189.43 30.216 188.502 30.216H175.206V40.104H189.462C190.39 40.104 191.11 40.328 191.622 40.776C192.134 41.192 192.39 41.8 192.39 42.6C192.39 43.368 192.134 43.96 191.622 44.376C191.11 44.792 190.39 45 189.462 45H172.134ZM181.254 54.504C180.326 54.504 179.558 54.216 178.95 53.64C178.374 53.096 178.086 52.36 178.086 51.432C178.086 50.536 178.374 49.816 178.95 49.272C179.526 48.728 180.294 48.456 181.254 48.456C182.182 48.456 182.934 48.728 183.51 49.272C184.118 49.816 184.422 50.536 184.422 51.432C184.422 52.36 184.118 53.096 183.51 53.64C182.934 54.216 182.182 54.504 181.254 54.504ZM177.654 7.848C177.206 8.296 176.71 8.52 176.166 8.52C175.654 8.52 175.206 8.344 174.822 7.992C174.47 7.608 174.294 7.176 174.294 6.696C174.294 6.152 174.55 5.672 175.062 5.256L179.046 1.56C179.718 0.983998 180.454 0.695998 181.254 0.695998C182.054 0.695998 182.79 0.983998 183.462 1.56L187.446 5.256C187.926 5.704 188.166 6.2 188.166 6.744C188.166 7.224 187.99 7.64 187.638 7.992C187.286 8.344 186.854 8.52 186.342 8.52C185.798 8.52 185.302 8.296 184.854 7.848L181.254 4.152L177.654 7.848ZM209.519 45.24C208.559 45.24 207.791 44.968 207.215 44.424C206.671 43.848 206.399 43.096 206.399 42.168V16.248H197.663C195.743 16.248 194.783 15.4 194.783 13.704C194.783 12.008 195.743 11.16 197.663 11.16H221.327C223.247 11.16 224.207 12.008 224.207 13.704C224.207 15.4 223.247 16.248 221.327 16.248H212.591V42.168C212.591 43.096 212.303 43.848 211.727 44.424C211.183 44.968 210.447 45.24 209.519 45.24Z" fill="#389395"/>
                </svg>
            </a>
        </div>

        <button className={(cx('toggle' ,show && 'show'))} onClick={handlerMenu}>
            <span className={(cx('bar'))}></span>
        </button>

        <div className={(cx('menu',show && 'show'))}>
            <ul className={(cx('menu_list'))}>

                {listMenu.map((item, index) => (
                    <li className={(cx('menu-item'))} key={index}>
                        <a href={item.path}>{item.title}</a>
                    </li>
                ))}
               
            </ul>
        </div>
        <div className={(cx('overlay'))}  onClick={handlerMenu}></div>
    </header>
}

export default Header;