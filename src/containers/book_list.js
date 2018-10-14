import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component  {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                  key={book.title} 
                  onClick={()=> this.props.selectBook(book)}
                >
                  <div><img src={book.src}/></div>
                  <div className="book-title"><p>{book.title}</p></div>
                </li>
            );
        });
    }

    render() {
        return (
           <div>
             <h3>Book's List</h3>
             <ul className="book-list"> 
              {this.renderList()}
             </ul>
          </div>
        )

    }
}

function mapStateToProps(state) {
    //Anything returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

//Anything returned from this function will end up as 
//props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed
    //to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//Promote BookList from a component to a container. It needs to know
//about this dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);