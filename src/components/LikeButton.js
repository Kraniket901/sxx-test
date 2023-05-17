import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";

function LikeButton({ vidId }) {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);
  const { data: session } = useSession();
  // console.log(session);

  useEffect(() => {
    axios
      .get("/api/video")
      .then(res => res.data)
      .then(res => res.filter(item => item.id === vidId))
      // .then(res => res.likes)
      .then(res => {
        res = res[0];
        let { likes } = res;
        likes = [...new Set(likes)];
        if (session) {
          const userHasLiked = likes.find(user => user === session?.user.email);
          // console.log(userHasLiked);
          if (userHasLiked) {
            setLiked(true);
          }
        }
        setLikes(likes.length);
      });
  }, [session, vidId]);

  useEffect(() => {
    axios
      .get("/api/video")
      .then(res => res.data)
      .then(res => res[0].views)
      .then(res => {
        setViews(res);
      });
  }, []);

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
        }).catch(err => {
          // catch them errors
          console.log(err);
        });
      } else {
        setLikes(likes - 1);
        setLiked(false);
        fetch("/api/unlike", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
            vidId: vidId,
          }),
        }).catch(err => {
          // catch them errors
          console.log(err);
        });
      }
    } else {
      signIn("google");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <button
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={handleLike}
        style={{ margin: "1rem" }}
      >
        <AiFillHeart /> {likes}
      </button>

      <div style={{ display: "flex", alignItems: "center", margin: "1rem" }}>
        <AiFillEye
          style={{
            fontSize: "30px",
            margin: "0 0.3rem",
          }}
          color="#FFFFFF"
        />
        <div>{views}</div>
      </div>
    </div>
  );
}
export default LikeButton;
