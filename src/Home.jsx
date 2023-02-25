import { useEffect, useState } from "react";
import Arrow from "./assets/icon-arrow.svg";
import Map from "./components/Map";
import Outputs from "./components/Outputs";

const Home = () => {
  const [ipAdd, setIpAdd] = useState("");
  const [data, setData] = useState(null);
  const url = `//ipwho.is/${ipAdd}`;

  function getGeoIp() {
    try {
      const getGeoIp = fetch(url)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      const printAdd = async () => {
        const data = await getGeoIp;
        setData(data);
      };
      printAdd();
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getGeoIp();
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIpAdd(e.target.elements.ip.value);
    getGeoIp();
  };

  return (
    <div className="container">
      <div className="header">
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="ip"
            placeholder=" Search for any IP address"
          />
          <button className="btn" type="submit">
            <img src={Arrow} alt=">" />
          </button>
        </form>
        {data && <Outputs geoData={data} />}
      </div>
      {data && <Map data={[data.latitude, data.longitude]} />}
    </div>
  );
};

export default Home;
