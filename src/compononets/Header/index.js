import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='header-fixed d-flex flex-row justify-content-start align-items-start ' style={{ borderBottom: '2px solid black' }}>
                    <div className='flex-grow-1 w-100  px-3 py-3'>
                        <span className='fw-bd user-select-none fs-3 fw-bolder common-color'>Search</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
