import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Reveal from "react-awesome-reveal";
import { toast } from "react-toastify";
import { API } from "../../config/API";
import { GlobalStyles } from "../../styles/page-style/GlobalStyles";
import ListNFTs from "../../UI/components2/ListNFTs";
import { keyframes } from "@emotion/react";
import NFTItem from "../../UI/components2/NFTItem";
import SliderProton from "../../UI/components2/SliderProtron";

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

const Explore = () => {
  const [allnfts, setAllNfts] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultsFound, setResultsFound] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([0.5, 300]);

  const [category, setCategory] = useState([
    { id: "12312", checked: false, label: "Art" },
    { id: "sdada", checked: false, label: "GIF" },
    { id: "1231sda", checked: false, label: "Painting" },
    { id: "213asdcx", checked: false, label: "Graphics" },
    { id: "ssd", checked: false, label: "Memes" },
    { id: "asdx", checked: false, label: "Virtual Fashion" },
    { id: "asd32", checked: false, label: "Event tickets" },
    { id: "knlk2", checked: false, label: "Sports" },
  ]);

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const handleChangeChecked = (id) => {
    const categoryStateList = category;
    const changeCheckedcategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategory(changeCheckedcategory);
  };

  const handleSearch = () => {
    return allnfts.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.category.toLowerCase().includes(search)
    );
  };

  const applyFilters = () => {
    let updatedList = allnfts && allnfts;

    // Rating Filter
    // if (selectedRating) {
    //   updatedList = updatedList.filter(
    //     (item) => parseInt(item.rating) === parseInt(selectedRating)
    //   );
    // }

    // Category Filter
    // if (selectedCategory) {
    //   updatedList = updatedList.filter(
    //     (item) => item.category === selectedCategory
    //   );
    // }

    // Cuisine Filter
    const cuisinesChecked = category
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.category)
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setFilteredList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  const fetchingFilteredNFTs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/filtered/`);

      setAllNfts(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    fetchingFilteredNFTs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [category, selectedPrice]);

  return (
    <>
      <GlobalStyles />

      <section className="container">
        <div className="row">
          {loading && <p>loading...</p>}
          <div className="spacer-double"></div>

          <div className="col-md-3">
            <div className="item_filter_group">
              <h4>Search</h4>
              <div className="widget">
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
                <small>Search by name or category </small>
              </div>
            </div>

            <div className="item_filter_group">
              <h4>By Eth</h4>
              <div className="de_form">
                <div className="de_checkbox">
                  <SliderProton
                    value={selectedPrice}
                    changePrice={handleChangePrice}
                  />
                  <label htmlFor="check_cat_2">low to highest</label>
                </div>
              </div>
            </div>

            {/* category sorting */}
            <div className="item_filter_group">
              <h4>By Category</h4>
              <div className="de_form">
                {category.map((x) => (
                  <div key={x.id} className="my-3 ">
                    <div
                      className="de_checkbox "
                      onClick={() => {
                        handleChangeChecked(x.id);
                        console.log(x.id);
                        console.log(category);
                      }}
                    >
                      <input
                        id={"check_cat_" + x.id}
                        name={"check_cat_" + x.id}
                        type="checkbox"
                        checked={x.checked}
                      />
                      <label htmlFor="check_cat_2">
                        {x.label} {x.checked}{" "}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              {resultsFound &&
                filteredList &&
                filteredList.map((nft, index) => (
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

              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={300}
                duration={600}
                cascade
              >
                <h2>All Hot NFTs</h2>
              </Reveal>
              {allnfts &&
                handleSearch().map((nft, index) => (
                  <div
                    key={index}
                    className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
