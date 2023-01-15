//@ts-nocheck

import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SingleCoin, HistoricalChart } from "../../../config/CoinAPI";
import axios from "axios";

import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import ETHGraph from "./ETHGraph";
import CryptoGraph from "./CryptoGraph";
import BinanceGraph from "./BinanceGraph";
import RippleGraph from "./RippleGraph";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

var settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: 300,
  responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

export const ResponsiveSlider = () => {

  const [historicData, setHistoricData] = useState([]);

  const fetchHistoricData = async () => {
    try {
      const resBitcoin = await axios.get(
        HistoricalChart("bitcoin", 360, "PKR")
      );
      setHistoricData(resBitcoin.data.prices);
    } catch (error) {
      toast.error(error);
    }
  };

 


  useEffect(() => {
    fetchHistoricData();
  }, []);

  const seriesBitcoin = [
    {
      name: "ETH in PKR",
      data: historicData && historicData?.map((ethereum) => ethereum[1]),
    },
  ];

  const optionsBitcoin = {
    chart: {
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      type: "area",
      stacked: false,
      toolbar: {
        show: true,
      },
    },

    dataLabels: {
      enabled: false,
    },

    markers: {
      size: 0,
    },
    colors: ["#8364E2", "#E91E63", "#9C27B0"],
    grid: {
      row: {
        colors: ["white", "white"], // takes an array which will be repeated on columns
        opacity: 0.01,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 70, 80, 100],
      },
    },

    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
    ],

    yaxis: {
      show: false,
      showAlways: false,
      labels: {
        style: {
          colors: "white",
        },
      },
    },

    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "white",
        },
      },
      categories:
        historicData &&
        historicData?.map((coin) => {
          let date = new Date(coin[0]);
          let time =
            date.getHours() > 12
              ? `${date.getHours() - 12}:${date.getMinutes()} PM`
              : `${date.getHours()}:${date.getMinutes()} AM`;
          return 360 === 1 ? time : date.toLocaleDateString();
        }),
    },

    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };



  return (
    <div className="nft-big">
      <Slider {...settings}>
        <div className="itm" index={1}>
          <div className="nft_pic">
            <span>
              <span className="nft_pic_info">
                <span className="nft_pic_title">Bitcoin</span>
                <span className="nft_pic_by">IN PAKISTANI RUPEE</span>
              </span>
            </span>
            <div className="nft_pic_wrap">
              <Chart
                options={optionsBitcoin}
                series={seriesBitcoin}
                type="area"
                className="apex-charts"
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="itm" index={2}>
          <div className="nft_pic">
            <span>
              <span className="nft_pic_info">
                <span className="nft_pic_title">Ethereum</span>
                <span className="nft_pic_by">IN PAKISTANI RUPEE</span>
              </span>
            </span>
            <div className="nft_pic_wrap">
             <ETHGraph />
            </div>
          </div>
        </div>

        <div className="itm" index={3}>
          <div className="nft_pic">
            <span>
              <span className="nft_pic_info">
                <span className="nft_pic_title">Crypto-com-chain</span>
                <span className="nft_pic_by">IN PAKISTANI RUPEE</span>
              </span>
            </span>
            <div className="nft_pic_wrap">
             <CryptoGraph />
            </div>
          </div>
        </div>

        <div className="itm" index={4}>
          <div className="nft_pic">
            <span>
              <span className="nft_pic_info">
                <span className="nft_pic_title">Binance Coin</span>
                <span className="nft_pic_by">IN PAKISTANI RUPEE</span>
              </span>
            </span>
            <div className="nft_pic_wrap">
             <BinanceGraph id="binancecoin" />
            </div>
          </div>
        </div>

        <div className="itm" index={5}>
          <div className="nft_pic">
            <span>
              <span className="nft_pic_info">
                <span className="nft_pic_title">Ripple</span>
                <span className="nft_pic_by">IN PAKISTANI RUPEE</span>
              </span>
            </span>
            <div className="nft_pic_wrap">
             <RippleGraph id="ripple" />
            </div>
          </div>
        </div>

       
      </Slider>
    </div>
  );
};
