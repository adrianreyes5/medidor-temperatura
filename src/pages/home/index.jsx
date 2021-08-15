import React, { useEffect, useState } from "react";
import GaugeChart from "../../components/chart";

import firebase from "../../config/firebase";

import "./styles.css";

const Home = () => {
  const [The1, setThe1] = useState(null);
  const [The2, setThe2] = useState(null);
  const [The3, setThe3] = useState(null);
  const [The4, setThe4] = useState(null);

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

  console.log("ref1", The1);
  console.log("ref2", The2);
  console.log("ref3", The3);
  console.log("ref4", The4);

  return (
    <div className="home">
      {The1 !== null && The2 !== null && The3 !== null && The4 !== null && (
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            paddingTop: 200,
          }}
        >
          <GaugeChart title="Therm 1" value={The1} />
          <GaugeChart title="Therm 2" value={The2} />
          <GaugeChart title="Therm 3" value={The3} />
          <GaugeChart title="Therm 4" value={The4} />
        </div>
      )}
    </div>
  );
};

export default Home;
