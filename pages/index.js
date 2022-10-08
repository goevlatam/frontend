import Head from 'next/head';
import Dashboard from '../components/Dashboard';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Eth Bogota JomEV (JEV)</title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"
          />
        </Head>
        <Dashboard />
      </div>
    </Layout>
  );
}
