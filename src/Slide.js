import React from "react";
import "./Slide.css";
const delay = 2000;

function Slide() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const sizeRef = React.useRef(null);
  const [slideWidth, setSlideWidth] = React.useState(0);
  const [slidePadding, setSlidePadding] = React.useState(20);
  const [frontsize, setFrontsize] = React.useState(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  function resetTimeout2() {
    if (sizeRef.current) {
      clearTimeout(sizeRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === 8 ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  function addNum() {
    setTimeout(() => {
      console.log(" >> clicked!!");
      setIndex((prevIndex) => (prevIndex === 8 ? 0 : prevIndex + 1));
    }, 10);
  }

  function minusNum() {
    setTimeout(() => {
      console.log(" << clicked!!");
      setIndex((prevIndex) => (prevIndex === 0 ? 8 : prevIndex - 1));
    }, 10);
  }

  React.useEffect(() => {
    resetTimeout2();
    sizeRef.current = setTimeout(() => {
      let sizeofFront = 0;
      if (window.innerWidth >= 1084) {
        sizeofFront = (window.innerWidth - 1684) / 2;
      }
      let sizeofSlide = 1060;
      setSlidePadding(12);

      if (window.innerWidth < 1200) {
        setSlidePadding(10);
        sizeofSlide = window.innerWidth - 2 * slidePadding;
        sizeofFront = (window.innerWidth - sizeofSlide) / 2;
      }
      setFrontsize(sizeofFront);
      setSlideWidth(sizeofSlide);
    }, 100);

    return () => {
      resetTimeout2();
    };
  }, [slideWidth, slidePadding]);

  return (
    <div className="TopBanner_TopBanner__yxapE">
      <div className="slick-slider" dir="ltr">
        <div className="slick-list" style={{ padding: "0px 40px" }}>
          <div
            className="slick-track"
            style={{
              opacity: "1",
              transform: `translate3d(${
                frontsize + -slideWidth * (index + 8)
              }px, 0, 0)`,
              width: `${slideWidth * 20}px`,
            }}
            ref={sizeRef}
          >
            <div
              data-index="-9"
              className="slick-slide"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/wantedcon24"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성과를 내는 마케팅"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - slidePadding}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/wantedcon24" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
                        alt="성과를 내는 마케팅"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__false__5qVDq">
                    <h2>성과를 내는 마케팅</h2>
                    <h3>실제 사례를 공개합니다!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/wantedcon24"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="-8"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="https://youtu.be/VLiACiB2lXw"
                  data-link-kind="CUSTOM_URL"
                  data-content-title="해, 커리어 EP 02 공개"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__active___6EY5">
                    <a
                      href="https://youtu.be/VLiACiB2lXw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                        alt="해, 커리어 EP 02 공개"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                    <h2>해, 커리어 EP 02 공개</h2>
                    <h3>마지막 관문 2라운드의 승자는?</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/VLiACiB2lXw"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="-7"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/hrclass220106"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="2022년 달라지는 노동법령"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/hrclass220106" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                        alt="2022년 달라지는 노동법령"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__false__5qVDq">
                    <h2>2022년 달라지는 노동법령</h2>
                    <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/hrclass220106"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="-6"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/livetalk28"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성장하는 개발자가 되려면?"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a
                      href="/events/livetalk28"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
                        alt="성장하는 개발자가 되려면?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                    <h2>성장하는 개발자가 되려면?</h2>
                    <h3>OOO 검색하지 말 것!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/livetalk28"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="-5"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_6"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 되고싶은 분들!?"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a
                      href="/events/pre_onboarding_course_6"
                      className=""
                      aria-label=""
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
                        alt="개발자 되고싶은 분들!?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 되고싶은 분들!?</h2>
                    <h3>프론트엔드 무료 교육과정 참여하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/pre_onboarding_course_6"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="-4"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/velog01"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 성장 비결 공개!"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/velog01" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                        alt="개발자 성장 비결 공개!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 성장 비결 공개!</h2>
                    <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/velog01"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="-3"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/hrclass220106"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="2022년 달라지는 노동법령"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/hrclass220106" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                        alt="2022년 달라지는 노동법령"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>2022년 달라지는 노동법령</h2>
                    <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/hrclass220106"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="-2"
              className="slick-slide"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/portfolio_contents_29cm"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="포트폴리오를 부탁해!"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a
                      href="/events/portfolio_contents_29cm"
                      className=""
                      aria-label=""
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg"
                        alt="포트폴리오를 부탁해!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>포트폴리오를 부탁해!</h2>
                    <h3>디자이너의 포폴 살펴보기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/portfolio_contents_29cm"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="-1"
              className="slick-slide"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_7"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="마케팅 주니어를 찾습니다"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a
                      href="/events/pre_onboarding_course_7"
                      className=""
                      aria-label=""
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
                        alt="마케팅 주니어를 찾습니다"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>마케팅 주니어를 찾습니다</h2>
                    <h3>기업 과제 풀고 취업까지 한번에!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/pre_onboarding_course_7"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="0"
              className="slick-slide"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/wantedcon24"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성과를 내는 마케팅"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/wantedcon24" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
                        alt="성과를 내는 마케팅"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__false__5qVDq">
                    <h2>성과를 내는 마케팅</h2>
                    <h3>실제 사례를 공개합니다!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/wantedcon24"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="1"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="https://youtu.be/VLiACiB2lXw"
                  data-link-kind="CUSTOM_URL"
                  data-content-title="해, 커리어 EP 02 공개"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__active___6EY5">
                    <a
                      href="https://youtu.be/VLiACiB2lXw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                        alt="해, 커리어 EP 02 공개"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                    <h2>해, 커리어 EP 02 공개</h2>
                    <h3>마지막 관문 2라운드의 승자는?</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/VLiACiB2lXw"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="2"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/hrclass220106"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="2022년 달라지는 노동법령"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/hrclass220106" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                        alt="2022년 달라지는 노동법령"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__false__5qVDq">
                    <h2>2022년 달라지는 노동법령</h2>
                    <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/hrclass220106"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="3"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/livetalk28"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성장하는 개발자가 되려면?"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a
                      href="/events/livetalk28"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
                        alt="성장하는 개발자가 되려면?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                    <h2>성장하는 개발자가 되려면?</h2>
                    <h3>OOO 검색하지 말 것!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/livetalk28"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="4"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_6"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 되고싶은 분들!?"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a
                      href="/events/pre_onboarding_course_6"
                      className=""
                      aria-label=""
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
                        alt="개발자 되고싶은 분들!?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 되고싶은 분들!?</h2>
                    <h3>프론트엔드 무료 교육과정 참여하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/pre_onboarding_course_6"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="5"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/velog01"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 성장 비결 공개!"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/velog01" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                        alt="개발자 성장 비결 공개!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 성장 비결 공개!</h2>
                    <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/velog01"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="6"
              className="slick-slide slick-active slick-center slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/hrclass220106"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="2022년 달라지는 노동법령"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/hrclass220106" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                        alt="2022년 달라지는 노동법령"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>2022년 달라지는 노동법령</h2>
                    <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/hrclass220106"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="7"
              className="slick-slide"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/portfolio_contents_29cm"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="포트폴리오를 부탁해!"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a
                      href="/events/portfolio_contents_29cm"
                      className=""
                      aria-label=""
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg"
                        alt="포트폴리오를 부탁해!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>포트폴리오를 부탁해!</h2>
                    <h3>디자이너의 포폴 살펴보기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/portfolio_contents_29cm"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="8"
              className="slick-slide"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_7"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="마케팅 주니어를 찾습니다"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a
                      href="/events/pre_onboarding_course_7"
                      className=""
                      aria-label=""
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
                        alt="마케팅 주니어를 찾습니다"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>마케팅 주니어를 찾습니다</h2>
                    <h3>기업 과제 풀고 취업까지 한번에!</h3>
                    <a
                      href="/events/pre_onboarding_course_7"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-index="9"
              className="slick-slide"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: "none",
              }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/wantedcon24"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성과를 내는 마케팅"
                  tabIndex="-1"
                  style={{
                    display: "inline-block",
                    outline: "none",
                    width:
                      window.innerWidth < 1200
                        ? `${window.innerWidth - 40}px`
                        : "1060px",
                  }}
                >
                  <div className="Image_Image__T6WBp Image_Image__false___6EY5">
                    <a href="/events/wantedcon24" className="" aria-label="">
                      <img
                        src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
                        alt="성과를 내는 마케팅"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__false__5qVDq">
                    <h2>성과를 내는 마케팅</h2>
                    <h3>실제 사례를 공개합니다!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/wantedcon24"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                      aria-label=""
                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="TopBanner_arrow__BN_7d TopBanner_nextArrow__6wqx0"
        aria-label="nextArrowButton"
        onClick={addNum}
      >
        <span className="SvgIcon_SvgIcon__root__8vwon">
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="TopBanner_arrow__BN_7d TopBanner_prevArrow__B7nqk"
        aria-label="prevArrowButton"
        onClick={minusNum}
      >
        <span className="SvgIcon_SvgIcon__root__8vwon">
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}
export default Slide;
