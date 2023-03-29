import Pages from '../page/index'
const TRANG_CHU = "/"
const CHUYEN_KHOA = "/chuyen-khoa"
const CO_SO_Y_TE = "/co-so-y-te"
const BAC_SY = "/bac-sy"
const GOI_KHAM = "/goi-kham"
const HO_TRO = "/ho-tro"



const RouterWeb = [
    { id: 1, path: TRANG_CHU, component: <Pages.Homepage /> },
    {
        id: 2, path: CHUYEN_KHOA, component: <Pages.DepartMentTotal />,
        child: [
            {
                path: '',
                component: <Pages.Department />,
            },
            {
                path: ':id',
                component: <Pages.DepartmentDetail />,
            },
        ],
    },
    { id: 3, path: CO_SO_Y_TE, component: <Pages.HealthFacilities /> },
    { id: 4, path: BAC_SY, component: <Pages.Doctor /> },
    { id: 5, path: GOI_KHAM, component: <Pages.ExaminationPackage /> },
    { id: 6, path: HO_TRO, component: <Pages.Support /> },
]

export default RouterWeb