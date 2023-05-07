import axios from "axios";
import React, { useEffect, useState } from "react";

const VerificationRequests = () => {
  const [requests, setRequests] = useState([]);
  const [updateToggler, setUpdateToggler] = useState(false);
  const approveRequest = async function ({id, userId}) {
    const updateObj = {
      _id: id,
      isApproved: true,
    };
    const response = await axios.patch(
      "http://localhost:5000/verification",
      updateObj
    );
    response && getRequets();

    await axios.patch("http://localhost:5000/user",{
      userId,
      isVerified:true
    })
  };

  const getRequets = async function () {
    const response = await axios.get("http://localhost:5000/verification");
    response &&
      setRequests(
        response.data.filter((request) => request.isApproved !== true)
      );
    console.log(response.data);
  };
  useEffect(() => {
    getRequets();
  }, []);

  return (
    <div>
      <section className="container px-4 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-white dark:text-white">
              Verification Requests
            </h2>
            <p className="mt-1 text-sm text-gray-300 dark:text-gray-300">
              This is a list of all the verification requests from the users.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Email</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Company
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Document
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {requests.map((person) => (
                      <tr
                        key={person.name}
                        className="divide-x divide-gray-200"
                      >
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.website}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.company}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <a
                            href={person.governmentId}
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            See document
                          </a>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          <button
                            onClick={() => approveRequest({id:person._id, userId:person?.userId})}
                            className="px-3 py-0.5 border-indigo-600 border text-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
                          >
                            Approve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6"></div>
      </section>
    </div>
  );
};

export default VerificationRequests;
