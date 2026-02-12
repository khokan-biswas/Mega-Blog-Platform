import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
// import { login } from './store/authSlice.js'
// import Signup from './pages/Signup.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import { RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import Post from './pages/Post.jsx'
import SchoolLogin from './pages/school/school_login.jsx'
import StudentAttendance from './pages/school/school_attendance.jsx'
import StudentGrades from './pages/school/school_grades.jsx'
import StudentProfile from './pages/school/school_profile.jsx'
import StudentNotice from './pages/school/school_notice.jsx'
import StudentDashboard from './pages/school/school_desbord.jsx'
import StudentClasses from './pages/school/school_classes.jsx'
import StudentList from './pages/school/school_students.jsx'
import NoticeViewPage from './pages/school/school_notice_view.jsx'
import AdminDashboard from './pages/school/schoolH_desbord.jsx'
import TeacherList from './pages/school/schoolH_techerlist.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,   
            },
            {
                path: "/login",
                element: <AuthLayout authentication={false}>   
                    <Login />
                </AuthLayout>,
            },
            {
                path: "/signup",
                element: <AuthLayout authentication={false}>   
                    <Signup />
                </AuthLayout>,
            },
            {
                path: "/all-posts",
                element: <AuthLayout authentication={true}>   
                    <AllPost />
                </AuthLayout>,
            },
            {
                path: "/add-post",
                element: <AuthLayout authentication={true}>   
                    <AddPost/>
                </AuthLayout>,
            },
            {
                path: "/edit-post/:slug",
                element: <AuthLayout authentication={true}>   
                    <EditPost/>
                </AuthLayout>,

            },
            {
                path: "/posts/:id",
                element: <Post/>,
            },
            {
                path: "/school",
                // element: <StudentAttendance/>,
                // element: <StudentDashboard/>,
                // element: <StudentGrades/>,
                // element: <SchoolLogin/>,
                // element: <StudentNotice/>,
                // element: <StudentProfile/>,
                // element: <StudentClasses/>,
                // element: <StudentList/>,
                // element: <NoticeViewPage/>,
                element: <AdminDashboard/>, 
                // element: <TeacherList/>,
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />     
    </Provider>
)
