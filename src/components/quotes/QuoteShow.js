import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class QuoteShow extends React.Component {

  state = { quote: null }

  async componentDidMount() {
    const quoteId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/quotes/${quoteId}`)
      this.setState({ quote: res.data })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  handleDelete = async () => {
    const quoteId = this.props.match.params.id
    try {
      await axios.delete(`/api/quotes/${quoteId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/quotes')
    } catch (err) {
      console.log(err.response)
    }
  }

  // isOwner = () => Auth.getPayload().sub === this.state.quote.user._id

  isOwner = () => {
    console.log('quote creator', Auth.getPayload().sub)
    console.log('current user', this.state.quote.user._id)
    return Auth.getPayload().sub === this.state.quote.user._id
  }

  render() {
    const { quote } = this.state
    if (!quote) return null
    console.log('the quote object', quote)
    console.log('calling function for boolean:', this.isOwner())
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{quote.author}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <p>{quote.quote}</p>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Source</h4>
              <p>{quote.source}</p>
              <hr />
              <h4 className="title is-4">Theme</h4>
              <p>{quote.theme}</p>
              <hr />
              <h4 className="title is-4">Decade or Century</h4>
              <p>{quote.year}</p>
              <hr />
              {this.isOwner() && 
                <>
                 <Link to={`/quotes/${quote._id}/edit`} className="button is-warning">Edit Quote</Link>
                  <hr />
                  <button onClick={this.handleDelete} className="button is-danger">Delete Quote</button>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default QuoteShow
