import * as React from 'react';
import './Accordion.scss';
import { Accordion, Card } from 'react-bootstrap';
import { TEMPLATES } from '../../../constants';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccordionComp = (props) => {
  return (
    <Accordion defaultActiveKey="0">
      {
        TEMPLATES.map((template) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle variant="link" eventKey={template.id}>
                {template.label}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={template.id}>
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))
      }
    </Accordion>
  )
};

export default AccordionComp;
