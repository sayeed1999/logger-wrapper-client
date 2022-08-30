import React, { useState } from "react";
import Code from './Code';
import { Col, Row } from 'antd';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';


const SqlLog = ({ log }) => {
    const [hide, setHide] = useState(true);

    return <>
        <Row>
            <Col span={6}>
                {log.datetime}
            </Col>
            <Col span={18} style={{ background: 'azure', marginTop: '5px' }}>
                Lifeline Db Query <span> {hide ? <DownCircleOutlined onClick={() => setHide(false)} /> : <UpCircleOutlined onClick={() => setHide(true)} />} </span>
                {!hide && Object.keys(log.queryObject).map((x, index) => 
                    <Row key={index}>
                        <Col span={6} style={{fontWeight: '500'}}> {x} </Col>
                        <Col span={18}>
                            {x !== 'query' && log.queryObject[x]}
                            {x === 'query' && <Code language='sql' code={log.queryObject[x]} />}
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    </>;
};

// React.memo() skips component re-renders unless a component prop changes!!
export default React.memo(SqlLog);