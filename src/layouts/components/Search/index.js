import { useEffect, useRef, useState } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames/bind'
import styles from './Search.module.scss'

import { search } from '~/services/searchSevice'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import { SearchIcon } from '~/components/Icons'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

function Search() {
    const [valueSearch, setValueSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const searchRef = useRef()

    const debounce = useDebounce(valueSearch, 800)

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([])
            return
        } else {
            setLoading(true)

            const fetchApi = async () => {
                const data = await search(debounce)
                setSearchResult(data)
                setLoading(false)
            }

            fetchApi()
        }
    }, [debounce])

    const handleClear = () => {
        searchRef.current.focus()
        setSearchResult([])
        setValueSearch('')
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const valueSearch = e.target.value
        if (!valueSearch.startsWith(' ')) {
            setValueSearch(valueSearch)
        }
    }

    return (
        // Fix warning tippy
        <div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0 && showResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={searchRef}
                        value={valueSearch}
                        onChange={handleChange}
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        onFocus={() => setShowResult(true)}
                    />
                    {valueSearch && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search
