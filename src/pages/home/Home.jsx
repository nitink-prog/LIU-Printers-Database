import PrinterList from "../../components/PrinterList";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

export default function Home() {
  let {
    data: printers,
    isPending,
    error,
  } = useFetch("http://localhost:3008/printers");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {printers && <PrinterList printers={printers} />}
    </div>
  );
}
