import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNote from "../components/DetailNote";
import { getNote, deleteNote } from "../utils/local-data";

function DetailPageWrapper() {
    const {id} = useParams();
    const navigate = useNavigate();
    
    function onDelete(id){
        deleteNote(id);
        navigate('/');
    }

    return <DetailPage id={id} onDelete={onDelete}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            note : getNote(props.id),
            onDelete : props.onDelete,
        };
    }

    render(){
        if (this.state.note === null) {
            return (
                <section className="notes-list-empty">
                    <p className="notes-list__empty">Catatan Tidak Ditemukan</p>
                </section>
            )
        }

        return (
            <section className="detail-page">
                <DetailNote {...this.state.note} onDelete={this.state.onDelete}/>
            </section>
        )
    }
}

export default DetailPageWrapper;