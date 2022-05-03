import { useState, useEffect } from "react";
import PrinterList from "../../components/PrinterList";
import { db } from "../../firebase/config";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

export default function Home() {
  // const [printers, setPrinters] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  // let { data: printers } = useFetch("http://localhost:3008/printers");
  let printers = [
    {
      id: 100,
      building: "HS",
      date_updated: "2022-04-20",
      department: "Pharmaceutics",
      mac_address: "60:12:8B:D5:0E:5B",
      model: "4235",
      name: "B-HS-604-1",
      room: "12345678",
      serial: "RKJ18475",
    },
    {
      id: 101,
      building: "S",
      date_updated: null,
      department: "Health Professions",
      mac_address: "D8:49:2F:C1:CE:6A",
      model: "4235",
      name: "B-HS-HealthProf-1",
      room: "307",
      serial: "SKA04601",
    },
  ];
  console.log(printers);

  // useEffect(() => {
  //   setIsPending(true);
  //   const unSubscribe = db.collection("printers").onSnapshot(
  //     (snapshot) => {
  //       if (snapshot.empty) {
  //         setIsPending(false);
  //         setError("No printers found!");
  //       } else {
  //         let results = [];
  //         snapshot.docs.forEach((doc) => {
  //           results.push({ id: doc.id, ...doc.data() });
  //         });
  //         setPrinters(results);
  //         setIsPending(false);
  //       }
  //     },
  //     (err) => {
  //       setError(err.message);
  //       setIsPending(false);
  //     }
  //   );
  //   // Clean-up function: unsubscribe from the listener above when <Home /> unmounts
  //   // prevents this useEffect from running when we're on a different page
  //   return () => unSubscribe();
  // }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {printers && <PrinterList printers={printers} />}
    </div>
  );
}
