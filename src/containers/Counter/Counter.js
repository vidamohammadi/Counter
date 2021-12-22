import React from 'react'
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

class Counter extends React.Component {
  state = {
    counter: 0,
  }



  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increase"
          clicked={this.props.onIncrement}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrement}
        />
        <CounterControl
          label="Increase 2"
          clicked={this.props.onAdd}
        />
        <CounterControl
          label="Decrement 2"
          clicked={this.props.onSub}
        />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    ctr: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
    onAdd: () => dispatch({type: 'ADD', value: 2 }),
    onSub: () => dispatch({type: 'SUB', value:2 })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
