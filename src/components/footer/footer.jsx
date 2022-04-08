import React from "react";
import "./footer.css"

export function Foot() {
  return (
    <footer className="leFoot">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit perferendis, quidem optio earum quasi sed nesciunt, ratione quis magni consequatur dolores ullam nulla repellendus quisquam accusamus! Itaque ea tempore repellat?
        <br />
        Made with ElonMusk's love © 2016 - 2022.
      </p>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            role: "img",
          }}
          className="crayons-icon crayons-icon--default c-link__icon"
        >
          <title>Forem logo</title>
          <g clip-path="url(#clip0)" fill="#1AB3A6">
            <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
          </g>
        </svg>
      </div>
    </footer>
  );
}


