import prisma from "../../prisma/prisma";

export default async function handler(req, res) {
  const data = await prisma.view.findUnique({
    where: {
      id: "645bb9acf39706824d4ebb02",
    },
  });
  if (req.method === "POST") {
    const newCount = data.count + 1;
    await prisma.view.update({
      where: {
        id: "645bb9acf39706824d4ebb02",
      },
      data: {
        count: newCount,
      },
    });
    res.json({ success: "true" });
  } else {
    res.json(data);
  }
}
