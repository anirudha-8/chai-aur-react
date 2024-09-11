import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const addOnClick = () => {
		setCounter(counter + 1);
	};
	const removeOnClick = () => {
		setCounter(counter - 1);
	};
	return (
		<>
			<div>
				<h1>Counter App</h1>
				<h2>Counter Value: {counter}</h2>
				<div className="btn-container">
					<button onClick={addOnClick} className="btn green">
						Increment Counter
					</button>
					<button onClick={removeOnClick} className="btn red">
						Decrement Counter
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
