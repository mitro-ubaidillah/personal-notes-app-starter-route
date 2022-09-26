import React from "react";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";

const ArchiveButton = ({id, archived, onArchive}) => {
    return <button className="action" type="button" title={archived ? "Aktif":"Arsip"} 
    onClick={() => onArchive(id)} archived={archived ? 'false': undefined}>{archived ? <BiArchiveOut />:<BiArchiveIn />}</button>
}

export default ArchiveButton;