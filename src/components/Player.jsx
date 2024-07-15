import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(Editing => !Editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let EditablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) EditablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;

    return (
        <li>
            <span className="player">
                {EditablePlayerName}
                <span id="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}