import "./styles.scss";
import React, { useState } from "react";
import Header from "../components/header";
import Scanner from "../components/scanner";
import Result from "../components/scanner/result";

function App() {
	const [decodedResults, setDecodedResults] = useState<any>([]);
	const onNewScanResult = (decodedText:any, decodedResult:any) => {
		console.log("App [result]", decodedResult);
		setDecodedResults((prev:any) => [...prev, decodedResult]);
	};

	return (
		<div className="App">
			<Header />
			<Scanner
				fps={10}
				qrbox={250}
				disableFlip={false}
				qrCodeSuccessCallback={onNewScanResult}
			/>
			<Result results={decodedResults} />
		</div>
	);
}

export default App;
