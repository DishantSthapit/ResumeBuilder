import * as React from 'react';
import './Accordion.scss';
import { useHistory } from "react-router-dom";
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccordionComp = (props) => {
  const history = useHistory();
  const {templates} = props;
  return (
    <Accordion defaultActiveKey="1">
      {
        templates && templates.map((template) => (
          <Card key={template.id}>
            <Card.Header>
              <Accordion.Toggle variant="link" eventKey={template.id}>
                {template.label}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={template.id}>
              <><button onClick={()=> history.push("/template")}>Test</button>
              <button onClick={()=> history.push("/template")}>Test</button><button onClick={()=> history.push("/template")}>Test</button><button onClick={()=> history.push("/template")}>Test</button><button onClick={()=> history.push("/template")}>Test</button><button onClick={()=> history.push("/template")}>Test</button><button onClick={()=> history.push("/template")}>Test</button><button onClick={()=> history.push("/template")}>Test</button><button onClick={()=> history.push("/template")}>Test</button></>
            </Accordion.Collapse>
          </Card>
        ))
      }
    </Accordion>
  )
};

export default AccordionComp;
