function BodySection() {
  return (
    <div className="container">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn">
          <button className="btn_first">Shop Now</button>
          <button className="btn_sec">Category</button>
        </div>
        <div className="shopping">
            <p>Also Available on</p>
            <div className="brand_icon">
                <img src="/Images/flipkart.png" alt=".." />
                <img src="/Images/amazon.png" alt="..." />
            </div>
        </div>
      </div>
      <div className="image">
        <img src="/Images/shoe_image.png" alt="..." />
      </div>
    </div>
  );
}
export default BodySection;
