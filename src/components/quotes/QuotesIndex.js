import React from 'react'
import axios from 'axios'

import QuoteCard from './QuoteCard'

//a search bar for quote categories etc? source: https://bulma.io/documentation/components/panel/

class QuotesIndex extends React.Component {
  state = { quotes: [] }
  async componentDidMount() {
    try {
      const res = await axios.get('/api/quotes')
      this.setState({ quotes: res.data })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.quotes.map(quote =>( 
              <QuoteCard key={quote._id} {...quote}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default QuotesIndex