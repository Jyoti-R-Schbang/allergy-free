import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetcher = async (url) => {
//       const response = await fetch("/api");
//       const datanew = await response.json();
//       setData(datanew);
//     };

//     fetcher();
//   }, []);

//   let headerData = data?.data?.attributes && data?.data?.attributes;
//   let footerData = data?.data?.attributes && data?.data?.attributes?.footer;
//   let logo = data?.data?.attributes && data?.data?.attributes?.primaryLogo && data?.data?.attributes?.primaryLogo?.data

let headerData = null;
let footerData = null;


  return (
    <>
      {/* {headerData ? <Header headerData={headerData} /> : null} */}
      <Header />
      {children}
      {/* {footerData ? <Footer footerData={footerData} logo={logo} /> : null} */}
      <Footer />
    </>
  );
}
