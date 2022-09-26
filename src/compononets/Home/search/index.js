import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <div className=' ' >
                    <div className="input-group   b-r-10" style={{ border: 'none', outline: 'none' }}>
                        <span className="input-group-text input" id="basic-addon1" style={{ backgroundColor: '#f7f7f7', border: 'none', outline: 'none' }}><BsSearch color='black' /></span>
                        <input type="text" className="form-control common-color form-search-control py-3" placeholder="Food Name" aria-label="Food Name" aria-describedby="Food Name" />
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Search;
