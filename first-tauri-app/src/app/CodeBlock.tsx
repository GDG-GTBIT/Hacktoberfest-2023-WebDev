import React from "react";

interface CodeBlockProps {
  sign: string;
  code: string;
}

const CodeBlock = ({ sign, code }: CodeBlockProps) => {
  return (
    <div className="mockup-code bg-[#E9B384] text-[#000000] shadow-xl m-5 text-[20px]">
      {sign ? (
        <pre data-prefix={sign}  >
          <code> {code} </code>
        </pre>
      ) : (
        <code> {code} </code>
      )}
    </div>
  );
};

export default CodeBlock;
