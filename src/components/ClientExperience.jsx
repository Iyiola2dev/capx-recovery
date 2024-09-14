import React from 'react';

const ClientExperience = () => {
  return (
    <div className="bg-green-300/35 text-white py-12 mt-10 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Quotation Mark */}
          <div className="text-[#ffdb8a] text-5xl mb-4">
            <span>&#8220;</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Clients <span className="text-[#ffdb8a]">Experiences</span>
          </h2>

          {/* Testimonial Text */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            The professionalism and effectiveness of their team in handling my crypto wallet recovery were outstanding. Thanks to them, I regained access to my assets.
          </p>

          {/* Client Name */}
          <p className="font-semibold">John A</p>
        </div>
      </div>
    </div>
  );
};

export default ClientExperience;
