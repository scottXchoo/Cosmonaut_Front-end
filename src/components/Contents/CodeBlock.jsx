import React from "react";

function CodeBlock(props) {
  return (
    <>
      <code class="inline-block w-fit leading-snug bg-indigo-100 bg-opacity-20 font-bold px-1 rounded-sm text-orange-400">
        {props.children}
      </code>
    </>
  );
}

export default CodeBlock;