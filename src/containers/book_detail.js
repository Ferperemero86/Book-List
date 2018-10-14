import React, { Component } from 'react';
import { connect } from 'react-redux';

 class BookDetail extends Component {
    render() {
        if (!this.props.book) {
          return <div className="select-book-message"> Select a book to get started</div>
        }

        return (
            <div className="book-detail">
                <h3>Details for:</h3>
                <p>{this.props.book.title}</p>
                <p>{this.props.book.pages} Pages</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);