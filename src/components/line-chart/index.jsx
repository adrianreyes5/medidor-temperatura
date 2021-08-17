/* eslint-disable no-loop-func */
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import firebase from "../../config/firebase";

const LineChart = ({ dataLimit, tth, title }) => {
  const [lineCharData, setLineCharData] = useState([["x", "Temperatura"]]);

  useEffect(() => {
    let temp = firebase.database().ref(tth).limitToLast(dataLimit);

    let hora = firebase
      .database()
      .ref("/Refrigerador/Hora")
      .limitToLast(dataLimit);
    let minutos = firebase
      .database()
      .ref("/Refrigerador/Minutos")
      .limitToLast(dataLimit);
    let dia = firebase
      .database()
      .ref("/Refrigerador/Dia")
      .limitToLast(dataLimit);
    let mes = firebase
      .database()
      .ref("/Refrigerador/Mes")
      .limitToLast(dataLimit);
    let año = firebase
      .database()
      .ref("/Refrigerador/Ano")
      .limitToLast(dataLimit);

    temp.on("value", function (snapshot) {
      temp = snapshot.val();
      if (temp) {
        var currentValue;
        var data = [];
        for (var key in temp) {
          currentValue = temp[key];
          data.push(currentValue);
        }
      }
      temp = data;
    });

    hora.on("value", function (snapshot) {
      hora = snapshot.val();
      if (hora) {
        var currentValue;
        var data = [];
        for (var key in hora) {
          currentValue = hora[key];
          data.push(parseFloat(currentValue));
        }
      }
      hora = data;
    });

    minutos.on("value", function (snapshot) {
      minutos = snapshot.val();
      if (minutos) {
        var currentValue;
        var data = [];
        for (var key in minutos) {
          currentValue = minutos[key];
          data.push(parseFloat(currentValue));
        }
      }
      minutos = data;
    });

    dia.on("value", function (snapshot) {
      dia = snapshot.val();
      if (dia) {
        var currentValue;
        var data = [];
        for (var key in dia) {
          currentValue = dia[key];
          data.push(parseFloat(currentValue));
        }
      }
      dia = data;
    });

    mes.on("value", function (snapshot) {
      mes = snapshot.val();
      if (mes) {
        var currentValue;
        var data = [];
        for (var key in mes) {
          currentValue = mes[key];
          data.push(parseFloat(currentValue));
        }
      }
      mes = data;
    });

    año.on("value", function (snapshot) {
      año = snapshot.val();
      if (año) {
        var currentValue;
        var data = [];
        for (var key in año) {
          currentValue = año[key];
          data.push(parseFloat(currentValue));
        }
      }
      año = data;
    });

    setTimeout(() => {
      for (let index = 0; index < dataLimit; index++) {
        setLineCharData(prev => [
          ...prev,
          [
            new Date(
              año[index],
              mes[index] - 1,
              dia[index],
              hora[index],
              minutos[index],
              0,
              0
            ),
            temp[index],
          ],
        ]);
      }
    }, 1000);
  }, [dataLimit, tth]);

  return (
    <>
      {lineCharData.length > 499 && (
        <Chart
          width={"800px"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Cargando....</div>}
          data={lineCharData}
          options={{
            title,
            hAxis: {
              title: "Tiempo",
            },
            vAxis: {
              title: "Temperatura (°C)",
              ticks: [-20, 0, 20, 40],
            },
            animation: {
              startup: true,
              easing: 'inAndOut',
              duration: 1000,
            },
          }}
        />
      )}
    </>
  );
};

export default LineChart;
