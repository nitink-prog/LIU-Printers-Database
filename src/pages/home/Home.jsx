import { useState, useEffect } from "react";
import PrinterList from "../../components/PrinterList";
import { db } from "../../firebase/config";
import "./Home.css";

export default function Home() {
  const [printers, setPrinters] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unSubscribe = db.collection("printers").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setIsPending(false);
          setError("No printers found!");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setPrinters(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    // Clean-up function: unsubscribe from the listener above when <Home /> unmounts
    // prevents this useEffect from running when we're on a different page
    return () => unSubscribe();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {printers && <PrinterList printers={printers} />}
    </div>
  );
}
