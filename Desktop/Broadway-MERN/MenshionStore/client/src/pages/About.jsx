import image1 from "../assets/images/about1.jpg";
import image2 from "../assets/images/about2.jpg";

export const About = () => {
  return (
    <>
      <div>
        <div className="about container-fluid" id="about">
          <h1 className="heading">About Us</h1>
          <div className="container">
            <div className="row text-center text-black d-flex p-4 rounded my-4">
              <div className="container col-lg-12 row border">
                <div className="col-sm-12 col-md-12 col-lg-6 p-4">
                  <h4 className="text-center p-2 heading5">Who we are?</h4>
                  <p className="text-center">
                    Welcome to our Menshion Store website, founded in 20222 with
                    a passion for quality and style. You can trust us for our
                    commitment to top-notch quality, trendsetting selection,
                    customer-centric service, and eco-friendly initiatives. We
                    want tobuild our small business to a well-established brand
                    in near future by by innovation, community engagement, and a
                    global reach, all is possible after fostering trust and
                    loyalty from our valued customers. Join us in redefining
                    men's fashion and experience our exceptional clothing
                    collections for every occasion.
                  </p>
                </div>
                <div
                  className="col-sm-12 col-md-12 col-lg-6 text-center image-section"
                  style={{ zIndex: "-1" }}
                >
                  <img
                    className="shadow"
                    src={image1}
                    alt=""
                    style={{ zIndex: "-1" }}
                  />
                </div>
              </div>
              <div className="container col-lg-12 row py-4">
                <div
                  className="col-sm-12 col-md-12 col-lg-6 text-center image-section"
                  style={{ zIndex: "-1" }}
                >
                  <img
                    className="shadow"
                    src={image2}
                    alt=""
                    style={{ zIndex: "-1" }}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-4">
                  <h4 className="text-center p-2 heading5">Why Choose Us?</h4>
                  <p className="text-center">
                    Choose us because we're not just a men's fashion shop; we're
                    a destination for style, quality, and trust. Within short
                    period of time, we have evolved into a leading authority in
                    men's fashion. Trust us for our unwavering commitment to
                    providing you with garments that exude sophistication and
                    flair. Our expertly curated collection, in tune with the
                    latest trends, guarantees you'll always look your best. What
                    sets us apart is our customer-centric approach; we're here
                    to make your shopping experience seamless and enjoyable,
                    with hassle-free returns and exceptional service. Plus, our
                    dedication to eco-friendly practices underscores our
                    responsibility towards the environment. Choose us and join a
                    fashion journey that has garnered accolades, celebrated
                    collaborations, and a growing global presence. Your trust in
                    us fuels our mission to redefine men's fashion, making every
                    moment an opportunity to shine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
