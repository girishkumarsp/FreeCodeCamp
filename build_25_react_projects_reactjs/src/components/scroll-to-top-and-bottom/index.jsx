import { useRef } from "react";
import { useFetch } from "../use-fetch";

export default function ScrollToTopAndbottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomref = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomref.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) return <h1>Error occured ! Please try again</h1>;

  if (pending) return <h1>Loading ! Please Wait</h1>;
  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top seciton</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul>
        {data && data.products.length && data.products.length
          ? data.products.map((item) => (
              <li key={item.id}>
                {item.id}
                {item.title}
              </li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomref}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
