import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AimCarousal = () => {
  const slides = [
    {
      title:
        "Rapidly Increase the Number of Game Developers Using Arbitrum/Orbit/Stylus",
      description: "GCP is committed to attracting developers with:",
      features: [
        "Funding to kickstart their projects",
        "Mentorship from industry experts",
        "Tools like Orbit and Stylus to simplify development",
      ],
      imageSrc: "/gcp/aim/learning.svg",
    },
    {
      title: "Boosting Developer Engagement on Arbitrum",
      description: "The GCP offers developers a wealth of resources:",
      features: [
        "Funding to fuel creative projects",
        "Mentorship by experts in blockchain gaming",
        "Access to tools like Orbit and Stylus to help developers bring their games to life faster and better.",
      ],
      imageSrc: "/gcp/aim/boosting.svg",
    },
    {
      title: "Smart Resource Allocation for Maximum Impact",
      description: "The GCP offers developers a wealth of resources:",
      features: [
        "Proven publishers and developers",
        "Promising indie projects",
        "This approach ensures that the best projects get the support they need to thrive in the Arbitrum ecosystem.",
      ],
      imageSrc: "/gcp/aim/impact.svg",
    },
    {
      title: "Drawing the Best Game Developers to Arbitrum",
      description:
        "Arbitrum’s advanced technology and industry-specific tools are attracting the top minds in game development. With incentives and unmatched support, developers can create high-quality, lasting gaming experiences on the platform",

      imageSrc: "/gcp/aim/drawing.svg",
    },
    {
      title: "Bringing Gaming to the Blockchain",
      description:
        "GCP isn't just about games – it’s about expanding Arbitrum’s possibilities. By embracing gaming and gaming infrastructure, Arbitrum is evolving beyond DeFi, creating new use cases like:",
      features: [
        "Orbit Chain adoption",
        "Stylus as a game development tool",
        "This diversification enhances the appeal of Arbitrum across multiple industries.",
      ],
      imageSrc: "/gcp/aim/blockchain.svg",
    },
    {
      title: "Creating Games That Keep Players Coming Back",
      description:
        "The GCP is committed to supporting games that are sticky – games that not only attract players but keep them coming back for more. Through a dedicated GCP Team and Council, we ensure that only the best games get our full support.",

      imageSrc: "/gcp/aim/creating.svg",
    },
  ];

  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className="text-lg font-medium md:text-2xl lg:text-3xl">
        Explore the Ecosystem
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        className="w-full"
        autoplay
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse items-center justify-between gap-6 rounded-small bg-blue-light p-8 md:flex-row md:rounded-3xl lg:gap-28 lg:rounded-large lg:p-14">
              <div className="flex flex-col gap-2 md:w-[40%] lg:gap-4">
                <p className="text-xs font-normal uppercase tracking-widest text-gray-500 lg:text-sm">
                  This Program Aims to
                </p>

                <h2 className="max-w-[27rem] text-lg font-medium text-[#153055] md:text-2xl lg:text-3xl">
                  {slide.title}
                </h2>
                <p className="font-semibold text-gray-500">
                  {slide.description}
                </p>
                {slide?.features?.length && (
                  <ul
                    className={
                      "flex list-outside list-disc flex-col gap-1 pt-3 font-os text-xs font-light text-gray-600 marker:text-gray-400 md:text-base lg:pt-0 lg:text-base"
                    }
                  >
                    {slide?.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="md:w-[45%]">
                <img
                  src={slide.imageSrc}
                  alt={""}
                  className="aspect-[3/3] w-full md:aspect-auto lg:aspect-[16/12]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination Dots Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #ccc;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          background-color: #0070f3; /* Customize active dot color */
          width: 9px; /* Customize active dot size */
          height: 9px;
        }
      `}</style>
    </section>
  );
};

export default AimCarousal;
