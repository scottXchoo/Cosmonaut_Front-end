import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import BgV4 from "../../assets/images/bg-v4.svg";
import AboutCode from "../../components/Contents/AboutCode";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AppenNavigator from "../../schema/components/Navigator/AppenNavigator";
import AppenDesc from "./components/AppenDesc";
import AppenU1 from "./components/AppenU1";
import AppenU2 from "./components/AppenU2";
import AppenU3 from "./components/AppenU3";
import AppenU4 from "./components/AppenU4";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;
const ChapterTitle = tw.div`mb-4 md:mb-4 lg:mb-8`;
const Container = tw.div`mx-auto flex flex-wrap justify-center px-8 md:px-4 bg-gray-700 bg-opacity-75 rounded-xl md:py-8 mb-10 py-6`;
const Contents = tw.div`lg:w-1/2 w-full md:w-2/3`;
const ContentTitle = tw.div`mb-2 md:mb-4 lg:mb-3`;
const ContentDesc = tw.div`mb-1`;

export const AppendixPage = () => {
  const { aID } = useParams();
  const Content = () => {
    if (aID === "0") {
      return <AppenDesc />;
    } else if (aID === "1") {
      return <AppenU1 />;
    } else if (aID === "2") {
      return <AppenU2 />;
    } else if (aID === "3") {
      return <AppenU3 />;
    } else if (aID === "4") {
      return <AppenU4 />;
    } else {
      return null;
    }
  };
  const Header = [
    "Description",
    "1. CosmJS",
    "1. CosmJS",
    "2. Keplr",
    "2. Keplr",
  ];
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Background style={{ backgroundImage: `url(${BgV4})` }}>
        <button
          className="inline-flex mb-2 text-yellow-500 transition ease-in-out duration-300 translate transform hover:-translate-x-2 hover:scale-105"
          onClick={() => navigate(`/lesson/1`)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-6 md:w-6 h-4 w-4 mr-1 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          <span className="md:text-lg text-sm font-extrabold mt-1">
            Back to Overview
          </span>
        </button>
        <ChapterTitle>
          <div class="flex flex-wrap items-baseline md:mx-0 mx-4 lg:mb-16 mb-8">
            <h2 class="text-2xl md:text-left text-center md:text-3xl mr-6 font-heading">
              Appendix
            </h2>
            <h3 class="text-xl  md:text-left text-center md:text-2xl text-yellow-200 font-heading">
              CosmJS & Keplr
            </h3>
          </div>
        </ChapterTitle>
        <Container>
          {/* <Check /> */}
          <Contents>
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2">
                  <AboutCode>{Header[aID]}</AboutCode>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>{Content()}</ContentDesc>
          </Contents>
        </Container>
      </Background>
      <Footer />
      <AppenNavigator />
    </>
  );
};
