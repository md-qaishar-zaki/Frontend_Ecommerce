import React, { useState } from 'react';

export default function QNA() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const questions = [
    {
      title: 'Why is the moon sometimes out during the day?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    {
      title: 'Why is the sky blue?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    {
      title: 'Will we ever discover aliens?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    {
      title: 'How much does the Earth weigh?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    {
      title: 'How do airplanes stay up?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
  ];

  return (
    <div className="container mx-auto p-5 max-w-l bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion">
        {questions.map((question, index) => (
          <div className="accordion-item border-b border-gray-300" key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              aria-expanded={expandedIndex === index ? 'true' : 'false'}
              className="w-full text-left py-4 flex items-center justify-between focus:outline-none"
            >
              <span className="accordion-title text-lg font-medium">{question.title}</span>
              <span
                className={`icon transform transition-transform duration-300 ${
                  expandedIndex === index ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              className={`accordion-content overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 text-base py-4">{question.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
