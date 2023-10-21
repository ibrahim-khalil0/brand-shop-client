
const Offer = () => {
    return (
        <div className="bg-[#202020] px-[10%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-16">
            <div className="flex gap-4 mb-10 lg:mb-0">
                <div className="w-[50px]">
                    <img src="https://i.ibb.co/QCpgmWB/download-1-removebg-preview.png" alt="" />
                </div>
                <div>
                    <h3 className="text-2xl">Free Delivery</h3>
                    <h4 className="text-lg">For all orders over $99</h4>
                </div>
            </div>
            <div className="flex gap-4 mb-10 lg:mb-0">
                <div className="w-[50px]">
                    <img src="https://i.ibb.co/7n13GDQ/pngtree-return-icon-image-1287495-removebg-preview.png" alt="" />
                </div>
                <div>
                    <h3 className="text-2xl">90 Days Return</h3>
                    <h4 className="text-lg">If goods have problems</h4>
                </div>
            </div>
            <div className="flex gap-4 mb-10 lg:mb-0">
                <div className="w-[50px]">
                    <img src="https://i.ibb.co/jGZttQf/ac018da89a4f3c11cb8dd4be465c4dcf-removebg-preview.png" alt="" />
                </div>
                <div>
                    <h3 className="text-2xl">Secure Payment</h3>
                    <h4 className="text-lg">100% secure payment</h4>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-[50px]">
                    <img src="https://i.ibb.co/Tg3ksZ9/download-14-removebg-preview.png" alt="" />
                </div>
                <div>
                    <h3 className="text-2xl">24/7 Support</h3>
                    <h4 className="text-lg">Dedicated support</h4>
                </div>
            </div>
        </div>
    );
};

export default Offer;