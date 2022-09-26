import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

const Pages = ({notes, title, keyword, keywordChange, render}) => {
    return(
        <section className="homepage">
            <h2>{title}</h2>
            <SearchBar keyword={keyword} keywordChange={keywordChange} render={render} />
            {
                notes.length ?
                <>
                    <NoteList notes={notes} />
                </> : 
                <section className="notes-list-empty">
                    <p className="notes-list__empty">Tidak ada catatan</p>
                </section>
                
            }
        </section>
    )
}

export default Pages;