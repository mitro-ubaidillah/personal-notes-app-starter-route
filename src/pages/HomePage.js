import React from "react";
import { useSearchParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { getAllNotes,getActiveNotes, getArchivedNotes, deleteNote } from "../utils/local-data";
import Pages from "./Pages";
import DetailPage from "./DetailPage";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSeachParams(keyword) {
        setSearchParams({keyword});
    }

    return <HomePage defaultKeyword={keyword} keyword={changeSeachParams} />

}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
            archiveNote: getArchivedNotes(),
            activeNote: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
   }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const activeNote = this.state.activeNote.filter((note) => {
            return note.title.toLocaleLowerCase().includes(
                this.state.keyword.toLocaleLowerCase(),
            )
        });

        const archiveNote = this.state.archiveNote.filter((note) => {
            return note.title.toLocaleLowerCase().includes(
                this.state.keyword.toLocaleLowerCase()
            )
        });

        return (
            <Routes>
                <Route path="/" element={
                    <Pages notes={activeNote} 
                    title="Catatan Aktif"
                    keyword={this.state.keyword}
                    keywordChange={this.onKeywordChangeHandler}/>} 
                />
                <Route path="/archives" element={
                    <Pages notes={archiveNote} 
                    title="Catatan Arsip"
                    keyword={this.state.keyword}
                    keywordChange={this.onKeywordChangeHandler}/>} 
                />
                <Route path="/notes/:id" element={<DetailPage />} />
            </Routes>
        )
    }
    
}

export default HomePageWrapper;