import { useState } from "react";

const App = () => {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [characterAllowed, setCharacterAllowed] = useState(false);

	return (
		<>
			<h1>Password Generator</h1>
		</>
	);
};

export default App;
