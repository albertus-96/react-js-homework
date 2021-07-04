import { useEffect, useState } from "react";

function Profile(props) {
  const [profile, setProfile] = useState(props);

  useEffect(() => {
    setProfile(props);
  }, [props]);

  const removeProfile = (e) => {
    props.remove(profile);
    e.preventDefault();
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={`https://picsum.photos/id/${props.id}/160`}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{profile.name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{profile.age}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{profile.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {/* <span className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight mr-4">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative cursor-pointer" onClick={editProfile}>
            Edit
          </span>
        </span> */}
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
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
