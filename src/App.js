import './App.css';
import AlumniProfile from './pages/alumni_profile/AlumniProfile';
import College from './pages/college/Collegepage';
import CollegeProfile from './pages/college_profile/CollegeProfile';
import Home from './pages/homepage/Home';
import SignUpPage from './pages/signup/SingnUpPage';
import Post from './components/Post/post';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUpPage/>,
    },
    {
      path: "/pages/home",
      element: <Home />,
    },
    {
      path: "/pages/college",
      element: <College />,
    },
    {
      path: "/college/:collegeId", // Dynamic route for each college profile
      element: <CollegeProfile />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
<<<<<<< HEAD
      path: "/pages/alumni",
      element: <AlumniProfile/>,
=======
      path: "/test",
      element: <Post />,
>>>>>>> cbbfab7f1fb26bef86e8d235af16dfecba65e701
    },
  ]);

  return (
    <div className='app-container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
