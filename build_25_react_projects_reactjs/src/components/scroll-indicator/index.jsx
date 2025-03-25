import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop; //pixels the user has scrolled from the top

      // Total Scrollable Height (entire webpage - viewport (screen size) )
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // document.documentElement.scrollHeight: This gets the total height of the entire document, including the part that is not currently visible.
    // document.documentElement.clientHeight: This gets the height of the viewport (the part of the page visible on the screen).

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMessage) {
    return <div>Error! {errorMessage}</div>;
  }
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  console.log(data, scrollPercentage);
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => <p className="mytitles">{item.title}</p>)
          : null}
      </div>
    </div>
  );
}
