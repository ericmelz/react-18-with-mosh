import { BsFillCalendarFill } from "react-icons/bs";
import {useState} from "react";

interface Props {
    onClick: () => void;
}

function Like({onClick} : Props) {
    const [liked, setLiked] = useState(false);
    const color = liked ? 'red' : 'blue';
    const likeOnClick = () => {
        onClick();
        console.log('likey ' + liked);
        setLiked(!liked);
    }
    return <div>
        <BsFillCalendarFill color={color} size="100" onClick={likeOnClick}/>
    </div>
}

export default Like;