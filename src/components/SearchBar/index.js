import React, { useEffect, useState } from "react";
import Loader from "../../controls/Loader";
import useAlert from "../../hooks/useAlert";
import { getAllGist } from "../../utils/api";
import DebounceField from "../common/DebounceFeild";
import Gist from "./Gist";
import "./index.css";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const Alert = useAlert();
  const [data, setData] = useState(null);
  const [totalGist, setTotalGist] = useState(null);

  const getAllGistForUser = async (userName) => {
    setLoading(true);
    setData([]);
    setTotalGist(null);
    const res = await getAllGist(userName);
    setLoading(false);

    if (res?.message) {
      return Alert(res.message, "error");
    }
    setData(res);
    setTotalGist(res.length);
  };
  useEffect(() => {
    if (!!keyword) {
      getAllGistForUser(keyword);
    }
  }, [keyword]);

  return (
    <>
      <div className="debounceField">
        <DebounceField value={keyword} onUpdate={setKeyword} />

        {totalGist >=0 ? <div>Total Number of Gist: {totalGist}</div>:null}
        {data && data?.length ? data.map((gist,i) => <Gist key={i} gist={gist} />) : null}

        <Gist />
      </div>
      {loading && <Loader />}
    </>
  );
};

export default SearchBar;
