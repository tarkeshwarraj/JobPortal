import { useState } from 'react'
import {Route, Routes, useMatch} from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/students/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/students/Navbar'

function App() {

  const isEducatorRoute = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute &&  <Navbar />} {/*in Educator page the navbar will hide. This navbar will show by default in all page.*/}
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />}/>
        <Route path='/course-list/:input' element={<CoursesList />}/>
        <Route path='/course/:id' element={<CourseDetails />}/>
        <Route path='/my-enrollments' element={<MyEnrollments />}/>
        <Route path='/player/:courseId' element={ <Player />}/>
        <Route path='/loading/:path' element={ <Loading />}/>
        <Route path='/educator' element={ <Educator />}>
          <Route path='educator' element={<Dashboard/>} />
          <Route path='add-course' element={<AddCourse/>} />
          <Route path='my-courses' element={<MyCourses/>} />
          <Route path='student-enrolled' element={<StudentsEnrolled/>} />
        </Route>
       </Routes>
    </div>
  )
}

export default App
