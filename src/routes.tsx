import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { initialState, StateProvider } from "components/utils/useAppState";
import AccessDisabled from "pages/AccessDisabled";
import App from "pages/App";
import HomePage from "pages/HomePage";
import PlatformPage from "pages/PlatformPage";
import PricingPage from "pages/PricingPage";
import LoginPage from "pages/Loginpage";
import SignUpPage from "pages/SignUpPage";
import SetUpAuthenticator from "pages/SetUpAuthenticator";
import ForgotPasswordPage from "pages/ForgotPasswordPage";

declare global {
	interface Window {
		maintenance: boolean;
	}
}
const queryClient = new QueryClient();

const reducer = (state: any, action = {}) => {
	return {
		...state,
		...action,
	};
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <>{children}</>;
};

const createRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<StateProvider initialState={initialState} reducer={reducer}>
				<QueryClientProvider client={queryClient}>
					<Routes>
						<Route path="/" element={<App />}>
							{/* Default route redirecting to /pricing */}
							<Route index element={<Navigate to="/pricing" replace />} />
							<Route
								path="/pricing"
								element={
									<ProtectedRoute>
										<PricingPage />
									</ProtectedRoute>
								}
							/>
							<Route path="access_disabled" element={<AccessDisabled />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Route>
					</Routes>
				</QueryClientProvider>
			</StateProvider>
		</BrowserRouter>
	);
};

export default createRoutes;
