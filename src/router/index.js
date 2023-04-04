import Pages from '../page/index'
const TRANG_CHU = "/"
const CHUYEN_KHOA = "/chuyen-khoa"
const DON_THUOC = "/don-thuoc"
const BAC_SY = "/bac-sy"
const GOI_KHAM = "/goi-kham"
const BENH_NHAN = "/benh-nhan"



const RouterWeb = [
    { id: 1, path: TRANG_CHU, role:['1','2','3'], component: <Pages.Homepage /> },
    {
        id: 2, path: CHUYEN_KHOA, component: <Pages.DepartMentTotal />,
        role:['1' , '2' ,'3'],
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
    { id: 3, path: DON_THUOC, role:['1' , '2' ,'3'], component: <Pages.HealthFacilities /> },
    { id: 4, path: BAC_SY, role:['1' ,], component: <Pages.Doctor /> },
    { id: 5, path: GOI_KHAM, role:['1' , '2' ,'3'], component: <Pages.ExaminationPackage /> },
    { id: 6,role:['1','2'], path: BENH_NHAN, component: <Pages.Support /> },
]

export default RouterWeb