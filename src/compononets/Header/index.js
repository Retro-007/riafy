import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='header-fixed d-flex flex-row justify-content-start align-items-center'>
                    <div className='flex-grow-1 w-100 text-center py-3'>
                        <span className='fw-bd user-select-none fs-3 fw-bolder'>Search</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
