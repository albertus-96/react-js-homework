import { useState } from "react";
import { User } from "../entites/User";

function Form(props) {
  const [newUser, setNewUser] = useState(new User("", 0, ""));

  const handleChangeName = (e) => {
    setNewUser({ ...newUser, name: e });
  };

  const handleChangeAge = (e) => {
    setNewUser({ ...newUser, age: parseInt(e) });
  };

  const handleChangeEmail = (e) => {
    setNewUser({ ...newUser, email: e });
  };

  const handleSubmit = (e) => {
    props.submit(newUser);
    setNewUser(new User("", 0, ""));
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 justify-center">
        <div className="grid grid-cols-3 gap-2 border border-gray-200 p-2 rounded">
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <svg
              className="fill-current text-gray-800 mr-2 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className="heroicon-ui"
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter name here..."
              value={newUser.name}
              onChange={(e) => handleChangeName(e.target.value)}
              className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
            />
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="mr-2 w-5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              />
            </svg>
            <input
              type="number"
              value={newUser.age}
              onChange={(e) => handleChangeAge(e.target.value)}
              placeholder="Enter age here..."
              className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
            />
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="mr-2 w-5 h-6 w-6"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter email here..."
              value={newUser.email}
              onChange={(e) => handleChangeEmail(e.target.value)}
              className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="p-2 border w-1/4 rounded-md bg-gray-800 text-white"
            value="Submit"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
