
import React, { useState } from 'react';

const faqData = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more.",
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.",
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime, on an unlimited number of devices.",
  },
  {
    question:"How do I cancel?",
    answer:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question:"What can I watch on Netflix?",
    answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question:"Is Netflix good for Kids?",
    answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="relative w-full bg-gray-700 px-4 py-3 text-left text-lg font-medium rounded"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold">
                {openIndex === index ? '×' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-600 rounded-b">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
