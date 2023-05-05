import { useState } from "react";
import { AiFillHeart } from 'react-icons/ai';

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
        <AiFillHeart/> {likes}
      </button>
   );
}
export default LikeButton;