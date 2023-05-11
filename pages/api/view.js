import prisma from "../../prisma/prisma";

export default async function handler(req, res) {
  const data = await prisma.view.findUnique({
    where: {
      id: "645d1920116c79358d5482d8",
    },
  });
  if (req.method === "POST") {
    const newCount = data.count + 1;
    await prisma.view.update({
      where: {
        id: "645d1920116c79358d5482d8",
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
