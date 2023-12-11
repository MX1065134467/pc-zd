import Journalism from '../../views/journalism/journalism.vue'
import JournalismDetail from '../../views/journalism/journalismDetail.vue'

const routes = [{
  path: '/journalism',
  name: 'journalism',
  component: Journalism
},
{
  path: '/journalismDetail',
  name: 'journalismDetail',
  component: JournalismDetail
}
]

export default routes
