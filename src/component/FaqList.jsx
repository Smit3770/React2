import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "Components are the building blocks of a React application's UI.",
  },
  {
    id: 3,
    question: "What is useState?",
    answer: "useState is a React Hook that lets you add state to functional components.",
  },
];

function FaqList() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prevId => (prevId === id ? null : id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h2> FAQ</h2>
      {faqData.map((faq) => (
        <div key={faq.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <h4
            style={{ cursor: 'pointer' }}
            onClick={() => toggle(faq.id)}
          >
            {faq.question} {openId === faq.id }
          </h4>
          {openId === faq.id && (
            <p style={{ marginTop: '8px' }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqList;