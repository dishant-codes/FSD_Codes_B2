import React,{useState} from 'react'

function Counter() {
    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false);

    const handleLikes = ()=>{
        if(!isLiked){
            setLikes(likes + 1);
            setIsLiked(true);
        }
        else{
            setLikes(likes - 1);
            setIsLiked(false);
        }
    }
  return (
    <div>
        Likes {likes}
        <br/>
        <button onClick={handleLikes}>❤️</button>
    </div>
  )
}

export default Counter