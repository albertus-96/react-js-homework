import { useEffect, useState } from "react";
import { User } from "../entites/User";
import Form from "./Form";
import Profile from "./Profile";

function Board(props) {
  const [board, setBoard] = useState([
    new User("John Doe", 18, "john.doe@mail.com"),
    new User("John Cena", 30, "cantseeme@gmail.com"),
  ]);

  // // useEffect(() => {
  // //     setGroceries(state => ({ ...state, groceries: ["Milk", "Coffe"] }));
  // // }, [groceries]);

  console.log("board", board);

  const handleAddUser = (newUser) => {
    setBoard([...board, newUser]);
  };

  const handleRemoveUser = (profile) => {
    const currentBoard = board;
    setBoard(board.filter((it) => it.name != profile.name));
  };

  return (
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Age
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {board.map((it, key) => {
              return <Profile {...it} remove={handleRemoveUser} id={key} />;
            })}
          </tbody>
        </table>
      </div>
      <Form submit={handleAddUser} />
    </div>
  );
}

export default Board;
