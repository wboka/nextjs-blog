import Head from 'next/head';
import Layout from '../components/Layout'
import Alert from '../components/Alert'

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About</title>
			</Head>
			<h1>About Me</h1>

			<Alert type="success">
				Hello world
			</Alert>
		</Layout>
	);
}
