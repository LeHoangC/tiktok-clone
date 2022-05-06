import { HeaderOnly } from '~/components/Layout'

import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Uploadcopy from '~/pages/Uploadcopy'

const publicRoutes = [
	{ path: '/', components: Home },
	{ path: '/profile', components: Profile },
	{ path: '/upload', components: Upload, layout: HeaderOnly },
	{ path: '/uploadcopy', components: Uploadcopy, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
