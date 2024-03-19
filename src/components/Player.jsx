import {useState} from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isName, setIsName] = useState(name);

    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required value={isName}/>
    }


    function handleEditClick(){
        /**
         * 위 코드를 아래 코드 대신 사용하는 이유
         * 매우중요
         */
        setIsEditing((editing) => !editing)
        // setIsEditing((!isEditing));
    }
    return (
        <li>
            <span className="player">
                {/*{!isEditing ? <span className="player-name">{name}</span>*/}
                {/*: <input/>}*/}
                {playerName}

                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ?  "Save"  : "Edit"}</button>
        </li>
    )
};