import React from 'react'
import Render from './Render'

export default class TaskRow extends React.Component {

  doneBP() {
    this.props.onDone(this.props.todo)
  }

  render() {
    return Render.bind(this)()
  }

}

TaskRow.propTypes = {
  onDone: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired,
  }).isRequired,

}
