import { reviews } from "@/helpers";
import { Star, StarIcon } from "lucide-react";
import React from "react";

const StartRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={
            i < rating ? "text-orange-700 fill-orange-700" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="bg-blue-950 w-full h-auto my-5 p-3">
      <h1 className="font-extrabold text-2xl lg:text-4xl text-[#f0f8ff]">
        Student Reviews
      </h1>
      <p className="text-[#faf0e6]">Empowering skills for a brighter future.</p>
      <div className="overflow-x-auto flex scroll-smooth snap-x snap-mandatory  gap-6 mt-4 scrollbar-thin">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col items-center gap-2  shadow-xl rounded-2xl p-4 flex-shrink-0 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] snap-start"
          >
            <StartRating rating={review.rating} />
            <p className="text-[#faf0e6] text-sm font-light">
              {review.comment}
            </p>
            <div className="flex gap-2 items-center">
              <img
                src={review.avatar}
                alt="avatar"
                className="rounded-full size-16"
              />
              <p className="text-sm font-bold text-orange-600">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
