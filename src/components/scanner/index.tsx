import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";

import Notifications from "../notifications";

const qrcodeRegionId = "html5qr-code-full-region";
let html5QrCode: any;

const Scanner = ({setOpenScanner}:any) => {
	const [barcode, setBarcode] = useState<string>("");
	// const [initCam, setInitCam] = useState<boolean>(false);
	// const [camera, setCamera] = useState<any>();
	// console.log(initCam)
	useEffect(() => {
		// return () => {
		html5QrCode = new Html5Qrcode(qrcodeRegionId);
		html5QrCode
			.start(
				// { deviceId: { exact: devices[0].id } },
				// device,
				{ facingMode: "environment" },
				{
					fps: 10, // Optional, frame per seconds for qr code scanning
					qrbox: { width: 340, height: 250 }, // Optional, if you want bounded box UI
				},
				(decodedText: any, decodedResult: any) => {
					setBarcode(decodedText);
					console.log(decodedText);
					console.log(decodedResult);
				},
				(errorMessage: any) => {
					// console.log(errorMessage);
				}
			)
			.then(() => {
				console.log("init");
			})
			.catch((err: any) => {
				// Start failed, handle it.
			});
		// Html5Qrcode.getCameras()
		// 	.then((devices) => {
		// 		if (devices) {
		// 			let device = devices[0].id;
		// 			if (devices && devices.length > 1) {
		// 				device = devices[1].id;
		// 			}
		// 			console.log(device);

		// 		}
		// 	})
		// 	.catch((err) => {});
	}, []);
	const stopScan = () => {
        setOpenScanner(false)
		html5QrCode
			.stop()
			.then((ignore: any) => {
				console.log(ignore);
			})
			.catch((err: any) => {
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
