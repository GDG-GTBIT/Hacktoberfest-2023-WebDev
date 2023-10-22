import React from "react";

// layouts
import DefaultLayoutHoc from "../layout/Default.Layout";

// components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto my-10 p-4">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-xl font-bold ">Plays in Delhi NCR</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jo-bolta-hai-wohi-hota-hai-ft-by-harsh-gujral-0-2022-8-25-t-13-28-51.jpg"
                  title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                  isPlay={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jo-bolta-hai-wohi-hota-hai-ft-by-harsh-gujral-0-2022-8-25-t-13-28-51.jpg"
                  title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                  isPlay={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jo-bolta-hai-wohi-hota-hai-ft-by-harsh-gujral-0-2022-8-25-t-13-28-51.jpg"
                  title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                  isPlay={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jo-bolta-hai-wohi-hota-hai-ft-by-harsh-gujral-0-2022-8-25-t-13-28-51.jpg"
                  title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                  isPlay={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jo-bolta-hai-wohi-hota-hai-ft-by-harsh-gujral-0-2022-8-25-t-13-28-51.jpg"
                  title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                  isPlay={true}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-4 bg-white rounded-lg">
            <h2 className="text-xl font-bold">Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
