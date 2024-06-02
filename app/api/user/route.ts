import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
// export async function GET() {
//   const user = await client.user.findFirst();
//   return NextResponse.json({
//     name: user?.name,
//     password: user?.password,
//   });
// }
export async function POST(req: NextRequest) {
  const { name, password } = await req.json();
  console.log({ name, password }, "password");
  await client.user.create({
    data: {
      name,
      password,
    },
  });
  return NextResponse.json({
    message: "you are logged in ",
  });
}
