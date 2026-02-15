import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout";

// Placeholder imports for now - we will build these next
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ScanPlant from "./pages/ScanPlant";

function App() {
	return (
		<Routes>
			{/* Public Routes wrapped in MainLayout */}
			<Route
				path="/"
				element={
					<MainLayout>
						<Home />
					</MainLayout>
				}
			/>
			<Route
				path="/scan"
				element={<ScanPlant />}
			/>
			<Route element={<AuthLayout />}>
				<Route
					path="/signin"
					element={<SignIn />}
				/>
				<Route
					path="/signup"
					element={<SignUp />}
				/>
			</Route>
			{/* We will eventually add an AuthLayout for SignIn/SignUp 
         so they don't show the main Navbar 
      */}
			{/* <Route path="/signin" element={<SignIn />} /> */}
		</Routes>
	);
}

export default App;
