import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function Home(props) {
  //   const [profile, setProfile] = useState(props);
  //   const [isEditing, setIsEditing] = useState(false);

  //   useEffect(() => {
  //     setProfile(props);
  //   }, [props]);

  //   const handleChangeName = (e) => {
  //     setProfile({ ...profile, name: e });
  //   };

  //   const handleChangeAge = (e) => {
  //     setProfile({ ...profile, age: parseInt(e) });
  //   };

  //   const handleChangeEmail = (e) => {
  //     setProfile({ ...profile, email: e });
  //   };

  //   const removeProfile = (e) => {
  //     props.remove(profile);
  //     e.preventDefault();
  //   };

  //   const editProfile = (e) => {
  //     setIsEditing((isEditing) => !isEditing);
  //   };

  return (
    <div class="bg-gray-800 h-screen w-screen">
      <div class="flex flex-col items-center flex-1 h-full text-gray-500 justify-center px-4 sm:px-0">
        <div
          class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-gray-900 sm:mx-0"
          //   style="height: 500px"
        >
          <div class="flex flex-col w-full md:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="text-4xl text-center font-thin">Welcome Back</h1>
              <div class="w-full mt-4">
                <form
                  class="form-horizontal w-3/4 mx-auto"
                  method="POST"
                  action="#"
                >
                  <div class="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      class="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      value=""
                      placeholder="Email"
                    />
                  </div>
                  <div class="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      class="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="password"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div class="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      class="mr-2"
                    />{" "}
                    <label for="remember" class="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div>
                  <div class="flex flex-col mt-8">
                    <button
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                  <a
                    class="no-underline hover:underline text-blue-dark text-xs"
                    href={"/online"}
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden md:block md:w-1/2 rounded-r-lg bg-login-image bg-center bg-cover"
            // style="background: url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'); background-size: cover; background-position: center center;"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
