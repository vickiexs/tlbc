import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/about");
  }, []);
  return <h1 style={{ marginTop: "200px" }}>HOME PAGE</h1>;
}
