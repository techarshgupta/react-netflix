import React from 'react';
import { Accordian } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer(props) {
  return (
    <Accordian {...props}>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      {faqsData.map((faq) => (
        <Accordian.Item key={faq.id}>
          <Accordian.Header>{faq.header}</Accordian.Header>
          <Accordian.Body>{faq.body}</Accordian.Body>
        </Accordian.Item>
      ))}
    </Accordian>
  );
}
