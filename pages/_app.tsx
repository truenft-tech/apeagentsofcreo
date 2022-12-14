 import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { NextSeo } from "next-seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Ape Agents of Creo | Game Changing NFTs"
        description="Ape Agents of Creo by True Nft Technologies"
        // canonical="https://www.canonical.ie/"
        // twitter={{
        //   handle: "@handle",
        //   site: "@site",
        //   cardType: "summary_large_image",
        // }}
      />

      <div className="min-h-screen bg-gray-800 text-white selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
