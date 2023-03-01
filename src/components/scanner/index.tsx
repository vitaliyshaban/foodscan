import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";

import Notifications from "../notifications";

const qrcodeRegionId = "html5qr-code-full-region";
let html5QrCode:any;

const Scanner = () => {
	const [barcode, setBarcode] = useState<any>(null);
	// const [initCam, setInitCam] = useState<boolean>(false);
	// const [camera, setCamera] = useState<any>();
	// console.log(initCam)
	useEffect(() => {
		// return () => {
		html5QrCode = new Html5Qrcode(qrcodeRegionId);
		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices) {
					let device = devices[0].id;
					if (devices && devices.length > 1) {
						device = devices[1].id;
					}
					console.log(device);
					html5QrCode
						.start(
							// { deviceId: { exact: devices[0].id } },
							device,
							{
								fps: 10, // Optional, frame per seconds for qr code scanning
								qrbox: { width: 340, height: 250 }, // Optional, if you want bounded box UI
							},
							(decodedText:any, decodedResult:any) => {
								setBarcode(decodedText);
								// console.log(decodedText);
							},
							(errorMessage:any) => {
								// console.log(errorMessage);
							}
						)
						.then(() => {
							console.log("init");
						})
						.catch((err:any) => {
							// Start failed, handle it.
						});
				}
			})
			.catch((err) => {});
	}, []);
	const stopScan = () => {
		html5QrCode
			.stop()
			.then((ignore:any) => {
				console.log(ignore)
			})
			.catch((err:any) => {
				// Stop failed, handle it.
			});
	};
	return (
		<>
			<div id={qrcodeRegionId} />
			<div onClick={stopScan}>Stop</div>
			<Notifications barcode={barcode} satate={barcode ? true : false} />
		</>
	);
};

export default Scanner;
