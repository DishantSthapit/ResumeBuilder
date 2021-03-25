import * as React from 'react';
import './Accordion.scss';
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TemplatePreview from '../Template/TemplatePreview/TemplatePreview';

const AccordionComp = (props) => {
  const { templates } = props;
  return (
    <Accordion defaultActiveKey="1">
      {
        templates && templates.map((template) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={template.id}>
              {template.label}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={template.id}>
              <TemplatePreview id={template.id} heading={template.heading} info={template.info} thumbnail={template.thumbnail} />
            </Accordion.Collapse>
          </Card>
        ))
      }
    </Accordion>
  )
};

export default AccordionComp;
