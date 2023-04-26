import React from "react";

const Login = () => {
  return (
    <div>
      <div className="relative">
        <div className="my-4 flex items-center justify-center">
          <div className=" p-1">
            <div className="flex items-center justify-center rounded-md bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                  Sign in
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    title=""
                    className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                    Create a free account
                  </a>
                </p>

                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900">
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="email"
                          placeholder="Email"></input>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900">
                          {" "}
                          Password{" "}
                        </label>

                        <a
                          href="#"
                          title=""
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                          {" "}
                          Forgot password?{" "}
                        </a>
                      </div>
                      <div className="mt-2.5">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="password"
                          placeholder="Password"></input>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                        Get started
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="ml-2 h-4 w-4">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
