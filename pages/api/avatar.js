import prisma from "../../prisma/prisma";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const img = req.body.img;
    const updateAvatar = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        image: img,
      },
    });
    res.status(201).json(updateAvatar);
  }
}
