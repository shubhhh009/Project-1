const Hero = ()=>{
    return <main className="hero container">

        <div className="content">
            <h1>YOUR FEET DESERVE THE BEST </h1>
            <p> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR 
            SHOES.
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
         
         <div className="shopping">
            <p>Also available on </p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo"/>
                <img src="/images/flipkart.png" alt="flipkart-logo"/>
            </div>
         </div>
        </div>


        <div className="image"></div>
        <img src="/images/shoe_image.png" alt="hero-logo"/>
    </main>
};

export default Hero;