import config from '~/config'
import { HeaderOnly } from '~/layouts'

import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Uploadcopy from '~/pages/Uploadcopy'

const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.profile, components: Profile },
    { path: config.routes.upload, components: Upload, layout: HeaderOnly },
    { path: config.routes.uploadcopy, components: Uploadcopy, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
