//@ts-nocheck

import axios from "axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { API } from "../../../config/API";
import { GlobalStyles } from "../../../styles/page-style/GlobalStyles";
import ChartsByBrowser from "../../../UI/components2/Dashboard/ChartsByBrowser";
import NewUsers from "../../../UI/components2/Dashboard/NewVendors";
import Statistics from "./stats";
import VendorsStat from "./VendorsStat";
import { MdSpaceDashboard } from "react-icons/md";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
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

const Dashboard = () => {
  const [stats, setStats] = React.useState([]);

  useEffect(() => {
    fetchTransectionStats();
  }, []);

  const fetchTransectionStats = async () => {
    try {
      const { data } = await axios.get(`${API}/transections`);
      setStats(data);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      <section
        className="jumbotron breadcumb no-bg"
        style={{
          backgroundImage: `url(${"/img/background/1.jpg"})`,
        }}
      >
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row m-10-hor">
              <div className="col-12">
                <h1 className="d-flex justify-content-center text-center align-items-center">
                  <span className="px-2"> Dashboard</span>{" "}
                  <MdSpaceDashboard color="#8464E2" />{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlobalStyles />

      <section className="container">
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={0}
          duration={600}
          cascade
        >
          <Statistics />
        </Reveal>
        <div className="spacer-50"></div>

        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={0}
          duration={600}
          cascade
        >
          <Row>
            <h5>Vendor Stats</h5>
            <Col xl={8}>
              <VendorsStat stats={stats} />
            </Col>

            <Col xl={4}>
              <ChartsByBrowser />
            </Col>
          </Row>
        </Reveal>
      </section>
    </>
  );
};

export default Dashboard;
