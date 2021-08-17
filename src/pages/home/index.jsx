import React, { useEffect, useState } from "react";
import GaugeChart from "../../components/gauge-chart";
import LineChart from "../../components/line-chart";

import firebase from "../../config/firebase";

import { BeatLoader } from "react-spinners";

import "./styles.css";

const Home = () => {
  const [The1, setThe1] = useState(0);
  const [The2, setThe2] = useState(0);
  const [The3, setThe3] = useState(0);
  const [The4, setThe4] = useState(0);

  const [selectedTherm, setSelectedTherm] = useState(null);
  const [selectedThermTitle, setSelectedThermTitle] = useState(null);
  const [showLineChart, setShowLineChart] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ref1 = firebase.database().ref("/Refrigerador/TThe1").limitToLast(1);
    let ref2 = firebase.database().ref("/Refrigerador/TThe2").limitToLast(1);
    let ref3 = firebase.database().ref("/Refrigerador/TThe3").limitToLast(1);
    let ref4 = firebase.database().ref("/Refrigerador/TThe4").limitToLast(1);

    /** gauge 1 */
    ref1.on("value", function (snapshot) {
      ref1 = snapshot.val();
      if (ref1) {
        var currentValue;
        var The1 = [];
        for (var key in ref1) {
          currentValue = ref1[key];
          The1.push(currentValue);
        }
      }
      ref1 = The1[0];
      setThe1(parseFloat(ref1.toFixed(1)));
    });

    /** gauge 2 */
    ref2.on("value", function (snapshot) {
      ref2 = snapshot.val();
      if (ref2) {
        var currentValue;
        var The1 = [];
        for (var key in ref2) {
          currentValue = ref2[key];
          The1.push(currentValue);
        }
      }
      ref2 = The1[0];
      setThe2(parseFloat(ref2.toFixed(1)));
    });

    /** gauge 3 */
    ref3.on("value", function (snapshot) {
      ref3 = snapshot.val();
      if (ref3) {
        var currentValue;
        var The1 = [];
        for (var key in ref3) {
          currentValue = ref3[key];
          The1.push(currentValue);
        }
      }
      ref3 = The1[0];
      setThe3(parseFloat(ref3.toFixed(1)));
    });

    /** gauge 4 */
    ref4.on("value", function (snapshot) {
      ref4 = snapshot.val();
      if (ref4) {
        var currentValue;
        var The1 = [];
        for (var key in ref4) {
          currentValue = ref4[key];
          The1.push(currentValue);
        }
      }
      ref4 = The1[0];
      setThe4(parseFloat(ref4.toFixed(1)));
    });
  }, []);

  const handleTherm = (value, title) => {
    setLoading(true);
    setSelectedTherm(value);
    setSelectedThermTitle(title);

    setTimeout(() => {
      setShowLineChart(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="home">
      {The1 !== null && The2 !== null && The3 !== null && The4 !== null && (
        <div className="container">
          <div>
            <h1
              style={{ color: "#fff", textAlign: "center", paddingBottom: 20 }}
            >
              Temperaturas
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <GaugeChart title="Therm 1" value={The1} />
                <GaugeChart title="Therm 2" value={The2} />
              </div>
              <div>
                <GaugeChart title="Therm 3" value={The3} />
                <GaugeChart title="Therm 4" value={The4} />
              </div>
            </div>
          </div>

          <div>
            <h1 style={{ color: "#fff", textAlign: "center", minWidth: 748 }}>
              Elegir gráfica
            </h1>

            <div className="button-wrapper">
              <div
                className="button"
                onClick={() =>
                  handleTherm("/Refrigerador/TThe1", "Termostato 1")
                }
              >
                Termostato 1
              </div>
              <div
                className="button"
                onClick={() =>
                  handleTherm("/Refrigerador/TThe2", "Termostato 2")
                }
              >
                Termostato 2
              </div>
              <div
                className="button"
                onClick={() =>
                  handleTherm("/Refrigerador/TThe3", "Termostato 3")
                }
              >
                Termostato 3
              </div>
              <div
                className="button"
                onClick={() =>
                  handleTherm("/Refrigerador/TThe4", "Termostato 4")
                }
              >
                Termostato 4
              </div>
            </div>

            {!loading ? (
              showLineChart && (
                <div
                  style={{
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 80,
                    paddingBottom: 80,
                  }}
                >
                  <LineChart
                    tth={selectedTherm}
                    dataLimit={500}
                    title={selectedThermTitle}
                  />
                </div>
              )
            ) : (
              <h1
                style={{ color: "#fff", textAlign: "center", marginTop: 200 }}
              >
                <BeatLoader color="#fff" />
              </h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
