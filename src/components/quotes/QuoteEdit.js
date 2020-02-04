import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import QuoteForm from './QuoteForm'

class QuoteEdit extends React.Component {

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

  async componentDidMount() {
    const quoteId = this.props.match.params.quoteId
    try {
      const res = await axios.get(`/api/quotes/${quoteId}`)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = ({ target: { name, value, checked, type } }) => {
    const newValue = type === 'checkbox' ? checked : value
    const data = { ...this.state.data, [name]: newValue }
    this.setState({ data })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const quoteId = this.props.match.params.id
    try {
      const { data } = await axios.put(`/api/quotes/${quoteId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/quotes/${data._id}`)
    } catch (err) {
      console.log(err.response.data.errors)
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

export default QuoteEdit