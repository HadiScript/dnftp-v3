import React from "react";

import { createGlobalStyle } from "styled-components";
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

const GlobalStyles = createGlobalStyle`
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .navbar .mainside a{
    background: #8364e2;
    &:hover{
      box-shadow: 2px 2px 20px 0px #8364e2;
    }
  }
  .item-dropdown{
    .dropdown{
      a{
        &:hover{
          background: #8364e2;
        }
      }
    }
  }
  .btn-main{
    background: #8364e2;
    &:hover{
      box-shadow: 2px 2px 20px 0px #8364e2;
    }
  }
  p.lead{
    color: #a2a2a2;
  }
  .navbar .navbar-item .lines{
    border-bottom: 2px solid #8364e2;
  }
  .jumbotron.no-bg{
    height: 100vh;
    overflow: hidden;
    background-repeat: repeat;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  #tsparticles{
    top: 0;
  }
  .text-uppercase.color{
    color: #8364e2;
  }
  .de_count h3 {
    font-size: 36px;
    margin-bottom: 0px;
  }
  .de_count h5{
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
  }
  .box-url{
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
  .de_countdown{
    border: solid 2px #8364e2;
  }
  .author_list_pp, .author_list_pp i, 
  .nft_coll_pp i, .feature-box.style-3 i, 
  footer.footer-light #form_subscribe #btn-subscribe i, 
  #scroll-to-top div{
    background: #8364e2;
  }
  footer.footer-light .subfooter .social-icons span i{
    background: #403f83;
  }
  .author_list_pp:hover img{
    box-shadow: 0px 0px 0px 2px #8364e2;
  }
  .nft__item_action span{
    color: #8364e2;
  }
  .feature-box.style-3 i.wm{
    color: rgba(131,100,226, .1);
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      
    }
    #lg-hide{
      display : none;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const about = () => {
  return (
    <>
      <GlobalStyles />
      <section className="bg container">
        <div className="spacer-double"></div>
        <div className="row">
          <div className="col-md-3">
            <div className="item_filter_group">
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={0}
                duration={600}
                cascade
              >
                <div>
                  <h4>List of abbreviation</h4>
                  DApp – Decentralized App <br />
                  DNFTP –Development of NFTs Platform <br />
                  NFTs – Non-Fungible Tokens <br />
                  P2P –Peer to Peer Network <br />
                  ETH – Ethereum
                  <br />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="col-md-8">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              cascade
            >
              <div>
                <h4>Abstract</h4>
                <p>
                  <b style={{textDecoration : "bold"}} >
                    {" "}
                    Development of NFTs Platform (DNFTP) is web3 decentralized
                    (blockchain) application{" "}
                  </b>{" "}
                  for those who want to buy and sell NFTs by using secure app
                  and Ganache Network with digital currency. The primary
                  objective of this DNFTP DApp is to supervise all transactions
                  and to resolve all issues during transactions like Rug Pulls,
                  much more Gas Fee and lack of communication . This DNFTP DApp
                  also helps buyers and sellers to make links with each other.
                  This DNFTP DApp can prove to be very helpful to any user who
                  already has NFTs and MetaData. By this platform users are able
                  to do transactions with metamask with Ethereum currency. Users
                  are also able to see all of his transactions and all the stats
                  of this DNFTP DApp in mobile application (Android and Ios)
                </p>
                <br />
              </div>
            </Reveal>

            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              cascade
            >
              <div>
                <h4>Introduction</h4>
                <p>
                  Non Fungible Tokens (NFTs) first developed in 2012. It was an
                  early era of the NFTs market. “Colored coins” concept for the
                  bitcoin blockchain was introduced in this era. In 2017-2020
                  NFTs goes to the mainstream market, it shifts to Ethereum.
                  Token standard was also introduced in this tenure. After this,
                  2021 is the year of NFTs. The Beeple NFTs are sold for a
                  record amount. Development of Non fungible Tokens NFTs
                  Platform (DNFTP) is the complete NFTs marketplace for buying
                  and selling NFTs by using ETH digital currency. It will be a
                  multi-vendor decentralized blockchain based application.
                </p>
                <br />
              </div>
            </Reveal>

            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              cascade
            >
              <div>
                <h4>What is a Decentralized Application?</h4>
                <p>
                  A decentralized app (DApp) is an application that runs on a
                  peer-to-peer (P2P) blockchain network rather than on a single
                  computer. These DApp are made with two things one is frontend
                  that is used for interaction with system and other one is
                  smart contract which is used to complete the transaction
                  between two parties
                </p>
                <br />
              </div>
            </Reveal>

            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              cascade
            >
              <div>
                <h4>What are NFTs?</h4>
                <p>
                  Non fungible tokens NFTs are cryptographic assets that are
                  created on blockchain technology, and have unique
                  identification codes and metadata, which makes them
                  distinguishable, distinct and completely unique these millions
                  worth tokens are being securely transacted across
                  decentralized platform called NFTs marketplace. It can't be
                  copied, substituted and sub-divided that is obtained in a
                  blockchain.
                </p>
                <br />
              </div>
            </Reveal>

            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              cascade
            >
              <div>
                <h4>Problem statement</h4>
                <p>
                  As there are many DApp available in the market for selling and
                  buying NFTs but also having some major problems like Rug
                  Pulls, much more Gas Fee and lack of communication between
                  buyer and seller.
                </p>
                <br />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
