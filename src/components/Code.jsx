import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import ReactJson from "react-json-view";
import {format} from "sql-formatter";

const Code = ({language, code}) => {
  if (language === "json") return <ReactJson collapsed="true" src={JSON.parse(code)} />;
  if (language === "sql") return <SyntaxHighlighter language={language} code={format(code)} />;
  if (language) return <SyntaxHighlighter language={language} code={code} />;

  return <div> {code} </div>;
};

export default React.memo(Code);
