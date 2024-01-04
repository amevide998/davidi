import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// import ShoveeModal from "@/utils/ShoveeModal";
import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"))
const Apps = dynamic(() => import("@/sections/Apps"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Hadin Davidi Sianturi</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Hadin Davidi Sianturi" name="title" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="https://shiv-s-portfolio.vercel.app" property="og:url" />
        <meta content="Hadin Davidi Sianturi" property="og:title" />
        <meta content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png" property="og:image" />

        {/* <!-- Twitter --> */}
        <meta content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png" property="twitter:card" />
        <meta content="https://shiv-s-portfolio.vercel.app" property="twitter:url" />
        <meta content="Hadin Davidi Sianturi" property="twitter:title" />
        <meta content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png" property="twitter:image" />

        {/* <!-- Other Meta Tags --> */}
        <meta content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in jawa, react js developer in sumatera, react js developer in jakarta, react js developer in medan" name="keywords" />
        <meta content="Hadin Davisi Sianturi" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        <link href="https://shiv-s-portfolio.vercel.app/favicon.ico" rel="icon" type="image/x-icon" />

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />

          {/* LatestBlog */}
          <LatestBlogs />
          {/* Apps */}
          <Apps />
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          <div className="z-40">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>
          {/* Feedback Modal */}
          <Feedback />
          {/* ShoveeModal */}
          {/* <ShoveeModal /> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Home
