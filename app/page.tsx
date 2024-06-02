import { UserComponent } from "@/components/UserCard";
import client from "@/db";

const getData = async () => {
  const res = await client.user.findFirst();
  console.log(res, "res");
  return res;
};
export default async function Home() {
  const user = await getData();
  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.password}</p>
      {/* <UserComponent /> */}
    </div>
  );
}
