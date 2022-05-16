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

export default Image
