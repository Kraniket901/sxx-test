import { useSession, update } from "next-auth/react";
import { useRouter } from "next/router";
const avatar = [
  {
    id: 1,
    name: "Riner",
    img: "https://i.ibb.co/J3FZS9M/Riner.png",
  },
  {
    id: 2,
    name: "Ereh",
    img: "https://i.ibb.co/chMHHvL/Ereh.png",
  },
  {
    id: 3,
    name: "Armin",
    img: "https://i.ibb.co/YcMxkF1/Armin.png",
  },
  {
    id: 4,
    name: "Annie",
    img: "https://i.ibb.co/B3Ry00q/Annie.png",
  },
];

function Avatar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleAvatar = async img => {
    const email = session.user.email;

    const response = await fetch("/api/avatar", {
      method: "POST",
      body: JSON.stringify({ email, img }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => router.reload());

    const data = await response.json();
    console.log(data);
  };

  return (
    <ul>
      {avatar.map(item => (
        <li key={item.id}>
          <button
            onClick={() => {
              handleAvatar(item.img);
            }}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Avatar;
