import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Eth Bogota JomEV (JEV)</title>
        </Head>
        <Dashboard />
      </div>
    </Layout>
  );
}
