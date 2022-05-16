import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function AccountItem() {
	return (
		<div className={cx('wrapper')}>
			<Image className={cx('avatar')} src="" alt="hoangcuong" />
			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span>Nguyễn văn a</span>
					<FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
				</h4>
				<span className={cx('username')}>nguyenvana</span>
			</div>
		</div>
	)
}

export default AccountItem
