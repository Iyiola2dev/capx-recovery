import  { useState } from 'react'
import { nftFaqData } from '../../../data';

const NftFaqDatas = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Function to handle click events on FAQ items
    const toggleFAQ = (index) => {
      // If the clicked item is already open, close it. Otherwise, open the clicked one.
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className=" py-12  ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#ffdb8a]">FAQ’s About Crypto Scam Recovery</h2>
  
          {/* Map through faqData */}
          <div className="max-w-2xl mx-auto">
            {nftFaqData.map((faq, index) => (
              <div key={index} className="mb-4">
                {/* Question part */}
                <div
                  className={`flex justify-between items-center bg-blue-900 text-white  p-4 cursor-pointer ${
                    openIndex === index ? "rounded-t-md" : "rounded-md"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-sm md:text-lg font-semibold ">
                    {faq.question}
                  </h3>
                  {/* Icon to indicate collapse/expand */}
                  <span className="text-2xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
  
                {/* Answer part - shown when the FAQ is open */}
                {openIndex === index && (
                  <div className="bg-white text-black p-4 rounded-b-md">
                    <div>{faq.title}</div>
                    <ul className="flex flex-col gap-2">
                    <li>{faq.answer1}</li>
                    <li>{faq.answer2}</li>
                    <li>{faq.answer3}</li>
                    <li>{faq.answer4}</li>
                    <li>{faq.answer5}</li>
                    <li>{faq.answer6}</li>
                  </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default NftFaqDatas