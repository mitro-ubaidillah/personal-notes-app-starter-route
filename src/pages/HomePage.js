import React from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import PropTypes from "prop-types";

const HomePageWrapper = () => {
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
            notes: getActiveNotes(),
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
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLocaleLowerCase().includes(
                this.state.keyword.toLocaleLowerCase(),
            )
        });

        if(!notes) {
            return <h1>404 page not found</h1>
        }

        return (
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteList notes={notes} />
                <AddButton />
            </section>
        )
    }
    
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
}


export default HomePageWrapper;