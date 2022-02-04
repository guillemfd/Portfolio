import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import Page404 from '../pages/404/404'




function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/*" element={<Page404 />} />
        </Routes>
    )
}

export default AppRoutes