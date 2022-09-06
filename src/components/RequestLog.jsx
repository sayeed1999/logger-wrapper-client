import React, {useState} from "react";
import Code from "./Code";
import {Col, Row} from "antd";
import {DownOutlined, UpOutlined, CheckOutlined} from "@ant-design/icons";
import JsonPropertyView from "./JsonPropertyView";

// parameter 'log' will be of property 'RequestLogDataObject' model
const RequestLog = ({log}) => {
  const [hide, setHide] = useState(true);

  const call = (hide) => {
    console.log(hide);
    hide = !hide;
    setHide(hide);
  };

  const capitalizeFirstLetter = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  };

  return (
    <>
      <Row className={`${hide ? "log-row-collapsed" : "log-row-uncollapsed"} log-row`}>
        <Col className="log-column-key">
          {log.createdDateUtc}
        </Col>
        <Col className="log-column-value">
          <div className="log-title" onClick={() => call(hide)}>
            <span className="log-icon"> {hide ? <DownOutlined /> : <UpOutlined />} </span>
            <span className="log-type"> Request </span>
            <span className="log-status-code"> {log.statusCode} </span>
            {log.url}
          </div>
          {!hide && (
            <div className="log-properties" ngif>
              {Object.keys(log).map((x, index) => (
                <Row key={index}>
                  <Col className="log-column-property">
                    <CheckOutlined /> {capitalizeFirstLetter(x)}
                  </Col>

                  <Col className="log-column-property-value">
                    <JsonPropertyView value={log[x]} name={x} />
                    {/*                   
                    {log[x] == "" ? (
                      "''"
                    ) : x == "sqlQuery" ? (
                      <Code language="sql" code={log[x]} />
                    ) : typeof log[x] == "string" ? (
                      log[x]
                    ) : typeof log[x] == "number" ? (
                      log[x]
                    ) : log[x] == null ? (
                      "null"
                    ) : typeof log[x] == "object" ? (
                      <Code language="json" code={JSON.stringify(log[x])} />
                    ) : null} */}
                  </Col>
                </Row>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

// React.memo() skips component re-renders unless a component prop changes!!
export default React.memo(RequestLog);
