import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root'); 

export default function SignUp(
  {
    setIsSignUpOpen,
    isSignUpOpen,
    setModalIsOpen
  }) {
    let navigate = useNavigate()

    const openModal = () => {
        setModalIsOpen(true);
        navigate("/login");
      };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  return (
    <div className=" p-10  flex items-center justify-center ">


        <div className="bg-white p-6 rounded-lg shadow-lg  py-10 w-[70vh]">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username:<span className='text-red-500'>*</span>
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:<span className='text-red-500'>*</span>
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:<span className='text-red-500'>*</span>
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="ConfirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                ConfirmPassword:<span className='text-red-500'>*</span>
              </label>
              <input
                required
                type="password"
                id="ConfirmPassword"
                name="ConfirmPassword"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        
        
          <div className="mt-5">
            <p className="text-gray-700">
              You have an account?{' '}
              <button className="font-bold" onClick={()=>navigate("/login")}>
                Sign in
              </button>
            </p>
          </div>
        </div>
    </div>
  );
}
