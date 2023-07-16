import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const count = await kv.get<number>("sayHelloCount");

  if (count) {
    await kv.set("sayHelloCount", count + 1);
    res.status(200).end();
  }
  res.end();
};

export default handler;
