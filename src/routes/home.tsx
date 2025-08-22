import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-20 bg-gradient-to-b from-[#365a6b] from-1% via-white via-10% to-[#d6e9f1] to-100% text-gray-900">

      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-5xl font-extrabold leading-tight">
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] md:text-7xl ">
              NextHire AI
            </span>
            <span className="text-gray-500 font-extrabold">
              {" "}– A better way to
            </span>
            <br />
            improve your interview chances and skills
          </h2>

          <p className="mt-4 text-muted-foreground text-1xl">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-10">
          <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
            Unleash your potential with personalized AI insights and targeted
            interview practice.
          </h2>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            500+
            <span className="block text-xl text-muted-foreground font-normal">
              Practice Questions
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            100%
            <span className="block text-xl text-muted-foreground font-normal">
              Personalized Feedback
            </span>
          </p>

        </div>

        {/* image section */}
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Inteviews Copilot&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">

            <h2 className="text-neutral-800 ">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </h2>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* marquee section */}
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>


    </div>
  );
};

export default HomePage;


