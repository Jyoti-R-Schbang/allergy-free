import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from "@/styles/home.module.css";
import SectionTwo from '@/components/Home/SectionTwo';
import HeroBannerSlider from '@/components/HeroBannerSlider/HeroBannerSlider';
import SimpleCard from '@/components/SimpleCard/SimpleCard';

export default function Home(props) {

  // const { t } = useTranslation();

  return (
    <div className={`mt-[80px] md:mt-[100px] ${styles.homePageMainContainer}`}>
      {/* section - 1 / banner / swiper */}
      <HeroBannerSlider />

      {/* section - 2 / cards */}
      <SectionTwo />

      {/* section - 3 / simple card */}
      <div className={`flex gap-x-4 md:gap-x-7 justify-center mt-16 md:mt-24 ${styles.cardContainer}`}>
        <SimpleCard />
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}
