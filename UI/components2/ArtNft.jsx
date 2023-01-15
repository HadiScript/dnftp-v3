import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import SliderCarousel from "../components/SliderCarouselsingle";
import Particle from "../components/Particle";
import { useRouter } from "next/router";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const ArtNft = () => {

  const router = useRouter();

  return (
    <div>
      <section
        className="jumbotron no-bg"
        style={{
          backgroundImage: `url(${"/img/background/7.jpg"})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        // style={{ backgroundImage: `url(${"/img/background/7.jpg"})` }}
      >
        {/* <Particle /> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="spacer-single"></div>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={0}
                duration={600}
                cascade
              >
                <h6 className="">
                  <span className="text-uppercase color">Categories</span>
                </h6>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={300}
                duration={600}
                cascade
              >
                <h1 className="">Top Categories Of NFTs.</h1>
              </Reveal>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={600}
                duration={600}
                cascade
              >
                <p className=" lead">
                  Unit of data stored on a digital ledger, called a blockchain,
                  that certifies a digital asset to be unique and therefore not
                  interchangeable
                </p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={800}
                duration={900}
                cascade
              >
                <div className="d-flex justify-content-center-align-items-center gap-2">
                  <span
                    onClick={() => router.push('/dnftp/category/art')}
                    className="btn-main lead"
                  >
                    Art
                  </span>
                  <span
                    onClick={() => router.push('/dnftp/category/gif')}
                    className="btn-main lead"
                  >
                    GIF
                  </span>
                  <span
                    onClick={() => router.push('/dnftp/category/painting')}
                    className="btn-main lead"
                  >
                    Paiting
                  </span>
                </div>
                <div className="mb-sm-30"></div>
              </Reveal>
              <div className="spacer-double"></div>
            </div>
            <div className="col-lg-6 px-0">
              <Reveal
                className="onStep"
                keyframes={customAnimation}
                delay={300}
                duration={600}
                cascade
              >
                <SliderCarousel />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtNft;
