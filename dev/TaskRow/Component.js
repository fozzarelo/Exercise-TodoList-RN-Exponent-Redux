import React from 'react'
import Render from './Render'

export default class TaskRow extends React.Component {

  doneBP() {
    this.props.onDone(this.props.todo)
  }
  deleteBP() {
    console.log('component: clicked delete')
    this.props.onDelete(this.props.todo)
  }
  pendingBP() {
    console.log('component: clicked pending')
    this.props.onPending(this.props.todo)
  }
  render() {
    return Render.bind(this)()
  }
}

TaskRow.propTypes = {
  onDelete: React.PropTypes.func.isRequired,
  onDone: React.PropTypes.func.isRequired,
  onPending: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
  }).isRequired,

}
