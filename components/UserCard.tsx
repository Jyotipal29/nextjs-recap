// this react way of fetching the data

// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// type Address = {
//   city: string;
//   houseNumber: string;
//   state: string;
// };
// type User = {
//   name: string;
//   email: string;
//   address: Address;
// };
// export function UserComponent() {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const getData = async () => {
//     try {
//       setIsLoading(true);
//       const res = await axios.get(
//         "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
//       );

//       setUser(res?.data);
//       setIsLoading(false);
//     } catch (err) {
//       setIsLoading(false);

//       console.log(err);
//     }

//     // console.log(res, "res ");
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   console.log(user, "user");

//   if (isLoading) {
//     return <div>Loading.....</div>;
//   }

//   return (
//     <div className="border border-gray-400 max-w-[400px] mx-auto flex flex-col px-2 py-4">
//       <p>{user?.name}</p>
//       <p>{user?.email}</p>
//     </div>
//   );
// }

// next way of fetching the data

import axios from "axios";
import client from "@/db";

async function fetchData() {
  const user = await client.user.findFirst();
  console.log(user, "user");
}
const getUser = async () => {
  //   await new Promise((r) => setTimeout(r, 5000));
  const res = await axios.get("http://localhost:3000/api/user");
  console.log(res, "res");
  return res?.data;
};

export async function UserComponent() {
  await fetchData();
  // const user = await getUser();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        {/* <div className="border p-8 rounded">
          <div>Name: {user?.email}</div>

          {user?.password}
        </div> */}
      </div>
    </div>
  );
}
