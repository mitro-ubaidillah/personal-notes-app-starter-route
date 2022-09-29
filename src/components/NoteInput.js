import React from "react";
import {BiCheck} from "react-icons/bi";

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
                body: event.target.innerHTML
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
                        <div className="add-new-page__input__body" data-placeholder="Sebenarnya saya adalah...." contentEditable onInput={this.onBodyChangeEvenetHandler} />
                    </div>
                </div>
                <div className="add-new-page__action">
                    <button className="action" type="submit" title="Simpan"><BiCheck /></button>
                </div>
            </form>
        )
    }
}


export default NoteInput;