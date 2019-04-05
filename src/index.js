// @jsx h
import { h, render } from "preact";
import { Provider, connect } from "preact-redux";
import { createStore } from "redux";
import "./index.css";

const plus = () => ({ type: "+" });
const minus = () => ({ type: "-" });

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "+":
      return { ...state, count: state.count + 1 };
    case "-":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
const mapStateToProps = state => ({ count: state.count });

const Counter = connect(
  mapStateToProps,
  { plus, minus }
)(props => (
  <div>
    <span> Count: {props.count} </span>
    <button onclick={props.minus}>-</button>{" "}
    <button onclick={props.plus}>+</button>
  </div>
));

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.body
);
