import React from "react";
import Mapir from "mapir-react-component";
import "mapir-react-component/dist/index.css";

const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk2ZWZmYTBlMTFkOGRjMWU0OTYxNTczNGJmOWE2OTg2OTNiMDk4MDYwNzYxYTcyZDlhODBiOTA0NTczZTcwODEzMTA5ZmUwZTk1NjM1MDNjIn0.eyJhdWQiOiIyNTMwNiIsImp0aSI6Ijk2ZWZmYTBlMTFkOGRjMWU0OTYxNTczNGJmOWE2OTg2OTNiMDk4MDYwNzYxYTcyZDlhODBiOTA0NTczZTcwODEzMTA5ZmUwZTk1NjM1MDNjIiwiaWF0IjoxNzAyMzA5MTczLCJuYmYiOjE3MDIzMDkxNzMsImV4cCI6MTcwNDgxNDc3Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.B7mcFbUsvKphIqvPzaPP2Mu7qwARmXL27H5cao_rsa4wjKQ5K_NzZ1wkB2LWJswMDQOd1q2pxxE4U6wvgT57-NT4Hw0PtC8zlPZt_PbYu4XrdCoXpi2jMCLZtRCSTbOUfT0R-wuMRoGW38AuH9bL99mHg9qoi_FUQA0A_NzvC9hd23PPjSuOf7RlPLLD1Q_ExQ808jgrGsLoIcu1c6d4f2cvH0xpUWkmaYDXCtidpaiqowHNWp2NJUe4I4562ZgrxRYxcP4baEy5e9Hh83P3hF4MjC0yoVK3rC9gnbkmZW_WdPArjKSGVL0VrnsCIvJGqKPWJvTx11UHMr8eS2dpqQ", //Mapir api key
        "Mapir-SDK": "reactjs",
      },
    };
  },
});

const App = () => {
  return (
    <div className="relative">
      <Mapir
        style={"https://map.ir/vector/styles/main/mapir-style-dark.json"}
        zoom={[5]}
        onDrag={(e) => {
          console.log(e.getCenter());
        }}
        center={[51.42047, 35.729054]}
        Map={Map}
      ></Mapir>
      <div id="center-marker"></div>
    </div>
  );
};

export default App;
