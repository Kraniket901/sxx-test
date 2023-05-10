import prisma from "../../prisma/prisma";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const type = req.body.type
    const city = req.body.city;
    const phone = req.body.phone;
    const topic = req.body.topic;
    const feedback = req.body.feedback;

    const data = await prisma.form.create({
      data: {
        name: name,
        type: type,
        city: city,
        phone: phone,
        topic: topic,
        feedback: feedback,
      },
    });
    res.status(201).json(data);
  }
}
