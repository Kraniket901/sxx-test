import { useState } from "react";
import { AiFillLike } from 'react-icons/ai';

function LikeButton() {
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);
   return (
      <button
         className={`like-button ${liked ? 'liked' : ''}`}
         onClick={() => {
            setLikes(likes + 1);
            setLiked(true);
         }}
      >
        <AiFillLike/> {likes}
      </button>
   );
}
export default LikeButton;