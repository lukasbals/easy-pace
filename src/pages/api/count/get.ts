import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const count = await kv.get<number>("sayHelloCount");

  if (count) {
    res.status(200).json({ count });
  } else {
    res.status(200).json({ count: 0 });
  }
};

export default handler;
