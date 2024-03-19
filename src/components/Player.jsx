import {useState} from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isName, setIsName] = useState(name);

    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required/>
    }


    function handleEditClick(){
        setIsEditing(true)
        // isEditing ? setIsEditing(false) : setIsEditing(true);
        // setIsName()
    }
    return (
        <li>
            <span>
                {/*{!isEditing ? <span className="player-name">{name}</span>*/}
                {/*: <input/>}*/}
                {playerName}

                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ?  "Save"  : "Edit"}</button>
        </li>
    )
};