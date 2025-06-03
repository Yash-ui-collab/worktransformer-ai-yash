import Footer from "components/layout/Footer";
import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastIcons } from "components/utils/toast-icons";
import "simplebar-react/dist/simplebar.min.css";
import { Header } from "components/layout/Header";

function App() {
	return (
		<div className="bg-text dark:bg-bgc text-textDark dark:text-text text-sm sm:text-base flex flex-row justify-center w-full">
			<div className="overflow-hidden w-full h-full min-h-screen">
				<div className="flex flex-col w-full items-end relative">
					{/* Header Navigation */}
					<Header />

					{/* Main Content */}
					<main className={`z-[1] relative w-full min-h-[calc(100vh-515px)]`}>
						<Outlet />
					</main>

					{/* Footer Section */}
					<Footer />
					<ToastContainer
						toastClassName={"!rounded-2xl"}
						icon={props => {
							const type = props.type as keyof typeof ToastIcons;
							return ToastIcons[type]?.() || null;
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
