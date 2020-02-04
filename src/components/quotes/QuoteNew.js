import React from 'react'
import axios from 'axios'

import Auth from './../../lib/auth'
import QuoteForm from './QuoteForm'

class QuoteNew extends React.Component {

  state = {
    data: {
      author: '',
      quote: '',
      source: '',
      theme: '',
      year: '2000-Present',
      isBook: false
    }
  }

  handleChange = ({ target: { name, value, checked, type } }) => {
    const newValue = type === 'checkbox' ? checked : value
    const data = { ...this.state.data, [name]: newValue }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/quotes', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/quotes/${res.data._id}`)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <QuoteForm 
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }

}

export default QuoteNew