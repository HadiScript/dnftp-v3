//@ts-nocheck
// import "./Banu.module.css"

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { API } from "../../config/API";
import { UserContext } from "../../context";

import { GlobalStyles } from "../../styles/page-style/GlobalStyles";
import AuthorItems from "../../UI/components2/AuthorItems";
import Searching from "../../UI/components2/Searching";

const Authors = () => {
  const [state] = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [usersHighCollectionsNfts, setUsersHighCollectionsNfts] = useState([]);
  const [topSellers, setTopSellers] = useState([]);
  const [sellerLoading, setSellerLoading] = useState(false);
  const [collectionLoading, setCollectionLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchingTopSellers();
    fetchingAllUsers();
    fetchingHighCollectionsUsers();
  }, []);

  const fetchingTopSellers = async () => {
    try {
      setSellerLoading(true);
      const { data } = await axios.get(`${API}/top-sellers`);
      setTopSellers(data);
      setSellerLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const fetchingHighCollectionsUsers = async () => {
    try {
      setCollectionLoading(true);
      const { data } = await axios.get(`${API}/high-collections`);
      setUsersHighCollectionsNfts(data);
      setCollectionLoading(false);
    } catch (error) {
      setCollectionLoading(false);
      console.log(error);
    }
  };

  const fetchingAllUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/all-users`);
      setLoading(false);
      setUsers(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <GlobalStyles />
      <section
        className="jumbotron breadcumb no-bg"
        style={{ backgroundImage: `url(${"/img/background/subheader.jpg"})` }}
      >
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row m-10-hor">
              <div className="col-12">
                <h1 className="text-center">Authors</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* right box */}
      <section className="bg">
        <div className="row">
          <div className="col-lg-3 offset-lg-1 mb-5 ">
            <div className="nft__item m-0">
              <Searching />
              {state && state.user && state.user.following && (
                <Link href={"/user/following"}>
                  <a className="h6"> {state.user.following.length} Following</a>
                </Link>
              )}
            </div>
          </div>

          <div className="col-lg-8 col-sm-6 col-xs-12">
            <div className="row">
              <h5>All Authors</h5>
              {loading && <p>loading...</p>}
              {users && users.map((x) => <AuthorItems user={x} key={x._id} />)}
            </div>

            <div className="row">
              <h5>Top Collections</h5>
              {collectionLoading && <p>loading...</p>}
              {usersHighCollectionsNfts &&
                usersHighCollectionsNfts.map((x) => (
                  <AuthorItems user={x} key={x._id} />
                ))}
            </div>

            <div className="spacer-20"></div>
            <div className="row">
              <h5>Top Sellers</h5>
              {sellerLoading && <p>loading...</p>}
              {topSellers &&
                topSellers.map((x) => <AuthorItems user={x} key={x._id} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authors;
