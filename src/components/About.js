import React from "react";

const About = (props) => {
  document.title = `${
    props.category.charAt(0).toUpperCase() + props.category.slice(1)
  } - DailyGlimpse`;
  return (
    <div className="mx-12 my-7 bg-[#f8f1e3] px-16 py-5">
      <h1 className="text-3xl font-bold my-6">About DailyGlimpse✨</h1>
      <p>
        Welcome to DailyGlimpse, your go-to source for the latest headlines and
        breaking news from around the world. At DailyGlimpse, we strive to
        provide our readers with timely, accurate, and engaging news content
        across various categories. Our mission is to keep you informed,
        entertained, and enlightened about the events shaping our world.{" "}
      </p>
      <h1 className="text-2xl font-bold my-2">Our Mission</h1>
      <p>
        Our mission is to deliver high-quality news coverage that is both
        comprehensive and accessible. We believe that an informed public is
        essential for a healthy democracy, and we are committed to providing
        news that empowers our readers to stay informed and make educated
        decisions.{" "}
      </p>
      <h1 className="text-2xl font-bold my-2">💖What We Offer</h1>
      <h3 className="text-lg font-semibold my-1">Diverse Categories</h3>
      <p>
        DailyGlimpse covers a wide range of topics to cater to all interests.
        Our categories include:
      </p>
      <ul className="list-disc">
        <li>
          General: Stay updated with the most significant news stories from
          around the globe.{" "}
        </li>
        <li>
          Business: Get insights into the financial world, market trends, and
          economic policies.
        </li>
        <li>
          Sports: Follow your favorite teams and athletes, and stay on top of
          the latest sports events
        </li>
        <li>
          Entertainment: From movies to music, we bring you the latest in the
          world of entertainment.
        </li>
        <li>
          Health: Learn about health trends, medical advancements, and wellness
          tips.
        </li>
        <li>
          Science: Discover the latest scientific discoveries and technological
          innovations.{" "}
        </li>
        <li>
          {" "}
          Technology: Keep up with the rapidly changing tech landscape, from
          gadgets to software.
        </li>
      </ul>
      <h1 className="text-2xl font-bold my-2">⌛Timely Updates</h1>
      <p>
        We understand the importance of timely information. Our dedicated team
        works around the clock to ensure that you receive the latest news as it
        happens. Whether it’s breaking news or in-depth analysis, we aim to
        provide updates that are both fast and reliable.{" "}
      </p>
      <h1 className="text-2xl font-bold my-2">🎤Quality Journalism </h1>
      <p>
        Our team of experienced journalists and editors are committed to
        maintaining the highest standards of journalism. We prioritize accuracy,
        integrity, and fairness in our reporting, ensuring that our readers can
        trust the news they read on DailyGlimpse.
      </p>
      <h2 className="text-xl my-1 font-semibold">🥰User Experience</h2>
      <p>
        We believe that accessing news should be easy and enjoyable. Our website
        is designed to provide a seamless browsing experience, with a clean
        layout and intuitive navigation. Whether you're reading on a desktop,
        tablet, or smartphone, DailyGlimpse is optimized for all devices.
      </p>
      <h2 className="text-xl my-1 font-semibold">🧑🏻Meet Our Team</h2>
      <p>
        DailyGlimpse is powered by a team of passionate professionals who are
        dedicated to delivering the best news experience. Our team includes
        seasoned journalists, skilled editors, and tech-savvy developers who
        work together to bring you high-quality content and an exceptional user
        experience.
      </p>
      <h1 className="text-2xl font-bold my-2">Get Involved</h1>{" "}
      <p>
        We value our readers and welcome your feedback. If you have any
        suggestions, comments, or questions, please don't hesitate to reach out
        to us.Your input helps us improve and serve you better.
      </p>
      <h1 className="text-2xl font-bold my-2">🤝🏻Contact Us</h1>
      <ul className="list-disc">
        <li> Email: contact@dailyglimpse.com </li>
        <li>Phone: +1 (555) 123-4567 </li>
        <li>Address: 123 News Avenue, Media City, NY 10001, USA </li>
      </ul>
      <h2 className="text-xl my-1 font-semibold">Follow Us</h2>
      <p>
        Stay connected with DailyGlimpse on social media for the latest updates,
        exclusive content, and more:
      </p>
      <ul className="list-disc">
        <li>Facebook: facebook.com/dailyglimpse </li>
        <li>Twitter: twitter.com/dailyglimpse </li>
        <li>Instagram: instagram.com/dailyglimpse</li>
        <li>LinkedIn: linkedin.com/company/dailyglimpse </li>
      </ul>
      <p>
        Join Our Community and be the first to know about breaking news, special
        reports, and exclusive stories. We appreciate your visit to DailyGlimpse
        and hope you find our content valuable and informative. Thank you for
        choosing us as your trusted news source.
      </p>
    </div>
  );
};

export default About;
