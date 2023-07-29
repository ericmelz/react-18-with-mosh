import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";

interface Props {
    onClick: () => void;
}

function Like({onClick}: Props) {
    const [liked, setLiked] = useState(false);
    const color = liked ? 'red' : 'blue';
    const likeOnClick = () => {
        onClick();
        setLiked(!liked);
    }
    return liked ?
        <AiFillHeart color={color} size="100" onClick={likeOnClick}/> :
        <AiOutlineHeart color={color} size="100" onClick={likeOnClick}/>;
}

export default Like;