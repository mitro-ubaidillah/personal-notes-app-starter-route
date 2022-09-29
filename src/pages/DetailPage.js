import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNote from "../components/DetailNote";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import PropTypes from "prop-types";

const DetailPageWrapper = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    function onDelete(id){
        deleteNote(id);
        navigate('/');
    }

    function onArchive(id){
        archiveNote(id);
        navigate('/');
    }

    function unArchive(id){
        unarchiveNote(id);
        navigate('/');
    }

    return <DetailPage id={id} onDelete={onDelete} onArchive={onArchive} unArchive={unArchive}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            note : getNote(props.id),
            onDelete : props.onDelete,
            onArchive : props.onArchive,
            unArchive : props.unArchive,
        };
    }

    render(){
        if (!this.state.note) {
            return (
                <section className="notes-list-empty">
                    <p className="notes-list__empty">Catatan Tidak ditemukan</p>
                </section>
            )
        }

        return (
            <section className="detail-page">
                <DetailNote {...this.state.note} onDelete={this.state.onDelete} onArchive={this.state.onArchive} unArchive={this.state.unArchive} />
            </section>
        )
    }
}

DetailPage.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    unArchive: PropTypes.func.isRequired,
}

export default DetailPageWrapper;