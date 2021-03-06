import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import PrinterList from "../../components/PrinterList";
import { db } from "../../firebase/config";
import "./Search.css";

export default function Search() {
  const [printers, setPrinters] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { mode } = useTheme();

  // get searchQuery out of the URL
  const queryString = useLocation();
  const trimString = queryString.search.substring(3);
  const searchQuery = trimString.replace("%20", " ");

  useEffect(() => {
    setIsPending(true);
    const q = db
      .collection("recipes")
      .where("title", ">=", searchQuery)
      .get()
      .then((querySnapshot) => {
        let results = [];
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setPrinters(results);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err);
      });
    return () => {
      setPrinters(null);
    };
  }, [searchQuery]);

  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title">Recipes including "{searchQuery}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {printers && <PrinterList printers={printers} />}
    </div>
  );
}
