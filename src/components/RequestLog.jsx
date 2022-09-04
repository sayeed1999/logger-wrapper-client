import React, { useState } from "react";
import Code from './Code';
import { Col, Row } from 'antd';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';

// parameter 'log' will be of property 'RequestLogDataObject' model
const RequestLog = ({ log }) => {
    const [hide, setHide] = useState(true);

    return <>
        <Row>
            <Col span={6}>
                {log.createdDateUtc }
            </Col>
            <Col span={18} style={{ background: 'azure', marginTop: '5px' }}>
                Log Object <span> {hide ? <DownCircleOutlined onClick={() => setHide(false)} /> : <UpCircleOutlined onClick={() => setHide(true)} />} </span>
                {!hide && Object.keys(log).map((x, index) => 
                    <Row key={index}>
                        <Col span={6} style={{fontWeight: '500'}}> {x} </Col>
                        <Col span={18}>
                        {   
                            log[x] == ''
                            ? "''"
                            : x == 'sqlQuery'
                            ? <Code language='sql' code={log[x]} />
                            : typeof(log[x]) == 'string'
                            ? log[x]
                            : typeof(log[x]) == 'number'
                            ? log[x]
                            : log[x] == null
                            ? 'null'
                            : typeof(log[x]) == 'object' 
                            ? <Code language='json' code={JSON.stringify(log[x])} />
                            : null
                        }
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    </>;
};

// React.memo() skips component re-renders unless a component prop changes!!
export default React.memo(RequestLog);