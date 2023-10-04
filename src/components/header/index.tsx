import "./styles.scss";

export default function Header() {
	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Foodscan</span>
						Foodscan
					</a>
				</div>
					<div className="lg:flex lg:flex-1 lg:justify-end">
						<select
							id="location"
							name="location"
							className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							defaultValue="Canada">
							<option>United States</option>
							<option>Canada</option>
							<option>Mexico</option>
						</select>
					</div>
			</nav>
		</header>
	);
}
