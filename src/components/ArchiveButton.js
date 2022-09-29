import React from "react";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";

const ArchiveButton = ({id, archived, onArchive, unArchive}) => {
    return <button className="action" type="button" title={archived ? "Aktif":"Arsip"} 
    onClick={() => {archived ? unArchive(id) : onArchive(id)}} archived={archived ? 'false': undefined}>{archived ? <BiArchiveOut />:<BiArchiveIn />}</button>
}

ArchiveButton.propTypes = {
    onArchive: PropTypes.func.isRequired,
    unArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
}

export default ArchiveButton;