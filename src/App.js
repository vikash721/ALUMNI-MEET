import './App.css';
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
      path: "/test",
      element: <Post />,
    },
  ]);

  return (
    <div className='app-container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
