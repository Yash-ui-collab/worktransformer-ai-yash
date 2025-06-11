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
import ForgotPasswordPage from "pages/ForgotPasswordPage";
import ResourceHubPage from "pages/ResourceHubPage";
import TrustCenterPage from "pages/TrustCentrePage"

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
							{/* <Route index element={<Navigate to="/pricing" replace />} /> */}
							<Route path="/login" element={<LoginPage />} />
							<Route path="/signup" element={<SignUpPage />} />
							<Route path="/forgot-password" element={<ForgotPasswordPage />} />

							<Route
								path="/"
								element={
									<ProtectedRoute>
										<HomePage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/platform"
								element={
									<ProtectedRoute>
										<PlatformPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/pricing"
								element={
									<ProtectedRoute>
										<PricingPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/trust-centre"
								element={
									<ProtectedRoute>
										<TrustCenterPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/resource-hub"
								element={
									<ProtectedRoute>
										<ResourceHubPage />
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
