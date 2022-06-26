import React from 'react';
import { Accordian, OptForm } from '../components';
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

      <OptForm>
        <OptForm.Input placeholder="Enter your email" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
      </OptForm>
    </Accordian>
  );
}
