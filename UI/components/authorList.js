import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API } from "../../config/API";

const authorlist = () => {
  const router = useRouter();
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchingAllUsers();
  }, []);

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
      <ol className="author_list">
        {loading && <p>loading...</p>}
        {user &&
          user.map((x, index) => (
            <li key={index}>
              <div className="author_list_pp">
                <span
                  onClick={() => router.push(`/dnftp/vendors/${user.account}`)}
                >
                  <img
                    className="lazy"
                    src={
                      x.image && x.image.url
                        ? x.image.url
                        : "/img/author/author-11.jpg"
                    }
                    alt=""
                  />
                  <i className="fa fa-check"></i>
                </span>
              </div>
              <div className="author_list_info">
                <span onClick={() => window.open("", "_self")}>
                  {x.name ? x.name : "some one"}
                  <span className="bot">
                    {x.following &&
                      x.following.length + x.followers &&
                      x.followers.length}{" "}
                    <i className="fa fa-link" style={{ color: "#8364e2" }}></i>
                  </span>
                </span>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};
export default authorlist;
