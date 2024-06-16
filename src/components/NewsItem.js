import React from "react";

const NewsItem = (props) => {

    let {title,description,imageUrl, newsUrl, date} = props;
    return (
      <div>
        <div className="  w-96  h-fit  bg-white border border-gray-300 rounded-lg  relative">
        <span className="text-white bg-red-800 text-xs font-medium px-2 py-1 rounded-full absolute right-1 -top-3 ">{props.source}</span>
          <img src={imageUrl} alt="" className="rounded-t-lg max-h-[30vh] w-full"  />
          <a href={newsUrl}>
            <h5 className="mt-2  text-xl font-bold p-4">
              {title}
            </h5>
          </a>
          <p className="text-gray-400 text-sm mx-5">Last updated on {new Date(date).toUTCString()}</p>
          <p className=" font-normal text-gray-600 p-[3vh] text-sm">
            {description}
          </p>
          <p className="text-gray-400 text-sm mb-6 mx-5">Published by: {props.author?props.author:"Unknown"}</p>
          <a
            href={newsUrl}
            className="inline-flex items-center px-3 py-2  text-base font-medium text-center text-white bg-[#97BC62FF] rounded-lg hover:bg-[#a2ba80] focus:ring-2 focus:outline-none focus:ring-[#617840] mb-[3vh] mx-3"
          >
            Read more
             
           
          </a>
        </div>
      </div>
    );
  }

export default NewsItem;
