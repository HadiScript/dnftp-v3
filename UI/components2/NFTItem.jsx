//@ts-nocheck
import axios from "axios";
import Link from "next/link";
import { Nft } from "../../types/nft";
import { API } from "../../config/API";
import styled from "styled-components";
import React, { useState } from "react";
import { useAccount } from "../../hooks/web3";
import { toast } from "react-toastify";
import { BiWalletAlt } from "react-icons/bi";
import Tilt from "react-parallax-tilt";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 260px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const NFTItem = ({ nft, offline }) => {
  const [scale] = useState(1.04);
  const { account } = useAccount();
  const [height, setHeight] = useState(0);

  const goingToBuyNft = async (x) => {
    try {
      const boughtNft = await axios.post(`${API}/buy-nft`, {
        buyer: account.data,
        item: x,
      });
      console.log(boughtNft, "from nft items");
    } catch (error) {
      console.log(error);
    }
  };

  const onImageLoad = ({ target: img }) => {
    let currentHeight = height;
    if (currentHeight < img.offsetHeight) {
      setHeight({
        height: img.offsetHeight,
      });
    }
  };

  const desp = offline ? nft.description : nft.meta.description;

  return (
    <>
      <Tilt scale={scale} transitionSpeed={4000}>
        <div className="d-item">
          <div className="nft__item">
            <div className="nft__item_wrap">
              <Tilt scale={1.2} transitionSpeed={5000}>
                <Outer>
                  <span>
                    <img
                      src={!offline ? nft.meta.image : nft.image}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </span>
                </Outer>
              </Tilt>
            </div>
            <div className="nft__item_info">
              <span>
                <h4>
                  <Link
                    href={`/dnftp/nft/${offline ? nft.name : nft.meta.name}`}
                  >
                    <a style={{ textDecoration: "none", color: "white" }}>
                      {" "}
                      {!offline ? nft.meta.name : nft.name}{" "}
                    </a>
                  </Link>
                </h4>
              </span>
              <div className="nft__item_price">{nft.price} ETH</div>
              <div className="nft__item_action">
                <span>
                  {`${desp[2]}${desp[3]}${desp[4]}....${desp.slice(-4)}`}
                </span>
              </div>
              <div
                className="nft__item_like"
                onClick={() => {
                  toast(
                    <div>
                      <p
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {" "}
                        Connect Your Wallet{" "}
                        <BiWalletAlt size={20} color="white" />
                      </p>
                    </div>,
                    {
                      position: "bottom-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                }}
              >
                <i className="fa fa-heart"></i>
                <span>{nft.likes && nft.likes.length}</span>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default NFTItem;
