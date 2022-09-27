import React from "react";
import PropTypes from 'prop-types';
import {BiCheck} from 'react-icons/bi';

class NoteInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',

        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEvenetHandler = this.onBodyChangeEvenetHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEvenetHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        });
    }

    render(){
        return(
            <form onSubmit={this.onSubmitEventHandler}>
                <div className="add-new-page">
                    <div className="add-new-page__input">
                        <input type="text" className="add-new-page__input__title" placeholder="Catatan rahasia" value={this.state.title} onChange={this.onTitleChangeEventHandler}  />
                        <textarea className="add-new-page__input__body" contentEditable="true" placeholder="Sebenarnya saya adalah...." onChange={this.onBodyChangeEvenetHandler}>{this.state.body}</textarea>
                    </div>
                </div>
                <div className="add-new-page__action">
                    <button className="action" type="submit" title="Simpan"><BiCheck /></button>
                </div>
            </form>
        )
    }
}

NoteInput.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}


export default NoteInput;