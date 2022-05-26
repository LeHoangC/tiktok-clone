import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
    faCircleDollarToSlot,
    faGear,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { MailboxIcon, MessageIcon, UploadIcon } from '~/components/Icons'
import Button from '~/components/Button'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Menu from '~/components/Popper/Menu'
import Image from '~/components/Image'
import Search from '../Search'
import routesConfig from '~/config/routes'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt bàn phím',
    },
]

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '@hoangcuong',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: 'setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Đăng xuất',
        to: '/logout',
        borderTop: true,
    },
]

function Header() {
    const currentUser = true

    const handleChange = (menuItem) => {
        console.log(menuItem)
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} placement="bottom" content="Tải video lên">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} placement="bottom" content="Tin nhắn">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} placement="bottom" content="Hộp thư">
                                <button className={cx('action-btn')}>
                                    <MailboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://lh3.googleusercontent.com/ogw/ADea4I5wYM-IVv810F9N1f6WTbWNt1_DkScPeySqfk6jAw=s32-c-mo"
                                alt=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
