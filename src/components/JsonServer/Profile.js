import { useEffect, useState } from "react";

function Profile(props) {
  const [profile, setProfile] = useState(props);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setProfile(props);
  }, [props]);

  const handleChangeName = (e) => {
    setProfile({ ...profile, name: e });
  };

  const handleChangeAge = (e) => {
    setProfile({ ...profile, age: parseInt(e) });
  };

  const handleChangeEmail = (e) => {
    setProfile({ ...profile, email: e });
  };

  const removeProfile = (e) => {
    props.remove(profile);
    e.preventDefault();
  };

  const editProfile = (e) => {
    setIsEditing((isEditing) => !isEditing);
  };

  const saveProfile = (e) => {
    setIsEditing((isEditing) => !isEditing);
    props.update(profile);
    e.preventDefault();
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-300 bg-gray-500 text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={`https://picsum.photos/id/${props.id}/160`}
              alt=""
            />
          </div>
          <div className="ml-3">
            {isEditing ? (
              <p>
                <input
                  type="text"
                  placeholder="Enter name here..."
                  value={profile.name}
                  onChange={(e) => handleChangeName(e.target.value)}
                  className="bg-gray-200 max-w-full focus:outline-none text-gray-700"
                />
              </p>
            ) : (
              <p className="text-gray-200 whitespace-no-wrap">{profile.name}</p>
            )}
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-300 bg-gray-500 text-sm">
        {isEditing ? (
          <input
            type="number"
            value={profile.age}
            onChange={(e) => handleChangeAge(e.target.value)}
            placeholder="Enter age here..."
            className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
          />
        ) : (
          <p className="text-gray-200 whitespace-no-wrap">{profile.age}</p>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-300 bg-gray-500 text-sm">
        {isEditing ? (
          <input
            type="text"
            placeholder="Enter email here..."
            value={profile.email}
            onChange={(e) => handleChangeEmail(e.target.value)}
            className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
          />
        ) : (
          <p className="text-gray-200 whitespace-no-wrap">{profile.email}</p>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-300 bg-gray-500 text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight mr-4">
          {isEditing ? (
            <span>
              <span
                aria-hidden
                className="absolute inset-0 bg-green-500 opacity-70  rounded-full"
              ></span>
              <span
                className="relative cursor-pointer text-gray-200"
                onClick={saveProfile}
              >
                Done
              </span>
            </span>
          ) : (
            <span>
              <span
                aria-hidden
                className="absolute inset-0 bg-blue-500 opacity-70 rounded-full "
              ></span>
              <span
                className="relative cursor-pointer text-gray-200 "
                onClick={editProfile}
              >
                Edit
              </span>
            </span>
          )}
        </span>
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-200 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-red-500 rounded-full opacity-70"
          ></span>
          <span className="relative cursor-pointer" onClick={removeProfile}>
            Remove
          </span>
        </span>
      </td>
    </tr>
  );
}

export default Profile;
