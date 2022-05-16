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

import Button from '~/components/Button'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'

import Menu from '~/components/Popper/Menu'
import { MailboxIcon, MessageIcon, UploadIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '../Search'

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

	const handleChange = menuItem => {
		console.log(menuItem)
	}

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img src={images.logo} alt="Tiktok" />
				</div>

				{/* Search */}

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
								src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7097043581436690438~c5_100x100.jpeg?x-expires=1652598000&x-signature=Xw5vv5jBDAHOSfOKZN7gnRE26dE%3D"
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
