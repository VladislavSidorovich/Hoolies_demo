import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/home/Home';
import Preloader from './components/Preloader/Preloader';
import OurTeam from './pages/ourTeam/OurTeam';

const RoadMap = React.lazy(() => import('./pages/roadMap/RoadMap'));

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route
					path='roadmap'
					element={
						<Suspense fallback={<Preloader />}>
							<RoadMap />
						</Suspense>
					}
				/>
				<Route path='/team' element={<OurTeam />} />
			</Route>
		</Routes>
	);
}
export default App;
