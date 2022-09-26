import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";


const DetailNote = ({title, createdAt, body, archived, onArchived, onDelete, id}) => {
    return(
        <>
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="detail-page__body">{body}</p>
            <section className="detail-page__action">
                <ArchiveButton id={id} onArchive={onArchived} archived={archived} />
                <DeleteButton id={id} onDelete={onDelete} />
            </section>
        </>
    );
}

DetailNote.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default DetailNote;