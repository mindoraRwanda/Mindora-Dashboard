import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMessage, MdNotificationsNone } from "react-icons/md";

export default function TopBar({ userRole }) {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <header className="bg-white bg-opacity-90 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-purple-600">
          {userRole === "therapist" ? "Therapist Dashboard" : "Admin Dashboard"}
        </h1>

        <div className="flex gap-1">
          {/* This is for langauges */}
          <div class=" text-gray-600 text-xl">
            <select
              id="languageSelect"
              class="form-select p-1 rounded border-2 border-gray-100"
              aria-label="Default select example"
            >
              <option>English</option>
              <option>French</option>
              <option>Kinyarwanda</option>
            </select>
          </div>

          {/* notification and message */}

          <div className="flex items-center">
            {/* Search bar */}
            <div className="flex items-center border rounded bg-white">
              <input
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
                className="p-2 rounded-l outline-none text-black"
              />
              <button
                type="submit"
                title="Search"
                className="p-2 text-xl text-black bg-white rounded-r"
              >
                <FiSearch />
              </button>
            </div>

            {/* Message icon */}
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <MdOutlineMessage className="text-3xl ml-5 text-purple-600" />
            </a>

            {/* Notification icon */}
            <a href="#" data-bs-toggle="dropdown">
              <MdNotificationsNone className="text-3xl ml-5 text-purple-600" />
            </a>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="ml-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
