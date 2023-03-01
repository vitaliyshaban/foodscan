import { useEffect, useLayoutEffect, useState } from "react";
import Notifications from "../notifications"

function Scaner({Html5QrcodeScanner}:any) {
	// const { Html5QrcodeScanner } = useHtml5QrCodeScanner(html5QrCodeScannerFile);
	// const { devices, error } = useAvailableDevices(html5QrCodeScannerFile);
    const [barcode, setBarcode] = useState<any>(null);
    
	useEffect(() => {
	    return () => {
	        if (Html5QrcodeScanner) {
	            let html5QrcodeScanner = new Html5QrcodeScanner(
	                "reader",
	                { fps: 100, qrbox: { width: 320, height: 200 } },
	                /* verbose= */ false
	            );
	            html5QrcodeScanner.render(
	                (data: any) => {
                        setBarcode(data)
                    },
	                // (err: any) => console.log("err ->", err)
	            );
	        }
	    };
	}, [Html5QrcodeScanner]);

	// beware: id must be the same as the first argument of Html5QrcodeScanner
	return (
		<>
			<div id="reader"></div>
            <Notifications barcode={barcode} satate={barcode ? true : false} />
			{/* {error && `Devices error: ${error}`}
			{devices && (
				<div>
					<span>Available devices are:</span>
					<ul>
						{devices.map((v) => (
							<li>
								id: {v.id}
								<br />
								label: {v.label}
							</li>
						))}
					</ul>
				</div>
			)} */}
		</>
	);
}

export default Scaner;
