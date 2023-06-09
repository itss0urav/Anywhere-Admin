import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await axios.get("http://localhost:5000/user");
    response && setUsers(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    getUsers();
  }, []);

  async function deleteUser(id) {
    try {
      console.log("first");
      const response = await axios.delete(`http://localhost:5000/user/${id}`);
      response && getUsers();
    } catch (err) {
      console.log(err);
    }
  }

  async function makeModerator(userObj) {
    const response = await axios.post(
      "http://localhost:5000/moderator",
      userObj
    );
    response && getUsers();
  }
  async function deModUser(userObj) {
    const response = await axios.delete(
      `http://localhost:5000/moderator/${userObj?.email}`
    );
    response && getUsers();
  }

  async function banUnBanUser({ userId, banStatus }) {
    const response = await axios.patch("http://localhost:5000/user", {
      userId,
      isBanned: banStatus,
    });
    response && getUsers();
  }
  return (
    <>
      <section className="container h-screen px-4 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-medium text-white dark:text-white">
              Users
            </h2>
            <p className="mt-1 text-sm text-gray-300 dark:text-gray-300">
              Entire list of users
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Username</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email
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
                        Role
                      </th>
                      <th
                        scope="col"
                        className="text-left px-20 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {users.map((person) => (
                      <tr key={person.name}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.username}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                                {/* {person.email} */}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.email}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.department}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              person.isBanned
                                ? "bg-red-200 text-red-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {person.isBanned ? "Banned" : "Active"}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {person.role}
                        </td>
                        <td className="px-4 flex gap-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => deleteUser(person._id)}
                            className="text-white bg-red-500 rounded px-3 py-1 hover:bg-red-600 "
                          >
                            Delete
                          </button>
                          <button
                            onClick={() =>
                              banUnBanUser({
                                userId: person._id,
                                banStatus: !person.isBanned,
                              })
                            }
                            className="text-white bg-red-500 rounded px-3 py-1 hover:bg-red-600"
                          >
                            {person.isBanned ? "Unban" : "Ban"}
                          </button>
                          <button
                            className="text-white bg-blue-500 rounded px-3 py-1 hover:bg-blue-600"
                            onClick={() => {
                              person?.role === "moderator"
                                ? deModUser({ email: person?.email })
                                : makeModerator({ email: person?.email });
                            }}
                          >
                            {person?.role === "moderator"
                              ? "Remove Mod"
                              : "Make mod"}
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
      </section>
    </>
  );
};

export default Users;
