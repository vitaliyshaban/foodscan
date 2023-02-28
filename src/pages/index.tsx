import { useState, useRef } from "react";
import "./styles.scss";

import Header from "../components/header";
import Scanner from "../components/scanner";
import Result from "../components/scanner/result";

function App() {
	const [scanning, setScanning] = useState<any>(false);
	const [results, setResults] = useState<any>([]);
	const scannerRef = useRef<any>(null);
    console.log(results)
	return (
		<div className="App">
			<Header />

			<div>
				<button onClick={() => setScanning(!scanning)}>
					{scanning ? "Stop" : "Start"}
				</button>
				<ul className="results">
					{results.map(
						(result:any) =>
							result.codeResult && (
								<Result key={result.codeResult.code} result={result} />
							)
					)}
				</ul>
				<div
					ref={scannerRef}
					style={{ position: "relative", width: 320, margin: '0 auto 0' }}>
					{/* <video style={{ width: window.innerWidth, height: 'auto', border: '3px solid orange' }}/> */}
					<canvas
						className="drawingBuffer"
						style={{
							position: "absolute",
							top: "0px",
							// left: '0px',
							// height: '100%',
							// width: '100%',
							border: "3px solid green",
						}}
						width="320"
						height="280"
					/>
					{scanning ? (
						<Scanner
							scannerRef={scannerRef}
							onDetected={(result:any) => setResults([...results, result])}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default App;
