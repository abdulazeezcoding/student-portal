import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentLoginPage from './pages/student-loginpage';
import StudentSignupPage from './pages/student-signuppage';
import TeacherLoginPage from './pages/teacher-loginpage';
import TeacherSignupPage from './pages/teacher-signuppage';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentLoginPage />} />
      <Route path='/studentsignup' element={<StudentSignupPage /> }/>
      <Route path='/teacherlogin' element={<TeacherLoginPage />} />
      <Route path='/teachersignup' element={<TeacherSignupPage />} />
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
