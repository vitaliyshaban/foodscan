import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";

import Notifications from "../notifications";

const qrcodeRegionId = "html5qr-code-full-region";

const Scanner = () => {
	const [barcode, setBarcode] = useState<any>(null);
	const [camera, setCamera] = useState<any>();

	useEffect(() => {
		const html5QrCode = new Html5Qrcode(qrcodeRegionId);
		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices) {
					setCamera(devices[0].id);
				}
			})
			.catch((err) => {});
		// return () => {
		if (camera) {
			console.log(camera);
			html5QrCode
				.start(
					{ facingMode: "environment" },
					{
						fps: 10, // Optional, frame per seconds for qr code scanning
						qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
					},
					(decodedText, decodedResult) => {
						setBarcode(decodedText);
						console.log(decodedText);
					},
					(errorMessage) => {
						// parse error, ignore it.
					}
				)
				.catch((err) => {
					// Start failed, handle it.
				});
		}
		// };
	}, [camera]);

	return (
		<>
			<div id={qrcodeRegionId} />
			<Notifications barcode={barcode} satate={barcode ? true : false} />
		</>
	);
};

export default Scanner;
