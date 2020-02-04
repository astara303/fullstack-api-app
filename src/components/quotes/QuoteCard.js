import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCheck } from '@fortawesome/free-solid-svg-icons'

//fa documentation: https://github.com/FortAwesome/react-fontawesome#explicit-import

//check bulma documentation for cards: https://bulma.io/documentation/components/card/
//make three dots to pop up at certain length of quote. Where you have to click into it to see the rest. Put statement/function where we call the quote
//likes under each quote (+1 to value every time a user clicks it)

// quote.length > 400

const QuoteCard = ({ author, quote, _id }) => (
  <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/quotes/${_id}`}>
      <div className="card">
        <div className="card-content">
          {/* add length check here */}
          <p className="title is-6 has-text-weight-normal">
            &quot;{quote}&quot;
          </p>
          <p className="subtitle">
            -{author}
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <button className="button">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>
                <span>Like</span>
              </button>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              <button className="button is-success">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span>Save</span>
              </button>
            </span>
          </p>
        </footer>
      </div>
    </Link>
  </div>
)

export default QuoteCard
