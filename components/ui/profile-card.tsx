import Image from "next/image";
import React from "react";

const ProfileCard = ({
  title,
  name,
  description,
  side,
}: {
  title: string;
  name: string;
  description: string;
  side: string;
}): JSX.Element => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-full mx-auto">
        <div className="relative justify-between flex bg-clip-border rounded-xl text-gray-700 w-full max-w-12/12 flex-row">
          <div
            className={`${side == "left" ? "order-first rounded-r-none" : "rounded-l-none order-last"}
               relative w-8/12 m-0 text-gray-700 bg-white bg-clip-border rounded-xl shrink-0`}
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="card-image"
              className={`${side == "left" ? "rounded-r-none" : "rounded-l-none"} rounded-xl object-cover w-full h-full`}
              width={800}
              height={600}
            />
          </div>
          <div
            className={`${side == "left" ? "order-last rounded-l-none" : "rounded-r-none order-first"}
            flex flex-col p-6 w-4/12 bg-white drop-shadow-xl rounded-xl justify-center my-8`}
          >
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              {title}
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              {description}
            </p>
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Contactos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
