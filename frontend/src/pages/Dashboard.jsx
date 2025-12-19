import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const fetchProfile = async () => {
    const res = await api.get("/user/profile");
    setUser(res.data);
  };

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchProfile();
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome{user ? `, ${user.name}` : ""}
            </h1>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form onSubmit={addTask} className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Add a new task..."
              className="flex-1 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-xl">
              Add
            </button>
          </form>

          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full border rounded-xl px-4 py-2 mb-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <ul className="space-y-3">
            {tasks
              .filter((t) =>
                t.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((task) => (
                <li
                  key={task._id}
                  className="flex justify-between items-center bg-gray-50 border rounded-xl px-4 py-3 hover:shadow transition"
                >
                  <span>{task.title}</span>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>

          {tasks.length === 0 && (
            <p className="text-center text-gray-400 mt-6">
              No tasks yet — add one above ✨
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



