import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import { Modal, Button, Row} from "@nextui-org/react";
import React from "react";
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

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
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
      <Button size="sm" onPress={handler} style={{zIndex:"1"}} color="secondary">
          <AiOutlineDownload
              style={{
                fontSize: "30px",
                margin:"0 0.5rem 0 0",
                cursor: "pointer",
              }}
            />Download
      </Button>
        <AiFillEye
          style={{
            fontSize: "30px",
            margin: "0 0.3rem",
          }}
          color="#FFFFFF"
        />
        <div>{views}</div>
      </div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body>
          <Row justify="center">
            <a style={{textDecoration:"none"}} href="https://dl.dropboxusercontent.com/s/r9r6czs4sszdhsm/Attack%20On%20Titan%20S4%20P3%20Hindi%20Dub.mkv?dl=0" download="Attack on Titans Hindi Dub"><Button size="md" color="secondary">Download in Low Quality</Button></a>
          </Row>
          <Row justify="center">
            <a style={{textDecoration:"none"}} href="https://dl.dropboxusercontent.com/s/amzl5315swc4en5/Attack%20On%20Titans%20S4%20P3%20Hindi%20Dub%20Full%20HD.mov?dl=0" download="Attack on Titans Hindi Dub"><Button size="md" color="secondary">Download in High Quality</Button></a>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default LikeButton;
