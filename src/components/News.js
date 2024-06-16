import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News= (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [progress, setProgress] = useState(0)
  useEffect(() => {
      fetcharticles();
  },[page])
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.category !== props.category ||
  //     prevState.page !== this.state.page
  //   ) {
  //     this.fetcharticles();
  //   }
  // }
  const fetcharticles = async () => {
    setloading(true);
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
      setarticles((prevArticles) => page === 1?parsedData.articles:[...prevArticles,...parsedData.articles]);
      setloading(false);
      settotalResults(parsedData.totalResults) 
    setProgress(100);
    document.title = `${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    } - DailyGlimpse`;
  };
  // handlePrev = async () => {
  //     this.setState(
  //       (state) => ({page:state.page-1}),
  //       ()=>this.fetcharticles()
  //     );
  //   }

  // handleNext = async () => {
  //   this.setState(
  //     (state)=>({page:state.page+1}),
  //     ()=>this.fetcharticles()
  //   );
  // }
  const fetchMoreData = () => {
    setpage(page+1);  
  };
    return (
      <div className=" my-2 ">
        <h1 className="font-bold text-2xl md:text-3xl my-3 mb-9 text-center md:text-start md:mx-16">
          {props.headline}
        </h1>
        {loading && <Spinner />}
        <div className="rows w-fit mx-auto gap-14 md:mx-10 grid md:grid-cols-3 ">
          {articles && articles.length > 0 ? (
            articles.map((element) => {
              return (
                <div className="gap-4 w-fit" key={element.url}>
                  <NewsItem
                    title={
                      element.title ? element.title.slice(0, 90) + "..." : "..."
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 230) + "..."
                        : "..."
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "/DailyGlimpse.png"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    target = ""
                  />
                </div>
              );
            })
          ) : (
            <p className="text-xl font-semibold ">No articles found</p>
          )}
        </div>
        {/* <div className="buttons flex justify-between my-2 mt-10 mx-20">
        <button disabled={this.state.page<=1}
            
            className="inline-flex items-center px-3 py-2  text-base font-medium text-center text-white bg-black rounded-lg hover:bg-[#a2ba80] focus:ring-1 focus:outline-none focus:ring-[#617840] mb-[3vh] ml-[1vw] cursor-pointer disabled:bg-gray-500 disabled:cursor-default"
            onClick={this.handlePrev}
          >&larr; Previous</button>
          <button
            disabled={this.state.page + 1>Math.ceil(this.state.totalResults/12)}
            className="inline-flex items-center px-3 py-2  text-base font-medium text-center text-white bg-black rounded-lg hover:bg-[#a2ba80] focus:ring-1 focus:outline-none focus:ring-[#617840] mb-[3vh] ml-[1vw] cursor-pointer disabled:bg-gray-500 disabled:cursor-default"
            onClick={this.handleNext}
          >Next  &rarr;</button>
        </div> */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p className="text-center py-10  font-semibold text-lg">
              Yay! You have seen it all💖
            </p>
          }
        />
      </div>
    );
  } 

News.defaultProps = {
  country: "in",
  pageSize: "8",
  category: "general",
  headline: "DailyGlimpse - Hot Stories",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
