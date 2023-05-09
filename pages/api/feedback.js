import prisma from "../../prisma/prisma";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const city = req.body.city;
    const phone = req.body.phone;
    const topic = req.body.topic;
    const feedback = req.body.feedback;

    const feed = await prisma.feedback.create({
      data: {
        name: name,
        city: city,
        phone: phone,
        topic: topic,
        feedback: feedback,
      },
    });
    res.status(201).json(feed);
  }
}
