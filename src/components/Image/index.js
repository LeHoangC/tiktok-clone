import PropTypes from 'prop-types'
import classNames from 'classnames'
import { forwardRef, useState } from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(({ src, className, fallback = images.noImage, alt, ...props }, ref) => {
    const [_fallBack, setFallback] = useState('')

    const handleError = () => {
        setFallback(fallback)
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={_fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    )
})

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image
