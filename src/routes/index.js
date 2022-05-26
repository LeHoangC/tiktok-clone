import routesConfig from '~/config/routes'
import { HeaderOnly } from '~/components/Layouts'

import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Uploadcopy from '~/pages/Uploadcopy'

const publicRoutes = [
    { path: routesConfig.home, components: Home },
    { path: routesConfig.profile, components: Profile },
    { path: routesConfig.upload, components: Upload, layout: HeaderOnly },
    { path: routesConfig.uploadcopy, components: Uploadcopy, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
