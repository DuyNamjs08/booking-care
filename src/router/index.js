import Pages from '../page/index'
const TRANG_CHU = "/"
const DICH_VU = "/dich-vu"
const LICH_SU = "/lich-su"
const DANH_SACH_BENH_NHAN = "/danh-sach-benh-nhan"
const QUAN_LY = "/quan-ly"
const QUAN_LY_TK = "/tai-khoan"
const BENH_NHAN = "/benh-nhan"
const DON_THUOC = "/don-thuoc"



const RouterWeb = [
    { id: 1, path: TRANG_CHU, role: ['1', '2', '3'], component: <Pages.Homepage /> },
    {
        id: 2, path: DICH_VU, component: <Pages.DepartMentTotal />,
        role: ['1', '2', '3'],
        child: [
            {
                path: '',
                component: <Pages.Department />,
            },
            {
                path: '/dich-vu/co-xuong-khop',
                component: <Pages.Bond />,
            },
            {
                path: ':id',
                component: <Pages.DepartmentDetail />,
            },
        ],
    },
    {
        id: 3, path: LICH_SU, role: ['1', '2', '3'], component: <Pages.BillTotals />, child: [
            {
                path: '',
                component: <Pages.ManagerBills />,
            },
            {
                path: ':id',
                component: <Pages.ViewBills />,
            },
        ],
    },
    {
        id: 4, path: DANH_SACH_BENH_NHAN, role: ['1', '2'], component: <Pages.PatientsTotal />, child: [
            {
                path: '',
                component: <Pages.ManagerPatients />,
            },
            {
                path: ':id',
                component: <Pages.ViewPatients />,
            },
        ],
    },
    {
        id: 5, path: QUAN_LY, role: ['1', '2'], component: <Pages.Doctor />,
        child: [
            {
                path: '',
                component: <Pages.ManagerDoctor />,
            },
            {
                path: ':id',
                component: <Pages.ViewDoctor />,
            },
        ],
    },
    {
        id: 6, path: QUAN_LY_TK, role: ['1',], component: <Pages.Account />,
        child: [
            {
                path: '',
                component: <Pages.ExaminationPackage />,
            },
            {
                path: ':id',
                component: <Pages.ViewAccount />,
            },
        ],
    },
    { id: 7, role: ['1', '2'], path: BENH_NHAN, component: <Pages.Support /> },
    { id: 8, path: DON_THUOC, role: ['3'], component: <Pages.Pamacy /> },
]

export default RouterWeb