import { useState } from "react";

const App = () => {
	const [color, setColor] = useState("cyan");
	return (
		<>
			<div
				style={{ backgroundColor: color }}
				className="w-full h-screen border flex place-content-center justify-around flex-wrap gap-3"
			>
				<div className="bg-white fixed bottom-12 border rounded-full flex place-content-center justify-around flex-wrap gap-3 p-4 z-10">
					<button
						className="text-[white] bg-[black] text-lg font-medium border-2 rounded-lg px-3 py-2"
						onClick={() => setColor("black")}
					>
						Black
					</button>
					<button
						className="text-[white] bg-[orange] text-lg font-medium border-2 rounded-lg px-3 py-2"
						onClick={() => setColor("orange")}
					>
						Orange
					</button>
					<button
						className="text-[white] bg-[blue] text-lg font-medium border-2 rounded-lg px-3 py-2"
						onClick={() => setColor("blue")}
					>
						Blue
					</button>
					<button
						className="text-[white] bg-[red] text-lg font-medium border-2 rounded-lg px-3 py-2"
						onClick={() => setColor("red")}
					>
						Red
					</button>
					<button
						className="text-[white] bg-[violet] text-lg font-medium border-2 rounded-lg px-3 py-2"
						onClick={() => setColor("violet")}
					>
						Violet
					</button>
					<button
						className="text-[white] bg-[pink] text-lg font-medium border-2 rounded-lg px-3 py-2"
						onClick={() => setColor("pink")}
					>
						Pink
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
