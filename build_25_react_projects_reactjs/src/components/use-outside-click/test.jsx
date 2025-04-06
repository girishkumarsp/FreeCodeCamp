import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutSideTest() {
  const [showContent, setShowContent] = useState(false);
  const myref = useRef();
  useOutsideClick(myref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={myref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. this won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
