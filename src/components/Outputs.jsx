const Outputs = ({ geoData }) => {
  return (
    <div className="outputs">
      <div className="output">
        <h3>IP Address</h3>
        <h2 className="ipAddress">{geoData ? geoData.ip : "..."}</h2>
      </div>
      <div className="output">
        <h3>Location</h3>
        <h2 className="location">{geoData ? geoData.city : "..."}</h2>
      </div>
      <div className="output">
        <h3>Timezone</h3>
        <h2 className="timezone">{geoData ? geoData.timezone.utc : "..."}</h2>
      </div>
      <div className="output">
        <h3>ISP</h3>
        <h2 className="isp">{geoData ? geoData.connection.isp : "..."}</h2>
      </div>
    </div>
  );
};

export default Outputs;
