import { applications } from './applications';
import ApplicationList from './components/ApplicationList';
import Summary from './components/Summary';

/* App holds the application data and passes it to the summary and list. */
export default function App() {
	return (
		<>
			<header className="site-header">
				<div className="container">
					<h1>Job Application Tracker</h1>
				</div>
			</header>

			<main className="container">
				<Summary applications={applications} />
				<ApplicationList applications={applications}/>
			</main>
		</>
	);
}
