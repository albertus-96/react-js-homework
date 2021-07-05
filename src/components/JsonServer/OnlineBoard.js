import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../../entites/User";
import Form from "../Form";
import Profile from "./Profile";

function OnlineBoard() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    axios
      .get(`http://localhost:3000/users/`)
      .then((res) => {
        const result = res.data.map(
          (x) => new User(x.id, x.name, x.age, x.email)
        );
        setBoard(result);
      })
      .catch((err) => console.error(err));
  };

  const handleAddUser = (newUser) => {
    axios
      .post(`http://localhost:3000/users`, newUser)
      .then((res) => {
        if (res.status === 201) setBoard([...board, res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateUser = (profile) => {
    axios
      .patch(`http://localhost:3000/users/${profile.id}`, profile)
      .then((res) => {
        if (res.status === 200) {
          const prevState = board;
          const targetUpdate = board.findIndex((x) => x.id === profile.id);
          prevState[targetUpdate] = new User(
            res.data.id,
            res.data.name,
            res.data.age,
            res.data.email
          );
          setBoard(prevState);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRemoveUser = (profile) => {
    axios
      .delete(`http://localhost:3000/users/${profile.id}`)
      .then((res) => {
        if (res.status === 200) {
          setBoard(board.filter((it) => it.name !== profile.name));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="text-3xl text-center font-mono font-extrabold">
        USER ONLINE BOARD
      </div>
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
                  <Profile
                    {...it}
                    remove={handleRemoveUser}
                    update={handleUpdateUser}
                    id={it.id}
                    key={key}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <Form submit={handleAddUser} />
      </div>
    </div>
  );
}

export default OnlineBoard;
