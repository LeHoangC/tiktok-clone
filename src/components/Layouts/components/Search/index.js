import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Search() {
	const [searchResult, setSearchResult] = useState([])
	const [valueSearch, setValueSearch] = useState('')
	const [showResult, setShowResult] = useState(true)

	const searchRef = useRef()

	useEffect(() => {
		setSearchResult([1, 2, 3])
	}, [])

	const handleClear = () => {
		searchRef.current.focus()
		setSearchResult([])
		setValueSearch('')
	}

	const handleHideResult = () => {
		setShowResult(false)
	}

	return (
		<HeadlessTippy
			interactive
			visible={searchResult.length > 0 && showResult}
			render={attrs => (
				<div className={cx('search-result')} tabIndex="-1" {...attrs}>
					<PopperWrapper>
						<h4 className={cx('search-title')}>Tài khoản</h4>
						<AccountItem />
						<AccountItem />
						<AccountItem />
					</PopperWrapper>
				</div>
			)}
			onClickOutside={handleHideResult}>
			<div className={cx('search')}>
				<input
					ref={searchRef}
					value={valueSearch}
					onChange={e => setValueSearch(e.target.value)}
					placeholder="Tìm kiếm tài khoản và video"
					spellCheck={false}
					onFocus={() => setShowResult(true)}
				/>
				{valueSearch && (
					<button className={cx('clear')} onClick={handleClear}>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				)}
				<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

				<button className={cx('search-btn')}>
					<SearchIcon />
				</button>
			</div>
		</HeadlessTippy>
	)
}

export default Search
