import campusRecruitment from '../../views/school/campusRecruitment.vue'
import recruitmentDetails from '../../views/school/recruitmentDetails.vue'
import campusRecruitDetail from '../../views/school/campusRecruitDetail.vue'
import recruitmentNotice from '../../views/school/recruitmentNotice.vue'
import growthAndDev from '../../views/school/growthAndDev.vue'
import problem from '../../views/school/problem.vue'
const routes = [{
  path: '/campusRecruitment',
  name: 'campusRecruitment',
  component: campusRecruitment
},
{
  path: '/recruitmentDetails',
  name: 'recruitmentDetails',
  component: recruitmentDetails
},
{
  path: '/campusRecruitDetail',
  name: 'campusRecruitDetail',
  component: campusRecruitDetail
},
{
  path: '/recruitmentNotice',
  name: 'recruitmentNotice',
  component: recruitmentNotice
},
{
  path: '/growthAndDev',
  name: 'growthAndDev',
  component: growthAndDev
},
{
  path: '/problem',
  name: 'problem',
  component: problem
}
]

export default routes
