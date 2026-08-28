import { useState } from 'react'

function LikeButton () {
    const [likes, setLikes] = useState(0)

    return(
        <button className="like-button" onClick={() => setLikes(likes + 1)}>
            <span className="like-icon">♥</span>
            <span className="like-count">{likes}</span>
        </button>
    );
}

export default LikeButton