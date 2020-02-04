import React from 'react'

/*
do I need a separate handler for the dropdown and checkbox?

attach handlesubmit to form and handlechange directly to inputs
check bulma documentation for forms. What is control?
need a checkbox to communicate boolean value

React documentation: https://reactjsexample.com/react-component-for-boolean-values/
import { Checkbox } from 'react-input-checkbox';

<Checkbox>Option #1</Checkbox>
<Checkbox disabled>Option #2</Checkbox>
<Checkbox value={true}>Option #3</Checkbox>
<Checkbox theme="fancy">Fancy Option #4</Checkbox>

*/

const QuoteForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input
              className="input"
              placeholder="Author"
              name="author"
              onChange={handleChange}
              value={data.author}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Source</label>
          <div className="control">
            <input
              className="input"
              placeholder="Source"
              name="source"
              onChange={handleChange}
              value={data.source}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Theme</label>
          <div className="control">
            <input
              className="input"
              placeholder="Theme"
              name="theme"
              onChange={handleChange}
              value={data.theme}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Quote</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Quote"
              name="quote"
              onChange={handleChange}
              value={data.quote}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Decade or Century of Quote</label>
          <div className="control">
            <div className="select">
              <select
                name="year"
                onChange={handleChange}
                value={data.year}
              >
                <option>
                  2000-Present
                </option>
                <option>
                  1990
                </option>
                <option>
                  1980
                </option>
                <option>
                  1970
                </option>
                <option>
                  1960
                </option>
                <option>
                  1950
                </option>
                <option>
                  1940
                </option>
                <option>
                  1930
                </option>
                <option>
                  1920
                </option>
                <option>
                  1910
                </option>
                <option>
                  1900
                </option>
                <option>
                  1800
                </option>
                <option>
                  1700
                </option>
                <option>
                  1600
                </option>
                <option>
                  1500
                </option>
                <option>
                  Before 1500
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="isBook"
                onChange={handleChange}
                value={data.isBook}
              />
              This source was a originally a book
            </label>
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth is-success">Submit</button>
        </div>
      </form>
    </div >
  )
}

export default QuoteForm