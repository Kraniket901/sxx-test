import prisma from "../../prisma/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
  } else {
    const data = await prisma.video.findMany();
    res.json(data);
  }
}
