import Society from '../../views/society/society'
import SocietyDetail from '../../views/society/societyDetail'

const routes = [
  {
    path: '/society',
    name: 'Society',
    component: Society
  },
  {
    path: '/societyDetail',
    name: 'SocietyDetail',
    component: SocietyDetail
  }
]

export default routes
