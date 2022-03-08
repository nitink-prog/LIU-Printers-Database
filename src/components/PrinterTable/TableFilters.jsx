import { useEffect, useState } from "react";

export default function TableFilters({ url, setUrl }) {
  const [buildingFilter, setBuildingFilter] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChangeBuildingFilter = (e) => {
    setBuildingFilter(e.target.value);
  };
  useEffect(() => {
    setUrl(`http://localhost:3000/printers${buildingFilter}`);
  }, [buildingFilter]);

  return (
    <>
      <label>
        <select onChange={handleChangeBuildingFilter}>
          <option value="">All Buildings</option>
          <option value="?building=H">H - Humanities</option>
          <option value="?building=HS">HS - Health Sciences</option>
          <option value="?building=L">L - Pharmacy</option>
          <option value="?building=LLC">LLC - Library Learning Center</option>
          <option value="?building=M">M - Metcalfe</option>
          <option value="?building=P">P - Pratt</option>
          <option value="?building=S">S - Sloan</option>
        </select>
      </label>
      {!showAdvanced && (
        <button onClick={() => setShowAdvanced(true)}>Show Advanced</button>
      )}
      {showAdvanced && (
        <button onClick={() => setShowAdvanced(false)}>Hide Advanced</button>
      )}
    </>
  );
}
