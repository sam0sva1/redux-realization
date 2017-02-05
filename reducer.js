let state = 0;

function updateState(state, action) {
	if (action.type === 'INCREMENT') {
		return state + action.amount;
	} else if (action.type === 'DECREMENT') {
		return state - action.amount;
	} else {
		return state;
	}
}

class Store(updateState, state) {
	constructor() {
		this._state = state;
		this._updateState = updateState;
	}

	update(action) {
		this._state = this._updateState(this.state, action);
	}

}

let store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, decrementAction);
console.log(state);

state = updateState(state, {});
console.log(state);