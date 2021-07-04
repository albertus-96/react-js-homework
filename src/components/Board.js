import { useState } from "react";
import { User } from "../entites/User";
import Form from "./Form";
import Profile from "./Profile";

function Board() {
  const [board, setBoard] = useState([
    new User("John Doe", 18, "john.doe@mail.com"),
    new User("John Cena", 30, "cantseeme@gmail.com"),
  ]);

  const handleAddUser = (newUser) => {
    setBoard([...board, newUser]);
  };

  const handleRemoveUser = (profile) => {
    setBoard(board.filter((it) => it.name !== profile.name));
  };

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Age
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {board.map((it, key) => {
              return (
                <Profile {...it} remove={handleRemoveUser} id={key} key={key} />
              );
            })}
          </tbody>
        </table>
      </div>
      <Form submit={handleAddUser} />
    </div>
  );
}

export default Board;
