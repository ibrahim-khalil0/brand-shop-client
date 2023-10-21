import { Link } from "react-router-dom";
import apple from "../../assets/apple_watch.jpg";

const Brand = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[10%] text-center text-4xl">
      <Link to={"/brand/apple"}>
        <div className="brand-category">
          <div className="relative">
            <img
              src="https://i.ibb.co/sgsSFs6/image-processing20201112-9859-19fkvyl.jpg"
              alt=""
              className="rounded-md"
            />
            <div className="absolute w-full h-full hover:bg-[#0000008a] top-0"></div>
          </div>
          <span className="brand-tittle">Apple</span>
        </div>
      </Link>

      <Link to={"/brand/hp"}>
        <div className="brand-category">
          <div className="relative">
            <img
              src="https://i.ibb.co/rGb2MZV/HD-wallpaper-hp-yellow-logo-yellow-neon-lights-creative-hewlett-packard-logo-yellow-abstract-backgro.jpg"
              alt=""
              className="rounded-md"
            />
            <div className="absolute w-full h-full hover:bg-[#0000008a] top-0"></div>
          </div>
          <span className="brand-tittle">hp Laptop</span>
        </div>
      </Link>

      <Link to={"/brand/samsung"}>
        <div className="brand-category">
          <div className="relative">
            <img
              src="https://i.ibb.co/cNh2rDM/desktop-wallpaper-9-samsung-galaxy-logo-samsung-logo.jpg"
              alt=""
              className="rounded-md"
            />
            <div className="absolute w-full h-full hover:bg-[#0000008a] top-0"></div>
          </div>
          <span className="brand-tittle">Samsung</span>
        </div>
      </Link>

      <Link to={"/brand/sony"}>
        <div className="brand-category">
          <div className="relative">
            <img
              src="https://i.ibb.co/n3xx75D/HD-wallpaper-sony-golden-logo-artwork-gold-letters-brown-metal-background-creative-sony-logo-brands.jpg"
              alt=""
              className="rounded-md"
            />
            <div className="absolute w-full h-full hover:bg-[#0000008a] top-0"></div>
          </div>
          <span className="brand-tittle">Sony</span>
        </div>
      </Link>

      <Link to={"/brand/walton"}>
        <div className="brand-category">
          <div className="relative">
            <img
              src="https://i.ibb.co/dp656CH/mqdefault.jpg"
              alt=""
              className="rounded-md"
            />
            <div className="absolute w-full h-full hover:bg-[#0000008a] top-0"></div>
          </div>
          <span className="brand-tittle">Walton</span>
        </div>
      </Link>

      <Link to={"/brand/lg"}>
        <div className="brand-category">
          <div className="relative">
            <img
              src="https://i.ibb.co/4g6vzQZ/desktop-wallpaper-lg-logo-lg-tv-logo-thumbnail.jpg"
              alt=""
              className="rounded-md"
            />
            <div className="absolute w-full h-full hover:bg-[#0000008a] top-0"></div>
          </div>
          <span className="brand-tittle">Lg</span>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
