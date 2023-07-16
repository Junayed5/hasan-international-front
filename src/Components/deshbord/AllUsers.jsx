import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { API_BASE_URL } from "../../api/api";

const AllUsers = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  const [{ users }, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/v1/user`);
        // console.log(response.data); // Log the response data
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leadi">Contacts</h2>
      <div className="overflow-x-auto"></div>
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <thead>
          <tr className="dark:bg-gray-700">
            <th className="p-3">SL</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Address</th>
          </tr>
        </thead>
        <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">

          {users===undefined ? '' : users.map((user, i) => (
              <tr key={i}>
                <td className="px-3 font-medium dark:text-gray-400">
                {i + 1}
                </td>
                <td className="px-3 py-2">
                  <p>{user?.name}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{user?.email}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{user?.phone}</p>
                </td>
                <td className="px-3 py-2">
                  <p>71 Cherry Court, SO</p>
                  <p className="dark:text-gray-400">United Kingdom</p>
                </td>
                <td className="px-3 py-2">
                  {/* <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button> */}
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
