import appleWatch from "../../assets/apple_watch.jpg";
import samsungPhone from "../../assets/samsung.png";
import sonyLed from "../../assets/sony.png";
import hpLaptop from "../../assets/hp.png";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full bg-[#202020] px-8 sm:px-[10%] py-4 sm:py-10">
            <div
              style={{
                backgroundImage: `url(${hpLaptop})`,
                backgroundSize: "500px",
              }}
              className="bg-top sm:bg-right bg-no-repeat py-10 sm:py-44"
            >
              <div className="w-full lg:w-1/2 text-center space-y-8">
                <h1 className="text-7xl font-bold mt-[350px] sm:mt-0">hp Laptop</h1>
                <p className="font-thin text-base text-white">
                  HP laptops: Reliable, versatile computing devices with sleek
                  designs, powerful processors, ample RAM, and high-quality
                  displays. Perfect for everyday tasks, professional work, and
                  gaming, offering durability, innovation, and a seamless user
                  experience.
                </p>
                <button className="border border-[#CB9500] rounded-md px-8 py-2 text-[#CB9500]">
                  More Products
                </button>
              </div>
              {/* <div className="flex-1 text-right">
                <img src={hpLaptop} alt="" className="inline h-[30rem]" />
              </div> */}
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full px-8 sm:px-[10%] py-4 sm:py-10 bg-[#202020]">
            <div
              style={{
                backgroundImage: `url(${appleWatch})`,
                backgroundSize: "500px",
              }}
              className="bg-top sm:bg-right bg-no-repeat py-10 sm:py-44"
            >
              <div className="w-full lg:w-1/2 text-center space-y-8">
                <h1 className="text-7xl font-bold mt-[350px] sm:mt-0">Apple Watch</h1>
                <p className="font-thin text-base text-white">
                  The Apple Watch is a cutting-edge smartwatch by Apple Inc. It
                  pairs with your iPhone, offering fitness tracking, heart rate
                  monitoring, GPS, and diverse apps. With its stylish design and
                  health-focused features, it keeps you connected and motivated,
                  all from your wrist.
                </p>
                <button className="border border-[#CB9500] rounded-md px-8 py-2 text-[#CB9500]">
                  More Products
                </button>
              </div>
              {/* <div className="flex-1 text-right">
                <img src={appleWatch} alt="" className="inline h-[30rem]" />
              </div> */}
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-full bg-[#202020] px-8 sm:px-[10%] py-4 sm:py-10">
            <div
              style={{
                backgroundImage: `url(${samsungPhone})`,
                backgroundSize: "500px",
              }}
              className="bg-top sm:bg-right bg-no-repeat py-10 sm:py-44"
            >
              <div className="w-full lg:w-1/2 text-center space-y-8">
                <h1 className="text-7xl font-bold mt-[350px] sm:mt-0">Samsung Phone</h1>
                <p className="font-thin text-base text-white">
                  Samsung phones: Stylish, powerful smartphones with Android OS,
                  impressive cameras, vibrant displays, and seamless
                  performance. Tailored for diverse budgets and preferences,
                  offering a user-friendly and innovative mobile experience.
                </p>
                <button className="border border-[#CB9500] rounded-md px-8 py-2 text-[#CB9500]">
                  More Products
                </button>
              </div>
              {/* <div className="flex-1 text-right">
                <img src={samsungPhone} alt="" className="inline h-[30rem]" />
              </div> */}
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="w-full bg-[#202020] px-8 sm:px-[10%] py-4 sm:py-10">
            <div style={{
                backgroundImage: `url(${sonyLed})`,
                backgroundSize: "500px",
              }}
              className="bg-top sm:bg-right bg-no-repeat py-10 sm:py-44">
              <div className="w-full lg:w-1/2 text-center space-y-8">
                <h1 className="text-7xl font-bold mt-[350px] sm:mt-0">Sony LED TV</h1>
                <p className="font-thin text-base text-white">
                  Exceptional visuals, vibrant colors, and sharp contrasts
                  define Sony's cutting-edge TVs. With 4K resolution, HDR, and
                  advanced audio technologies, they deliver immersive
                  entertainment experiences. Smart features and elegant designs
                  enhance user convenience and add sophistication to any space.
                </p>
                <button className="border border-[#CB9500] rounded-md px-8 py-2 text-[#CB9500]">
                  More Products
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
