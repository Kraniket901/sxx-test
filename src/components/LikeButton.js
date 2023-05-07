import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";

function LikeButton({ vidId }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const { data: session } = useSession();
  // console.log(session);

  useEffect(() => {
    axios
      .get("/api/like")
      .then(res => res.data)
      .then(res => res.filter(item => item.id === vidId))
      // .then(res => res.likes)
      .then(res => {
        res = res[0];
        const { likes } = res;
        if (session) {
          const userHasLiked = likes.find(user => user === session?.user.email);
          console.log(userHasLiked);
          if (userHasLiked) {
            setLiked(true);
          }
        }
        setLikes(likes.length);
      });
  }, [session]);

  const handleLike = () => {
    if (session) {
      if (!liked) {
        setLikes(likes + 1);
        setLiked(true);
        fetch("/api/like", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
            vidId: vidId,
          }),
        })
          .then(res => {
            //do something awesome that makes the world a better place
          })
          .catch(err => {
            // catch them errors
            console.log(err);
          });
      }
    } else {
      signIn("google");
    }
  };
  return (
    <button
      className={`like-button ${liked ? "liked" : ""}`}
      onClick={handleLike}
    >
      <AiFillHeart /> {likes}
    </button>
  );
}
export default LikeButton;
