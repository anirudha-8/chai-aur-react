import "./App.css";

import Card from "./components/Card";

function App() {
	return (
		<>
			<h1 className="text-black bg-green-400 rounded-lg p-4 mb-4 cursor-pointer">
				Tailwind CSS
			</h1>
			<div className="flex gap-3 items-center justify-around">
				<Card username="Ana" btnText="Click Me" />
				<Card username="sana" btnText="Press Me" />
				<Card username="dana" btnText="Visit Me" />
				<Card username="Zyna" btnText="Touch Me" />
			</div>
		</>
	);
}

export default App;
