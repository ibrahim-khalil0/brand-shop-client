import React from 'react';

const Rating = ({rating, id}) => {
    return (
        <div>
            
                    {
                        rating == 1 && <div className="rating space-x-3 flex">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                      </div>
                    }
                    {
                        rating == 2 && <div className="rating">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                      </div>
                    }
                    {
                        rating == 3 && <div className="rating">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                      </div>
                    }
                    {
                        rating == 4 && <div className="rating">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                      </div>
                    }
                    {
                        rating == 5 && <div className="rating">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                      </div>
                    }
                
        </div>
    );
};

export default Rating;