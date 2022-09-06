import React from "react";
import Code from "./Code";

const JsonPropertyView = ({value, name}) => {
  const param = typeof value;

  console.log(value, name, param);

  if(value === null || value === undefined || value === '') return null;
  if (param == null) return null;
  else if (param == undefined) return null;
  else if (param == "null") return "NULL";
  else if (param == "") return "";
  else if (param == "string" || param === "number") return value;
  else if (param == "object") return <Code language="json" code={JSON.stringify(value)} />;
  else if (name == "sqlQuery") return <Code language="sql" code={value} />;
  else return "";
};

export default React.memo(JsonPropertyView);
