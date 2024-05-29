

export default function SignIn() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-green-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">SIGN IN</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <label htmlFor="" className="mr-2 block text-sm text-gray-900">
                  New user?
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-green-600\-600 hover:text-green--500">
                  SIGN UP
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-white group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-.707 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L10 7.414 7.707 9.707a1 1 0 1 1-1.414-1.414l3-3z" clipRule="evenodd" />
                  </svg>
                </span>
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};