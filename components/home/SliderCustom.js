import React, { Component } from "react";
import Slider from "react-slick";
import Call from "./Call";

export default class SliderCustom extends Component {
  constructor(props) {
    super(props);
    this.sub1 = React.createRef();
    this.state = {
      banners: []
    };
  }

  banner = () => {
    Call.getBanners()
      .then(d => {
        let {
          data: { data }
        } = d;

        this.setState({ banners: data });
      })
      .catch(error => {
        window.location.reload();
      });
  };

  componentDidMount() {
    this.banner();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
    };
    return (
      <div className="slider_container">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings}>
          {this.state.banners.map((e, i) => {
            return (
              <div className="item" key={i}>
                <div
                  className="container-h-full"
                  style={{
                    backgroundImage: `url(${e.profile.url}${e.profile.name}_large.jpg)`,
                    height: "100vh",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    backgroundSize: "cover",
                    color: e.color
                  }}
                >
                  <div className="sub1-warper">
                    <h2
                      className="sub1"
                      ref={sub1 => {
                        this.sub1 = sub1;
                      }}
                    >
                      {e.sub1}
                    </h2>
                  </div>
                  <div className="sub2">
                    <h1>{e.sub2}</h1>
                  </div>
                  <div className="shop-btn">
                    <a href="#" style={{ color: e.btnColor, backgroundColor: e.btnBackground }}>
                      {e.btnText}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <style jsx>{`
        .slider_container {
  margin: 0 auto;
  width: 100%;
}

.item {
  width: 100%;
  color: #333;
  min-height: 300px;
  height: 300px
  position: relative;
}


.item img{
  width: 100%
}
.slick-next:before, .slick-prev:before {
    color: #000;
}


.sub1{
  font-size: 2.8em;
  font-weight: 300;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.sub2{
  font-size: 3em;
  margin: 0px;

}

.shop-btn{
  bottom: 0;
}

.shop-btn a{
  padding: 10px 30px;
  background-color: #333;
  color: aliceblue;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-weight: 600;
  bottom: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  transition: 1s;
  text-shadow: 0 0 0px gray, 0 0 4px gray;
}

.shop-btn a:hover{
    color: #333;
    background-color: rgb(226, 224, 224);
    font-size: 20px;
    padding: 10px 35px;
}
.container-h-full{
  background-color: #333;
  color: #222;
  padding: 100px;
  width: 100%;
  height: 100vh;
}`}</style>
      </div>
    );
  }
}
