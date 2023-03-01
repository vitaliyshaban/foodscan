import "./styles.scss";
import React, { useState } from "react";
import Header from "../components/header";
import Scanner from "../components/scanner";

function App() {
	const [openScanner, setOpenScanner] = useState<boolean>(false);
	return (
		<div className="App">
			<Header />
			{openScanner ? (
				<Scanner setOpenScanner={setOpenScanner} />
			) : (
				<div onClick={() => setOpenScanner(true)}>Open</div>
			)}
		</div>
	);
}

export default App;
