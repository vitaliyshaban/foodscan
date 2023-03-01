import "./styles.scss";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Scanner from "../components/scanner";
// import Result from "../components/scanner/result";
import {
	useHtml5QrCodeScanner,
	useAvailableDevices,
} from "react-html5-qrcode-reader";

const html5QrCodeScannerFile = process.env.PUBLIC_URL + "/html5-qrcode.min.js";

function App() {
	const [openScanner, setOpenScanner] = useState<boolean>(false);
	const { Html5QrcodeScanner } = useHtml5QrCodeScanner(html5QrCodeScannerFile);
	//const { devices, error } = useAvailableDevices(html5QrCodeScannerFile);

	return (
		<div className="App">
			<Header />
			{openScanner ? (
				<Scanner Html5QrcodeScanner={Html5QrcodeScanner} />
			) : (
				<div onClick={() => setOpenScanner(true)}>Open</div>
			)}
		</div>
	);
}

export default App;
