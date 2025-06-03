
function AccessDisabled() {

	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold">Play ClickCity on your mobile</h1>
					<p className="mt-2 text-lg">Use your camera to scan the QR code below</p>
				</div>

				<div className="p-4 rounded-2xl bg-bgc">
					<img
						src="https://via.placeholder.com/200"
						alt="QR Code"
						className="w-48 h-48"
					/>
				</div>
			</div>
		</div>
	);
}

export default AccessDisabled;
