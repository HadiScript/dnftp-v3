//@ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import NFTItem from "./NFTItem";
import { DataListNFTs } from "../../Data/ListNft";
import { useAccount, useListedNfts } from "../../hooks/web3";
import axios from "axios";
import { API } from "../../config/API";
import { UserContext } from "../../context";
import { toast } from "react-toastify";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

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

const ListNFTs = () => {
  const { nfts } = useListedNfts();
  const [state] = useContext(UserContext);
  const { account } = useAccount();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const [allNfts, setAllNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLike = async (_id: any) => {
    // console.log("like", _id)
    try {
      const { data } = await axios.put(`${API}/like-nft`, {
        nftID: _id,
        logedIn: state.user ? true : false,
        logedIn_id: state.user && state.user._id,
      });
      // console.log(data, "like data")
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    return account.data
      ? nfts.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.category.toLowerCase().includes(search)
        )
      : allNfts.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.category.toLowerCase().includes(search)
        );
  };

  const handleUnlike = async (_id: any) => {
    // console.log("like", _id)
    try {
      const { data } = await axios.put(`${API}/unlike-nft`, {
        nftID: _id,
        logedIn: state.user ? true : false,
        logedIn_id: state.user && state.user._id,
      });
      // console.log(data, "unlike data")
    } catch (error) {
      console.log(error);
    }
  };

  const fetchingAllNfts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/getting-all`);
      setAllNfts(data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);

      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchingAllNfts();
  }, []);

  return (
    <>
      <section className="container">
        <div className="col-md-3 col-sm-6 col-xs-1">
          <div className="widget">
            <h5>
              Search <BiSearch />
            </h5>
            <form
              action="#"
              className="row form-dark"
              id="form_subscribe"
              method="post"
              name="form_subscribe"
            >
              <div className="col text-center">
                <input
                  className="form-control"
                  id="txt_subscribe"
                  type="text"
                  placeholder="Search NFT"
                  value={search}
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
            <small>
              Explore more nfts{" "}
              <Link
                style={{ color: "blue", cursor: "pointer" }}
                href={"/dnftp/explore"}
              >
                <a>Tap here</a>
              </Link>
            </small>
          </div>
        </div>

        <div className="row">
          {loading && <p>loading...</p>}
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={300}
            duration={600}
            cascade
          >
            <h2>All Hot NFTs</h2>
          </Reveal>
          <div className="col-lg-12 mb-2">{/* <h2>NFTs</h2> */}</div>
          {account.data ? (
            nfts.data.map((nft: any, index) => (
              <div
                key={index}
                className="d-item  col-lg-3 col-md-6 col-sm-6 col-xs-12"
              >
                <Reveal
                  className="onStep"
                  keyframes={fadeInUp}
                  delay={300}
                  duration={600}
                  cascade
                >
                  <NFTItem nft={nft} buyNft={nfts.buyNft} />
                </Reveal>
              </div>
            ))
          ) : (
            <>
              {handleSearch().map((nft: any, index) => (
                <div
                  key={index}
                  className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                >
                  <Reveal
                    className="onStep"
                    keyframes={fadeInUp}
                    delay={300}
                    duration={600}
                    cascade
                  >
                    <NFTItem nft={nft} offline={true} />
                  </Reveal>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ListNFTs;
