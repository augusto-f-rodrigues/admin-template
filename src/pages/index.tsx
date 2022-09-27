import Carrossel from "../components/templates/Carrossel";
import Layout from "../components/templates/Layout";
import Navbar from "../components/templates/Navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar />
       <Carrossel /> */}
      <Layout>
      <Carrossel />
    </Layout>
    </>
  );
}
