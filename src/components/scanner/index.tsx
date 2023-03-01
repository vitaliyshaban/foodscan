import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";

import Notifications from "../notifications";

const qrcodeRegionId = "html5qr-code-full-region";

const Scanner = () => {
	const [barcode, setBarcode] = useState<any>(null);
	// const [devices, setDevices] = useState<any>();
	// const [camera, setCamera] = useState<any>();

	useEffect(() => {
        // return () => {
		const html5QrCode = new Html5Qrcode(qrcodeRegionId);
		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices) {
					// console.log(devices);
					// setCamera(devices);
                    let device = devices[0].id;
                    if(devices && devices.length > 1) {
                        device = devices[1].id;
                    }
					html5QrCode
						.start(
							// { deviceId: { exact: devices[0].id } },
							device,
							{
								fps: 10, // Optional, frame per seconds for qr code scanning
								qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
							},
							(decodedText, decodedResult) => {
								setBarcode(decodedText);
								// console.log(decodedText);
							},
							(errorMessage) => {
								// console.log(errorMessage);
							}
						)
						.catch((err) => {
							// Start failed, handle it.
						});
				}
			})
			.catch((err) => {});
        // }
		// return () => {
		// 	if (camera) {
		// 		console.log(camera);
		// 	}
		// };
	}, []);

	return (
		<>
			<div id={qrcodeRegionId} />
			<div></div>
			<Notifications barcode={barcode} satate={barcode ? true : false} />
		</>
	);
};

export default Scanner;
