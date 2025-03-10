import lab_hero_background_alien from "@/assets/lab-hero-background-alien.png";
import lab_hero_background_english from "@/assets/lab-hero-background-english.png";
import lab_hero_foreground from "@/assets/lab-hero-foreground.png";
import Image from "next/image";
import eth from "@/assets/icon/ethereum.webp";
import arb from "@/assets/icon/arbitrum.webp";
import aval from "@/assets/icon/avalanche.webp";
import op from "@/assets/icon/optimism.webp";
import pol from "@/assets/icon/polygon.webp";
import stodLogo2 from "@/assets/icon/WechatIMG.png";
import lab_closeup from "@/assets/lab-closeup.png";
import cassette from "@/assets/images/cassette.gif";
import unlock_the_lab from "@/assets/images/unlock-the-lab.png";
import vial from "@/assets/vial.f4fa690b.svg";
import scientists_creator_preview from "@/assets/images/scientists-creator-preview.gif";
import adventure_and_collect from "@/assets/images/adventure_and_collect.webp";
import explore_lab_preview from "@/assets/images/explore_lab_preview.gif";
import secret_room from "@/assets/images/secret_room.gif";
import Link from "next/link";
import log from "@/assets/image.png";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-black">
        <div
          className="block md:hidden absolute inset-0 overflow-hidden"
          style={{ opacity: 1 }}
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            src={lab_hero_background_alien}
            alt=""
            style={{ transform: "none" }}
          />
        </div>
        <div
          className="hidden md:block absolute inset-0 overflow-hidden"
          style={{ opacity: 1 }}
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            src={lab_hero_background_english}
            alt=""
            style={{ transform: "none" }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            opacity: 1,
            transform: "none",
            transition: "transform 1s ease",
          }}
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            src={lab_hero_foreground}
            alt=""
          />
        </div>
        <div className="w-[40%] pt-12 text-white aspect-square relative flex flex-col items-center justify-center">
          <div
            style={{
              transform: `scale(1.5)`,
              transition: "transform 1s ease",
            }}
          >
            <div className="w-[350px] md:w-[470px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 623 623"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M484.162 74.7611C470.592 64.5511 455.992 55.5111 440.752 47.8811L440.622 47.8211L440.542 47.7011L431.022 32.0111C407.592 21.7511 383.052 14.5611 358.062 10.6511L358.212 9.66108C383.332 13.5911 408.012 20.8311 431.562 31.1511L431.702 31.2111L441.312 47.0511C456.602 54.7111 471.252 63.8011 484.862 74.0511L484.982 74.1411L486.632 78.6111C497.812 87.0111 508.422 96.2311 518.342 106.221L513.692 88.8811C496.592 73.3311 477.652 59.7611 457.382 48.5411L457.002 48.3311L447.732 31.5111C398.692 7.52108 342.712 -3.87892 284.352 1.18108C265.752 2.79108 247.672 6.02108 230.242 10.6911L232.772 19.6711L226.132 21.5411L223.602 12.5611C221.832 13.0811 220.082 13.6211 218.322 14.1611L221.202 23.0311L214.642 25.1611L211.762 16.2911C209.942 16.9011 208.132 17.5211 206.332 18.1611L209.582 26.9211L203.122 29.3111L199.872 20.5411C158.782 36.2611 122.122 60.3611 91.7617 90.5811L105.442 88.0011C122.622 72.1011 141.632 58.2211 161.952 46.7411L162.332 46.5211L175.442 47.2411C188.942 40.3211 203.132 34.3611 217.642 29.5411C224.392 27.3011 231.292 25.2711 238.172 23.5211L247.692 13.0911L247.852 13.0611C252.562 12.0211 257.362 11.0811 262.132 10.2711L262.302 11.2611C257.602 12.0611 252.862 12.9911 248.222 14.0111L238.712 24.4211L238.562 24.4611C231.662 26.2111 224.732 28.2511 217.962 30.5011C204.062 35.1211 190.452 40.7911 177.452 47.3611L186.402 47.8511C192.832 44.8111 199.412 41.9911 206.132 39.4011L207.032 42.0711C219.362 37.2911 232.042 33.3611 244.982 30.2911V30.3111C260.542 26.6311 276.452 24.2311 292.542 23.1711L292.332 20.3711C312.542 19.0611 332.622 19.9011 352.282 22.7211L351.872 25.4311C367.832 27.7111 383.512 31.3211 398.742 36.1711L399.442 33.5611C430.222 43.3811 459.222 58.2411 485.172 77.4911L484.162 74.7611Z"
                  fill="#F7D002"
                ></path>
                <path
                  d="M621.339 284.379C616.749 231.509 599.189 182.889 572.079 141.349L564.319 146.529L560.489 140.799L568.239 135.629C567.199 134.109 566.149 132.609 565.079 131.109L557.549 136.579L553.499 130.999L561.029 125.529C559.889 123.999 558.739 122.459 557.569 120.949L550.259 126.719L545.989 121.309L553.299 115.539C526.009 81.8491 491.899 54.1391 453.289 34.2891L459.999 46.5491C480.429 57.9691 499.509 71.7691 516.709 87.5491L517.029 87.8491L520.399 100.539C531.159 111.239 541.209 122.889 550.269 135.199C554.489 140.939 558.559 146.879 562.339 152.859L575.199 158.699L575.279 158.839C577.719 162.999 580.099 167.279 582.349 171.559L581.469 172.019C579.249 167.799 576.909 163.579 574.509 159.479L561.669 153.649L561.589 153.519C557.799 147.509 553.719 141.549 549.479 135.789C540.789 123.989 531.189 112.799 520.929 102.469L523.229 111.129C528.109 116.299 532.819 121.689 537.369 127.279L535.109 128.959C543.469 139.199 551.129 150.049 558.039 161.419H558.019C566.329 175.089 573.529 189.469 579.499 204.449L582.099 203.389C589.589 222.209 594.999 241.559 598.389 261.129L595.679 261.579C598.439 277.459 599.859 293.489 599.949 309.479L602.639 309.339C602.809 341.649 597.639 373.819 587.349 404.449L589.639 402.639C595.159 386.579 599.249 369.899 601.789 353.049L601.809 352.909L613.889 338.899C616.409 313.439 615.659 287.879 611.659 262.909L612.649 262.749C616.669 287.849 617.419 313.559 614.869 339.149L614.849 339.309L602.759 353.339C600.199 370.249 596.089 386.989 590.539 403.099L590.489 403.239L586.749 406.189C582.209 419.419 576.729 432.359 570.289 444.879L585.339 435.089C594.839 414.029 601.899 391.819 606.299 369.069L606.379 368.649L619.549 354.589C622.729 331.789 623.429 308.279 621.349 284.369L621.339 284.379Z"
                  fill="#00FA55"
                ></path>
                <path
                  d="M572.169 480.979C595.529 445.119 611.629 404.289 618.599 360.719L608.969 370.939C604.419 393.899 597.199 416.309 587.499 437.539L587.319 437.939L576.299 445.059C569.439 458.599 561.469 471.759 552.559 484.179C548.419 489.959 544.019 495.659 539.489 501.119L537.909 515.149L537.799 515.269C534.589 518.889 531.249 522.479 527.879 525.919L527.169 525.219C530.489 521.819 533.779 518.289 536.949 514.719L538.529 500.699L538.629 500.579C543.179 495.109 547.589 489.389 551.749 483.589C560.289 471.679 567.959 459.089 574.609 446.139L567.079 450.999C563.669 457.239 559.999 463.379 556.079 469.439L553.789 467.809C546.629 478.919 538.679 489.559 530.009 499.649H529.999C519.579 511.759 508.119 523.049 495.719 533.369L497.539 535.509C481.959 548.449 465.219 559.579 447.659 568.839L446.399 566.399C432.149 573.939 417.349 580.229 402.159 585.259L403.119 587.779C372.449 597.919 340.249 602.949 307.939 602.629L310.369 604.249C327.349 604.529 344.479 603.269 361.289 600.479L361.429 600.459L378.489 607.609C403.469 602.139 427.559 593.529 450.069 582.009L450.529 582.899C427.899 594.479 403.679 603.139 378.559 608.619L378.409 608.649L378.259 608.589L361.319 601.489C344.449 604.279 327.239 605.539 310.219 605.239H310.069L306.099 602.589C292.119 602.359 278.119 601.139 264.219 598.889L278.179 610.179C301.149 612.709 324.449 612.549 347.449 609.709L347.879 609.659L365.209 617.789C441.559 604.439 507.439 563.709 553.419 506.779L546.139 501.039L550.409 495.629L557.679 501.369C558.799 499.919 559.909 498.449 560.999 496.969L553.509 491.529L557.559 485.949L565.059 491.399C566.169 489.839 567.269 488.279 568.349 486.699L560.629 481.559L564.449 475.819L572.179 480.969L572.169 480.979Z"
                  fill="#E54747"
                ></path>
                <path
                  d="M346.499 612.87C323.259 615.64 299.719 615.69 276.519 613.03L276.079 612.98L265.899 604.69C250.899 602.35 235.929 598.83 221.359 594.21C214.579 592.06 207.809 589.64 201.209 587.02L187.379 589.85L187.229 589.79C182.809 587.86 178.369 585.8 174.029 583.65L174.469 582.75C178.749 584.87 183.119 586.9 187.479 588.8L201.299 585.97L201.439 586.02C208.049 588.65 214.849 591.09 221.659 593.25C235.619 597.69 249.969 601.09 264.339 603.42L257.389 597.76C250.399 596.44 243.419 594.85 236.459 593L237.299 590.32C224.519 586.95 211.949 582.67 199.669 577.54V577.52C184.919 571.35 170.649 563.95 157.009 555.34L155.529 557.73C138.409 546.91 122.659 534.43 108.419 520.59L110.349 518.64C98.7787 507.41 88.2087 495.28 78.7487 482.4L76.6488 484.1C57.5188 458.06 42.7888 428.99 33.1088 398.17L32.3188 400.98C37.2888 417.21 43.7887 433.11 51.6387 448.24L51.7087 448.37L50.1787 466.81C63.0987 488.88 78.7388 509.12 96.6488 526.97L95.9388 527.68C77.9288 509.73 62.2188 489.38 49.2288 467.18L49.1488 467.04V466.88L50.6888 448.57C42.8288 433.38 36.3088 417.42 31.3288 401.13L31.2888 400.99L31.3288 400.85L32.5788 396.4C28.4688 383.03 25.3088 369.34 23.1488 355.43L16.7188 372.19C21.4088 394.82 28.7587 416.93 38.5688 437.92L38.7488 438.31L36.3588 457.44C71.6888 523.81 130.139 575.27 200.089 602.07L203.329 593.31L209.799 595.7L206.559 604.46C208.289 605.08 210.029 605.68 211.769 606.26L214.659 597.38L221.219 599.51L218.329 608.39C220.149 608.96 221.979 609.53 223.819 610.06L226.349 601.06L232.989 602.92L230.459 611.93C264.599 621.11 300.889 624.58 338.139 621.35C345.199 620.74 352.179 619.87 359.089 618.8L346.499 612.85V612.87Z"
                  fill="#8247E5"
                ></path>
                <path
                  d="M142.65 73.62L139.74 73.74C125.84 83.49 112.73 94.58 100.76 106.71L100.66 106.81L100.52 106.84L82.65 111.05C65.65 130.16 51.23 151.29 39.79 173.84L38.9 173.39C50.4 150.72 64.91 129.48 82.01 110.27L82.11 110.15L100.15 105.9C112.16 93.73 125.33 82.6 139.28 72.83L139.4 72.75L144.16 72.56C155.61 64.52 167.65 57.28 180.21 50.93L162.28 50C142.21 61.46 123.45 75.28 106.51 91.09L106.19 91.38L87.39 94.99C36.38 147.85 4.21 218.44 0.38 295.43L9.67 295.8L9.4 302.69L0.12 302.32C0.07 304.15 0.03 305.99 0.01 307.83H9.3V314.72H0C0.02 316.63 0.08 318.54 0.13 320.46L9.4 320.08L9.68 326.97L0.43 327.35C0.62 330.95 0.85 334.55 1.16 338.17C4.71 379.08 16.03 417.44 33.53 451.95L35.32 438.01C25.51 416.76 18.18 394.39 13.54 371.51L13.45 371.08L18.18 358.84C15.77 343.86 14.49 328.53 14.39 313.24C14.34 306.12 14.55 298.92 15.01 291.86L8.04 279.58V279.42C8.53 274.59 9.12 269.73 9.82 264.97L10.81 265.11C10.12 269.8 9.54 274.59 9.07 279.35L16.03 291.61V291.76C15.56 298.84 15.35 306.06 15.39 313.22C15.49 327.87 16.68 342.57 18.91 356.96L22.14 348.6C21.23 341.55 20.59 334.42 20.2 327.22L23.01 327.19C22.27 313.99 22.45 300.71 23.54 287.45H23.56C24.87 271.51 27.5 255.65 31.47 240.02L28.74 239.35C33.74 219.72 40.74 200.88 49.5 183.07L51.95 184.3C59.05 169.82 67.32 156.03 76.65 143.04L74.39 141.57C93.24 115.33 116.34 92.34 142.67 73.61L142.65 73.62Z"
                  fill="#0082FA"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="z-40 w-[350px] md:w-[540px] aspect-square absolute flex items-center justify-center"
            style={{
              transform: `scale(1.5) `,
              transition: "transform 1s ease",
            }}
          >
            <div
              className="z-50 cursor-pointer -top-5 w-[55px] md:top-0 md:w-[80px] absolute aspect-square"
              style={{ transform: "none", transition: "transform 1s ease" }}
            >
              <Image
                alt="ethereum chain logo"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="hover:animate-shake z-50 cursor-pointer"
                sizes="100vw"
                src={eth}
                style={{
                  transform: "none",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div
              className="z-50 cursor-pointer -right-[4%] top-[28%] w-[55px] md:right-[2%] md:top-[30%] md:w-[80px] absolute aspect-square"
              style={{ transform: "none", transition: "transform 1s ease" }}
            >
              <Image
                alt="optimism chain logo"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="hover:animate-shake z-50 cursor-pointer"
                sizes="100vw"
                src={op}
                style={{
                  transform: "none",
                  height: " 100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div
              className="z-50 cursor-pointer -left-1 top-[20%] w-[55px] md:left-3 md:top-[30%] md:w-[80px] absolute aspect-square"
              style={{ transform: "none", transition: "transform 1s ease" }}
            >
              <Image
                alt="arbitrum chain logo"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="hover:animate-shake z-50 cursor-pointer"
                sizes="100vw"
                src={arb}
                style={{
                  transform: "none",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div
              className="z-50 cursor-pointer left-[12%] bottom-[5%] w-[55px] md:left-[16%] md:bottom-[10%] md:w-[80px] absolute aspect-square"
              style={{ transform: "none", transition: "transform 1s ease" }}
            >
              <Image
                alt="polygon chain logo"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="hover:animate-shake z-50 cursor-pointer"
                sizes="100vw"
                src={pol}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div
              className="z-50 cursor-pointer right-[8%] bottom-[8%] w-[55px] md:right-[16%] md:bottom-[10%] md:w-[80px] absolute aspect-square"
              style={{ transform: "none", transition: "transform 1s ease" }}
            >
              <Image
                alt="avalanche chain logo"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="hover:animate-shake z-50 cursor-pointer"
                sizes="100vw"
                src={aval}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div
              style={{ transform: "none", transition: "transform 1s ease" }}
              className="flex flex-col justify-center items-center absolute w-[350px] z-10"
            >
              <Image
                alt="Logo of Stod"
                loading="lazy"
                width="3958"
                height="3597"
                decoding="async"
                data-nimg="1"
                className="w-[250px] md:w-[350px] my-2 md:my-4 z-10"
                src={stodLogo2}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 w-3/5 flex gap-x-6 items-center justify-center z-50">
          <div className="flex justify-center items-center relative text-black  md:w-1/5 h-10 w-1/5 cursor-pointer">
            <span className="w-full h-full flex flex-col justify-center items-center">
              <div className="flex flex-row w-full justify-between">
                <div className="bar-1"></div>
                <div className="triangle-1"></div>
              </div>
              <Link
                href={"/buy"}
                className="text-sm md:text-base w-full h-auto bg-[#dee451] text-black font-semibold flex justify-center items-center"
              >
                BUY $Arenavault Coin NOW
              </Link>
              <div className="flex flex-row w-full justify-between">
                <div className="triangle-2"></div>
                <div className="bar-1"></div>
                <div className="bar-1 !w-4/6 !h-[calc(100%+4px)]"></div>
              </div>
            </span>
          </div>
          <div className="flex justify-center items-center relative text-black w-1/5 md:w-1/5 h-10 cursor-pointer">
            <div className="w-full h-full flex flex-col justify-center items-center disabled:opacity-80 undefined">
              <div className="flex flex-row w-full justify-between">
                <div className="triangle-1-flipped"></div>
                <div className="bar-1"></div>
              </div>
              <Link
                href={"/buy"}
                className="w-full h-auto bg-[#dee451] text-sm md:text-base text-black font-semibold flex justify-center items-center"
              >
                <span className="false">Coming Soon</span>
              </Link>
              <div className="flex flex-row w-full justify-between">
                <div className="bar-1 !w-4/6 !h-[calc(100%+4px)]"></div>
                <div className="bar-1"></div>
                <div className="triangle-2-flipped"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <section
        id="mint"
        className="relative mt-20 w-full min-h-screen flex justify-center items-center flex-col bg-black"
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={lab_closeup}
          alt=""
        />
        <h1 className="fontsDharmaHeavy text-center text-[#FFF] text-8xl leading-[70px] md:text-2xl md:leading-[100px] z-20">
          BEGIN YOUR ADVENTURE
        </h1>
        <div className="z-20 flex gap-[400px] space-y-14 justify-center items-center lg:items-start lg:flex-row lg:justify-evenly lg:space-y-0 w-full mt-[63px]">
          <div
            className="flex flex-col items-center justify-center w-[333px]"
            id="cassette-section"
          >
            <div className="flex flex-row justify-between w-full">
              <div className="z-20 bar-black border-[#dee451] border-t-[1px] border-l-[1px]">
                <div className="thick-border-topleft"></div>
              </div>
              <div className="z-10 w-[20px] h-[20px] relative triangle-right"></div>
            </div>
            <div className="z-20 px-4 bg-black dark:bg-black border-l-[1px] border-r-[1px] border-solid border-[#dee451]">
              <div className="pt-3 flex flex-col items-center justify-center w-[300px]">
                <div
                  id="itemname-itemsubtextbox-CASSETTE"
                  className="flex items-center flex-row w-full mb-3"
                >
                  <p className="fontsDharmaHeavy text-[32px] text-white mr-[8px] border-[#dee451] tracking-wide leading-[12px]">
                    CASSETTE
                  </p>
                  <p className=" h-[26px] bg-[#dee451] text-sm border-[#dee451] text-black flex items-center px-[8px]">
                    PRINT A PAGE
                  </p>
                </div>
                <div
                  id="itemimg-CASSETTE"
                  className="w-full bg-[#B28FFF] my-[5px]"
                >
                  <Image
                    alt="Image of CASSETTE"
                    className="h-[200px] w-full object-contain"
                    src={cassette}
                  />
                </div>
                <div className="inter400 text-base">
                  <div id="itemdescription-CASSETTE" className="w-full mb-2 ">
                    <p className="text-white">
                      A blank, disposable storage device with limited capacity.
                    </p>
                  </div>
                  <div id="itemdescription-list-CASSETTE" className="w-full">
                    <div
                      id="itemdescription-list-item-CASSETTE-0"
                      className="flex flex-row mb-2 items-center h-[20px]"
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 3.83324C14.0015 3.46622 13.902 3.10587 13.7124 2.79164C13.5228 2.4774 13.2503 2.2214 12.9249 2.05167C12.5995 1.88195 12.2337 1.80503 11.8675 1.82935C11.5013 1.85368 11.1488 1.9783 10.8487 2.18957C10.5486 2.40085 10.3124 2.69063 10.166 3.02718C10.0196 3.36373 9.96866 3.73408 10.0187 4.09766C10.0687 4.46125 10.2179 4.80406 10.4497 5.08854C10.6816 5.37303 10.9873 5.58823 11.3333 5.71057V7.83324H4.66667V5.71057C5.11148 5.55331 5.48637 5.24386 5.72509 4.83692C5.96381 4.42998 6.05098 3.95174 5.9712 3.48675C5.89142 3.02175 5.64982 2.59993 5.28911 2.29583C4.9284 1.99174 4.4718 1.82495 4 1.82495C3.52821 1.82495 3.07161 1.99174 2.7109 2.29583C2.35018 2.59993 2.10859 3.02175 2.02881 3.48675C1.94903 3.95174 2.0362 4.42998 2.27492 4.83692C2.51363 5.24386 2.88853 5.55331 3.33334 5.71057V11.2892C2.88853 11.4465 2.51363 11.7559 2.27492 12.1629C2.0362 12.5698 1.94903 13.0481 2.02881 13.5131C2.10859 13.9781 2.35018 14.3999 2.7109 14.704C3.07161 15.0081 3.52821 15.1749 4 15.1749C4.4718 15.1749 4.9284 15.0081 5.28911 14.704C5.64982 14.3999 5.89142 13.9781 5.9712 13.5131C6.05098 13.0481 5.96381 12.5698 5.72509 12.1629C5.48637 11.7559 5.11148 11.4465 4.66667 11.2892V9.16657H11.3333C11.687 9.16657 12.0261 9.02609 12.2761 8.77604C12.5262 8.526 12.6667 8.18686 12.6667 7.83324V5.71057C13.0558 5.57394 13.3929 5.32003 13.6317 4.98381C13.8705 4.6476 13.9992 4.24562 14 3.83324Z"
                          fill="#DEE451"
                        ></path>
                      </svg>
                      <p className="leading-[1px] ml-3 text-white">
                        Access every level of the Lab.
                      </p>
                    </div>
                    <div
                      id="itemdescription-list-item-CASSETTE-1"
                      className="flex flex-row mb-2 items-center h-[20px]"
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66666 9.83333C2.66666 8.66667 2.94443 7.62778 3.49999 6.71667C4.05555 5.80556 4.66666 5.03889 5.33332 4.41667C5.99999 3.79444 6.6111 3.31933 7.16666 2.99133L7.99999 2.5V4.7C7.99999 5.11111 8.13888 5.436 8.41666 5.67467C8.69443 5.91333 9.00555 6.03289 9.34999 6.03333C9.53888 6.03333 9.71955 5.99444 9.89199 5.91667C10.0644 5.83889 10.2227 5.71111 10.3667 5.53333L10.6667 5.16667C11.4667 5.63333 12.1111 6.28044 12.6 7.108C13.0889 7.93556 13.3333 8.844 13.3333 9.83333C13.3333 10.8111 13.0944 11.7029 12.6167 12.5087C12.1389 13.3144 11.5111 13.9502 10.7333 14.416C10.9222 14.1493 11.0695 13.8576 11.1753 13.5407C11.2811 13.2238 11.3338 12.888 11.3333 12.5333C11.3333 12.0889 11.25 11.6693 11.0833 11.2747C10.9167 10.88 10.6778 10.5273 10.3667 10.2167L7.99999 7.9L5.64999 10.2167C5.32777 10.5389 5.08332 10.8944 4.91666 11.2833C4.74999 11.6722 4.66666 12.0889 4.66666 12.5333C4.66666 12.8889 4.71955 13.2251 4.82532 13.542C4.9311 13.8589 5.07821 14.1504 5.26666 14.4167C4.48888 13.95 3.8611 13.3138 3.38332 12.508C2.90555 11.7022 2.66666 10.8107 2.66666 9.83333ZM7.99999 9.76667L9.41666 11.15C9.60555 11.3389 9.74999 11.55 9.84999 11.7833C9.94999 12.0167 9.99999 12.2667 9.99999 12.5333C9.99999 13.0778 9.80555 13.5416 9.41666 13.9247C9.02777 14.3078 8.55555 14.4996 7.99999 14.5C7.44443 14.5 6.97221 14.3082 6.58332 13.9247C6.19443 13.5411 5.99999 13.0773 5.99999 12.5333C5.99999 12.2778 6.04999 12.0304 6.14999 11.7913C6.24999 11.5522 6.39443 11.3384 6.58332 11.15L7.99999 9.76667Z"
                          fill="#DEE451"
                        ></path>
                      </svg>
                      <p className="leading-[1px] ml-3 text-white">
                        Burned on use.
                      </p>
                    </div>
                    <div
                      id="itemdescription-list-item-CASSETTE-2"
                      className="flex flex-row mb-2 items-center h-[20px]"
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6667 7.16658H3.33333C2.598 7.16658 2 7.76459 2 8.49992V13.8333C2 14.5686 2.598 15.1666 3.33333 15.1666H12.6667C13.402 15.1666 14 14.5686 14 13.8333V8.49992C14 7.76459 13.402 7.16658 12.6667 7.16658ZM3.33333 4.49992H12.6667V5.83325H3.33333V4.49992ZM4.66667 1.83325H11.3333V3.16659H4.66667V1.83325Z"
                          fill="#DEE451"
                        ></path>
                      </svg>
                      <p className="leading-[1px] ml-3 text-white">
                        Keep 1 art page.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="flex flex-row items-center space-x-4">
                      <select className="select-chevron inter700 w-3/4 border border-[#dee451] bg-transparent text-[#dee451] appearance-none pr-8 pl-2 py-1">
                        <option className="text-[#dee451] bg-black " value="1">
                          Ethereum
                        </option>
                        <option
                          className="text-[#dee451] bg-black"
                          value="42161"
                        >
                          Arbitrum
                        </option>
                        <option className="text-[#dee451] bg-black" value="137">
                          Polygon
                        </option>
                        <option className="text-[#dee451] bg-black" value="10">
                          Optimism
                        </option>
                        <option
                          className="text-[#dee451] bg-black"
                          value="43114"
                        >
                          Avalanche
                        </option>
                      </select>
                      <div className="flex-grow flex flex-row justify-center text-center items-center border-[1px] border-[#dee451] ">
                        <button className="px-2 bg-transparent text-[#dee451] rounded-l-md">
                          -
                        </button>
                        <input
                          type="number"
                          className="w-[20px] h-[30px] leading-[30px] bg-transparent text-center text-[#dee451]"
                          value="1"
                        />
                        <button className="px-2 bg-transparent text-[#dee451] rounded-r-md">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 mb-4 flex justify-center items-center relative text-black w-full h-11">
                      <button className="w-full h-full flex flex-col justify-center items-center disabled:opacity-80 ">
                        <div className="flex flex-row w-full justify-between">
                          <div className="bar-1"></div>
                          <div className="triangle-1"></div>
                        </div>
                        <Link
                          href={"/buy"}
                          className="w-full h-auto border-[#dee451] bg-[#dee451] text-sm md:text-base text-black font-semibold flex justify-center items-center"
                        >
                          <span>CONNECT WALLET</span>
                        </Link>
                        <div className="flex flex-row w-full justify-between">
                          <div className="triangle-2"></div>
                          <div className="bar-1"></div>
                          <div className="bar-1 !w-4/6 !h-[calc(100%+4px)]"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="mb-2 bg-transparent flex flex-row px-0 py-0">
                    <div className="bg-custom-gradient w-1/4 p-1"></div>
                    <div className="w-1/2 bg-darkGreen text-[#dee451] text-center font-semibold py-1 text-[10px]">
                      2528 MINTED • OPEN EDITION
                    </div>
                    <div className="bg-custom-gradient w-1/4 p-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="z-10 w-[20px] h-[20px] relative triangle-left"></div>
              <div className="bar-black h-[20px] border-[#dee451] border-b-[1px]"></div>
              <div className="bar-black !w-4/6 !h-[30px] border-[#dee451] border-b-[1px] border-r-[1px]">
                <div className="half-border-left"></div>
                <div className="thick-border-bottomright"></div>
              </div>
            </div>
          </div>
          <div
            className="flex  flex-col items-center lg:h-[586.5px] justify-evenly  w-[40%]  min-w-[333px]"
            id="pages-section"
          >
            <div className="flex flex-row justify-between w-full">
              <div className="z-20 bar-black border-augmintYellow border-t-[1px] border-l-[1px]">
                <div className="thick-border-topleft"></div>
              </div>
              <div className="z-10 w-[20px] h-[20px] relative triangle-right"></div>
            </div>
            <div className="z-20 h-full flex px-4 bg-black dark:bg-black border-l-[1px] border-r-[1px] border-solid border-augmintYellow w-full pb-2">
              <div className="pt-3 flex flex-col items-center justify-center flex-1 w-full">
                <div className="w-full flex flex-row">
                  <div
                    id="itemname-itemsubtextbox-pages"
                    className="flex flex-row items-center w-full mb-3"
                  >
                    <p className="fontsDharmaHeavy text-[32px] mr-[8px] text-white tracking-wide leading-[12px]">
                      PAGES
                    </p>
                    <p className="inter700 text-sm h-[26px] bg-[#dee451] border-[#dee451] text-black flex items-center px-[8px]">
                      UNLOCK THE LAB
                    </p>
                  </div>
                </div>
                <section className="flex flex-col w-full flex-1">
                  <div id="itemimg-pages" className="w-full h-auto">
                    <Image
                      alt="Image of pages"
                      src={unlock_the_lab}
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-1 justify-center">
                    <div className="flex lg:pl-14 items-center lg:pt-[20px]">
                      <div className="w-[20%] hidden lg:inline-block">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="lock"
                          className="svg-inline--fa fa-lock text-augmintYellow w-full h-auto"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                          ></path>
                        </svg>
                      </div>
                      <div className="inter400 text-base w-full lg:w-[80%] inline-flex flex-col lg:px-14">
                        <div
                          id="itemdescription-pages"
                          className="w-full mb-2 lg:mb-2 text-base text-white "
                        >
                          <p>
                            Pages from Stods Journals reveal fragments of his
                            research and story.
                          </p>
                        </div>
                        <div
                          id="itemdescription-list-pages"
                          className="w-full text-base"
                        >
                          <div
                            id="itemdescription-list-item-unlock-access"
                            className="flex flex-row mb-2 lg:mb-2 items-center h-[20px]"
                          >
                            <Image src={vial} alt="" />
                            <p className="leading-[1px] ml-3 text-white">
                              Unlocks access to a Lab.
                            </p>
                          </div>
                          <div
                            id="itemdescription-list-item-burn-to-claim"
                            className="flex mb-2 lg:mb-2 items-start"
                          >
                            <div className="mt-0.5">
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.66666 9.83333C2.66666 8.66667 2.94443 7.62778 3.49999 6.71667C4.05555 5.80556 4.66666 5.03889 5.33332 4.41667C5.99999 3.79444 6.6111 3.31933 7.16666 2.99133L7.99999 2.5V4.7C7.99999 5.11111 8.13888 5.436 8.41666 5.67467C8.69443 5.91333 9.00555 6.03289 9.34999 6.03333C9.53888 6.03333 9.71955 5.99444 9.89199 5.91667C10.0644 5.83889 10.2227 5.71111 10.3667 5.53333L10.6667 5.16667C11.4667 5.63333 12.1111 6.28044 12.6 7.108C13.0889 7.93556 13.3333 8.844 13.3333 9.83333C13.3333 10.8111 13.0944 11.7029 12.6167 12.5087C12.1389 13.3144 11.5111 13.9502 10.7333 14.416C10.9222 14.1493 11.0695 13.8576 11.1753 13.5407C11.2811 13.2238 11.3338 12.888 11.3333 12.5333C11.3333 12.0889 11.25 11.6693 11.0833 11.2747C10.9167 10.88 10.6778 10.5273 10.3667 10.2167L7.99999 7.9L5.64999 10.2167C5.32777 10.5389 5.08332 10.8944 4.91666 11.2833C4.74999 11.6722 4.66666 12.0889 4.66666 12.5333C4.66666 12.8889 4.71955 13.2251 4.82532 13.542C4.9311 13.8589 5.07821 14.1504 5.26666 14.4167C4.48888 13.95 3.8611 13.3138 3.38332 12.508C2.90555 11.7022 2.66666 10.8107 2.66666 9.83333ZM7.99999 9.76667L9.41666 11.15C9.60555 11.3389 9.74999 11.55 9.84999 11.7833C9.94999 12.0167 9.99999 12.2667 9.99999 12.5333C9.99999 13.0778 9.80555 13.5416 9.41666 13.9247C9.02777 14.3078 8.55555 14.4996 7.99999 14.5C7.44443 14.5 6.97221 14.3082 6.58332 13.9247C6.19443 13.5411 5.99999 13.0773 5.99999 12.5333C5.99999 12.2778 6.04999 12.0304 6.14999 11.7913C6.24999 11.5522 6.39443 11.3384 6.58332 11.15L7.99999 9.76667Z"
                                  fill="#DEE451"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-white">
                              Burn to claim a Page from the next Journal.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="z-10 w-[20px] h-[20px] relative triangle-left"></div>
              <div className="bar-black h-[20px] border-[#dee451] border-b-[1px]"></div>
              <div className="bar-black !w-4/6 !h-[30px] border-[#dee451] border-b-[1px] border-r-[1px]">
                <div className="half-border-left"></div>
                <div className="thick-border-bottomright"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
        <div className="z-10 absolute top-0 w-full h-1/4 bg-gradient-to-t from-transparent to-black"></div>
      </section>

      <section
        id="mechanics"
        className="h-auto w-full text-white flex flex-col text-center px-[30px] md:px-[222px] items-center py-[80px] overflow-hidden} mt-[63px] pt-0 overflow-hidden"
      >
        <section className="flex flex-col items-center w-full relative">
          <h1 className="fontsDharmaHeavy text-center text-[120px] leading-[70px] md:text-2xl md:leading-[100px]">
            ACQUIRE YOUR DEVICES
          </h1>
          <p className=" mt-2 md:mt-0 md:w-3/4 inter400 text-base w-[64%]">
            {` You won't be let in the building if you don't bring the right gear.
            Choose a device to gain security clearance then get to work!`}
          </p>
          <div className="flex flex-row items-center justify-around mt-[63px] w-full">
            <div className="flex flex-col w-1/2 h-full justify-between items-center relative">
              <div className="flex flex-col items-center">
                <div className="flex gap-x-4 items-center">
                  <p className="fontsDharmaHeavy text-3xl mt-[6px]">
                    REPLICATOR
                  </p>
                  <p className="h-fit py-1 px-3 inter700 text-[12px] bg-[#dee451] text-black flex items-center justify-center">
                    5 USES PER DEVICE
                  </p>
                </div>
                <div className="my-8 flex gap-x-2">
                  <svg
                    width="101"
                    height="65"
                    viewBox="0 0 101 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_391_5880)">
                      <path
                        d="M58.903 10.5917L64.0577 15.7463V20.901H38.2845V15.7463L43.4391 10.5917H58.903ZM43.4391 24.803L48.5937 27.3803V29.9577H53.7484V27.3803L58.903 24.803V22.2257H43.4391V24.803ZM36.1917 11.9422L29.2638 7.32364V5.43704H26.6865V8.70508L35.2226 14.3958L36.5061 14.6123L36.8257 14.2927L38.7432 12.3752L36.1917 11.9473V11.9422ZM73.0783 5.43704V7.32364L66.1504 11.9422L63.5989 12.37L65.5164 14.2876L65.836 14.6071L67.1195 14.3906L75.6556 8.69993V5.43188H73.0783V5.43704Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M58.903 10.5935L64.0577 15.7482V20.9028H38.2845V15.7482L43.4391 10.5935H58.903ZM43.4391 24.8049L48.5937 27.3822V29.9595H53.7484V27.3822L58.903 24.8049V22.2276H43.4391V24.8049ZM36.1917 11.944L29.2638 7.32549V2.86157H26.6865V8.70693L35.2226 14.3977L36.5061 14.6142L36.8257 14.2946L38.7432 12.377L36.1917 11.9492V11.944ZM73.0783 2.86157V7.32549L66.1504 11.944L63.5989 12.3719L65.5164 14.2894L65.836 14.609L67.1195 14.3925L75.6556 8.70178V2.86157H73.0783Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M17.7739 60.5927H84.5729L93.5935 51.5721H100.918V5.43809L95.7636 0.283447H6.06772L0.913086 5.43809V51.5721H8.75329L17.7739 60.5927ZM3.49041 8.01541L8.64504 2.86077H93.1811L98.3358 8.01541V44.0979H90.6038L85.4492 49.2525H16.377L11.2224 44.0979H3.49041V8.01541Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M93.8048 52.0881L84.7842 61.1088H17.5574L8.5368 52.0881H0.913086V62.1397L3.49041 64.717H98.3358L100.913 62.1397V52.0881H93.8048Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M10.8112 44.0991V14.5115L15.1411 10.1816H26.1102L25.8318 9.99084L25.1411 9.53208V8.70734V8.01661V4.15063H9.93491L4.78027 9.30527L8.64625 13.1713V44.0991H10.8112Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M85.4495 49.2516L89.8825 44.8186H85.1402L80.8103 49.1485H21.6351L17.3052 44.8186H11.9443L16.3773 49.2516H85.4495Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M33.193 8.08878L36.3373 10.1816H41.6672L42.3476 9.50115L42.8012 9.04754H43.4404H58.9043H59.5435L59.9971 9.50115L60.6775 10.1816H66.0074L69.1517 8.08878L71.5332 6.50115V4.15063H30.8115V6.50115L33.193 8.08878Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M93.8004 44.0991V12.5527L97.0478 9.30527L91.8932 4.15063H77.2025V8.01661V8.70734V9.53208L76.5118 9.99084L76.2334 10.1816H87.3056L91.6355 14.5115V44.0991H93.8004Z"
                        fill="#8E9030"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_391_5880">
                        <rect
                          width="100"
                          height="64.433"
                          fill="white"
                          transform="translate(0.913086 0.283447)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="40"
                    height="63"
                    viewBox="0 0 40 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_391_5890)">
                      <path
                        d="M0.913086 0.5H33.8L37.8435 4.54348V16.9435L40 19.3696V38.2391L37.8435 40.6652V60.3435H14.3913H0.913086V40.9348L3.60874 38.2391V19.3696L0.913086 16.6739V0.5Z"
                        fill="white"
                      ></path>
                      <path
                        d="M20.5146 35.6955V40.9018L26.912 31.9219L20.5146 35.6955Z"
                        fill="black"
                      ></path>
                      <path
                        d="M20.5146 27.8047V34.4895L26.912 30.7068L20.5146 27.8047Z"
                        fill="black"
                      ></path>
                      <path
                        d="M20.5146 20.0977V27.8045L26.912 30.7066L20.5146 20.0977Z"
                        fill="black"
                      ></path>
                      <path
                        d="M20.5168 35.6955V40.9018L14.124 31.9219L20.5168 35.6955Z"
                        fill="black"
                      ></path>
                      <path
                        d="M20.5168 27.8047V34.4895L14.124 30.7068L20.5168 27.8047Z"
                        fill="black"
                      ></path>
                      <path
                        d="M20.5168 20.0977V27.8045L14.124 30.7066L20.5168 20.0977Z"
                        fill="black"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_391_5890">
                        <rect
                          width="39.087"
                          height="62"
                          fill="white"
                          transform="translate(0.913086 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="40"
                    height="63"
                    viewBox="0 0 40 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_391_5899)">
                      <path
                        d="M0 0.5H32.887L36.9304 4.54348V16.9435L39.087 19.3696V38.2391L36.9304 40.6652V60.3435H0V40.9348L2.69565 38.2391V19.3696L0 16.6739V0.5Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5 20.5C15.2534 20.5 11 24.7534 11 30C11 35.2466 15.2534 39.5 20.5 39.5C25.7466 39.5 30 35.2466 30 30C30 24.7534 25.7466 20.5 20.5 20.5ZM19.6916 32.6901L19.6855 32.7014C19.4749 33.0701 19.3681 33.2571 19.2202 33.3978C19.0589 33.5519 18.8658 33.6638 18.6532 33.7265C18.4591 33.7799 18.2424 33.7799 17.8079 33.7799H15.9642C15.5769 33.7799 15.3848 33.7799 15.2688 33.7049C15.1425 33.6227 15.0654 33.4882 15.0562 33.3382C15.049 33.2006 15.1445 33.0321 15.3366 32.6962L19.8888 24.6733C20.083 24.3323 20.1805 24.1617 20.3038 24.0991C20.4363 24.0313 20.5955 24.0313 20.7291 24.0991C20.8523 24.1617 20.9509 24.3323 21.144 24.6733L22.0797 26.3064L22.0849 26.3146C22.2944 26.6803 22.4002 26.8652 22.4464 27.0603C22.4978 27.273 22.4978 27.4969 22.4464 27.7095C22.4002 27.9057 22.2944 28.0926 22.0818 28.4634L19.6906 32.6901H19.6916ZM25.8083 33.7028C25.6912 33.7799 25.496 33.7799 25.1057 33.7799H22.4639C22.0746 33.7799 21.8784 33.7799 21.7634 33.7049C21.637 33.6227 21.56 33.4851 21.5508 33.3361C21.5436 33.1995 21.6401 33.0332 21.8332 32.6993L21.8373 32.6911L23.1562 30.4273C23.3503 30.0935 23.4479 29.9281 23.5691 29.8644C23.7026 29.7966 23.8588 29.7966 23.9912 29.8644C24.1114 29.926 24.2059 30.0842 24.3918 30.3996L24.4072 30.4252L25.7302 32.6891C25.7364 32.7004 25.7436 32.7106 25.7497 32.7219C25.9335 33.0383 26.0271 33.1995 26.0199 33.3331C26.0127 33.482 25.9335 33.6196 25.8072 33.7018L25.8083 33.7028Z"
                        fill="black"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_391_5899">
                        <rect
                          width="39.087"
                          height="62"
                          fill="white"
                          transform="translate(0 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="86"
                    height="63"
                    viewBox="0 0 86 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0889 30.5L26.0889 33.3868V27.6132L21.0889 30.5ZM53.0889 30L25.5889 30V31L53.0889 31V30Z"
                      fill="white"
                    ></path>
                    <g clip-path="url(#clip0_416_3)">
                      <path
                        d="M46.6738 0.5H79.5608L83.6043 4.54348V16.9435L85.7608 19.3696V38.2391L83.6043 40.6652V60.3435H46.6738V40.9348L49.3695 38.2391V19.3696L46.6738 16.6739V0.5Z"
                        fill="white"
                      ></path>
                      <g clip-path="url(#clip1_416_3)">
                        <g clip-path="url(#clip2_416_3)">
                          <path
                            d="M62.2717 35.3512C61.4075 35.3512 60.6999 35.1482 60.1489 34.7422C59.6037 34.3304 59.3311 33.7388 59.3311 32.979C59.3311 32.8166 59.3485 32.6252 59.3833 32.3932C59.4761 31.8712 59.6095 31.2448 59.7835 30.5082C60.2765 28.513 61.5525 27.5154 63.6057 27.5154C64.1625 27.5154 64.6671 27.6082 65.1079 27.7996C65.5487 27.9794 65.8967 28.2578 66.1519 28.629C66.4071 28.9944 66.5347 29.4294 66.5347 29.934C66.5347 30.0848 66.5173 30.2762 66.4825 30.5082C66.3723 31.152 66.2447 31.7842 66.0881 32.3932C65.8329 33.385 65.3979 34.1332 64.7715 34.6262C64.1509 35.1134 63.3157 35.3512 62.2717 35.3512ZM62.4283 33.7852C62.8343 33.7852 63.1765 33.6634 63.4607 33.4256C63.7507 33.1878 63.9595 32.8224 64.0813 32.3236C64.2495 31.6392 64.3771 31.0476 64.4641 30.5372C64.4931 30.3864 64.5105 30.2298 64.5105 30.0674C64.5105 29.4062 64.1683 29.0756 63.4781 29.0756C63.0721 29.0756 62.7241 29.1974 62.4341 29.4352C62.1499 29.673 61.9469 30.0384 61.8251 30.5372C61.6917 31.0244 61.5641 31.616 61.4307 32.3236C61.4017 32.4686 61.3843 32.6194 61.3843 32.7818C61.3785 33.4546 61.7323 33.7852 62.4283 33.7852Z"
                            fill="black"
                          ></path>
                          <path
                            d="M67.0392 35.2467C66.958 35.2467 66.9 35.2235 66.8536 35.1713C66.8188 35.1133 66.8072 35.0495 66.8188 34.9741L68.321 27.8981C68.3326 27.8169 68.3732 27.7531 68.4428 27.7009C68.5066 27.6487 68.5762 27.6255 68.6516 27.6255H71.5458C72.352 27.6255 72.9958 27.7937 73.483 28.1243C73.976 28.4607 74.2254 28.9421 74.2254 29.5743C74.2254 29.7541 74.2022 29.9455 74.1616 30.1427C73.9818 30.9779 73.6164 31.5927 73.0596 31.9929C72.5144 32.3931 71.7662 32.5903 70.815 32.5903H69.3476L68.8488 34.9741C68.8314 35.0553 68.7966 35.1191 68.727 35.1713C68.6632 35.2235 68.5936 35.2467 68.5182 35.2467H67.0392ZM70.8904 31.0881C71.1978 31.0881 71.4588 31.0069 71.685 30.8387C71.917 30.6705 72.0678 30.4327 72.1432 30.1195C72.1664 29.9977 72.178 29.8875 72.178 29.7947C72.178 29.5859 72.1142 29.4235 71.9924 29.3133C71.8706 29.1973 71.656 29.1393 71.3602 29.1393H70.0552L69.6434 31.0881H70.8904Z"
                            fill="black"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <path
                      d="M33.9847 1.51087L36.0065 3.53261L35.6529 3.88616L36.5173 4.75059V5.57681H37.0173V7.64348H36.5173V9.71015H37.0173V11.7768H36.5173V13.8435H37.0173V15.9101H36.5173V16.9435V17.1336L36.6436 17.2757L37.1828 17.8822L37.5565 17.55L38.6347 18.763L38.261 19.0952L38.6739 19.5597V20.313H39.1739V22.2H38.6739V24.087H39.1739V25.9739H38.6739V27.8609H39.1739V29.7478H38.6739V31.6348H39.1739V33.5217H38.6739V35.4087H39.1739V37.2957H38.6739V38.049L38.261 38.5135L38.6347 38.8457L37.5565 40.0587L37.1828 39.7265L36.6436 40.333L36.5173 40.4751V40.6652V41.6491H37.0173V43.617H36.5173V45.5848H37.0173V47.5526H36.5173V49.5204H37.0173V51.4883H36.5173V53.4561H37.0173V55.4239H36.5173V57.3917H37.0173V59.3596H36.5173V59.8435H35.9915V60.3435H33.9398V59.8435H31.8881V60.3435H29.8364V59.8435H27.7847V60.3435H25.7331V59.8435H23.6814V60.3435H21.6297V59.8435H19.578V60.3435H17.5263V59.8435H15.4746V60.3435H13.4229V59.8435H11.3712V60.3435H9.31952V59.8435H7.26783V60.3435H5.21614V59.8435H3.16445V60.3435H1.11276V59.8435H0.586914V59.373H0.0869141V57.4322H0.586914V55.4913H0.0869141V53.5504H0.586914V51.6096H0.0869141V49.6687H0.586914V47.7278H0.0869141V45.787H0.586914V43.8461H0.0869141V41.9052H0.586914V41.1419L1.11438 40.6144L0.760827 40.2609L2.10865 38.913L2.46221 39.2666L3.13612 38.5927L3.28257 38.4462V38.2391V37.2957H2.78257V35.4087H3.28257V33.5217H2.78257V31.6348H3.28257V29.7478H2.78257V27.8609H3.28257V25.9739H2.78257V24.087H3.28257V22.2H2.78257V20.313H3.28257V19.3696V19.1625L3.13612 19.016L2.46221 18.3421L2.10865 18.6957L0.760827 17.3478L1.11438 16.9943L0.586914 16.4668V15.663H0.0869141V13.6413H0.586914V11.6196H0.0869141V9.59783H0.586914V7.57609H0.0869141V5.55435H0.586914V3.53261H0.0869141V1.51087H0.586914V1H1.11463V0.5H3.17006V1H5.2255V0.5H7.28093V1H9.33637V0.5H11.3918V1H13.4472V0.5H15.5027V1H17.5581V0.5H19.6135V1H21.669V0.5H23.7244V1H25.7799V0.5H27.8353V1H29.8907V0.5H31.9462V1H32.7668L33.6312 1.86442L33.9847 1.51087Z"
                      stroke="white"
                      stroke-dasharray="2 2"
                    ></path>
                    <defs>
                      <clipPath id="clip0_416_3">
                        <rect
                          width="39.087"
                          height="62"
                          fill="white"
                          transform="translate(46.6738 0.5)"
                        ></rect>
                      </clipPath>
                      <clipPath id="clip1_416_3">
                        <rect
                          x="52.4121"
                          y="17.5"
                          width="28.2941"
                          height="28.2941"
                          rx="14.1471"
                          fill="white"
                        ></rect>
                      </clipPath>
                      <clipPath id="clip2_416_3">
                        <rect
                          width="29"
                          height="29"
                          fill="white"
                          transform="translate(52 17)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="">
                <ul>
                  <li className="flex flex-row justify-center">
                    {" "}
                    <span className="text-[24px] leading-6 mr-1">•</span>
                    Seamlessly progress through the Lab.{" "}
                  </li>
                  <li className="flex flex-row justify-center">
                    {" "}
                    <span className="text-[24px] leading-6 mr-1">•</span> Claim
                    and keep 5 of 25 Pages.{" "}
                  </li>
                  <li className="flex flex-row justify-center">
                    {" "}
                    <span className="text-[24px] leading-6 mr-1">•</span> Binds
                    to your wallet on use.
                  </li>
                </ul>
              </div>
              <Link
                href={"/buy"}
                rel="noreferrer"
                className="mt-5 py-2 px-2 text-xs text-black items-center bg-[#dee451] justify-center font-bold"
              >
                Coming Soon
              </Link>
            </div>
            <div className="flex flex-col w-1/2 h-[300px] justify-between items-center  mt-0">
              <div className="flex flex-col items-center">
                <div className="flex gap-x-4 items-center">
                  <p className="fontsDharmaHeavy text-3xl mt-[6px]">CASSETTE</p>
                  <p className="h-fit py-1 px-3 inter700 text-[12px] bg-[#dee451] text-black flex items-center justify-center">
                    1 USE PER DEVICE
                  </p>
                </div>
                <div className="my-8 flex gap-x-2">
                  <svg
                    width="101"
                    height="66"
                    viewBox="0 0 101 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_391_5805)">
                      <path
                        d="M1.11726 36.1016H2.53923V48.7977H1.11726C0.502768 48.7977 0 48.295 0 47.6805V37.2188C0 36.6043 0.502768 36.1016 1.11726 36.1016Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M77.4004 59.2114L79.6857 61.4968H97.4603L99.9995 58.9575V51.5938H77.4004V59.2114Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M92.1292 26.2031H87.8125H87.5586V48.5484H92.1292V26.2031Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M92.1292 25.6961V13.5078H87.5586V25.6961H87.8125H92.1292Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M49.2145 23.8125C45.233 23.8125 41.998 27.0526 41.998 31.029C41.998 35.0054 45.2381 38.2455 49.2145 38.2455C53.191 38.2455 56.431 35.0054 56.431 31.029C56.431 27.0526 53.191 23.8125 49.2145 23.8125ZM49.2145 33.4667C47.8688 33.4667 46.7769 32.3748 46.7769 31.029C46.7769 29.6832 47.8688 28.5913 49.2145 28.5913C50.5603 28.5913 51.6522 29.6832 51.6522 31.029C51.6522 32.3748 50.5603 33.4667 49.2145 33.4667Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M14.6823 9.5H10.1168C10.0102 9.5 9.92383 9.5864 9.92383 9.69298V21.8762C9.92383 21.9828 10.0102 22.0692 10.1168 22.0692H14.6823C14.7889 22.0692 14.8753 21.9828 14.8753 21.8762V9.69298C14.8753 9.5864 14.7889 9.5 14.6823 9.5Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M40.3945 8.11144H58.0371C55.2947 7.05004 52.3238 6.46094 49.2158 6.46094C46.1078 6.46094 43.1318 7.05004 40.3945 8.11144Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M16.2056 7.91846H23.5693V0.554688H21.538V5.63315H21.0301V0.554688H18.9987V5.63315H18.4909V0.554688H16.4595V5.63315H15.9516V0.554688H8.8418V7.91846H15.9516H16.2056Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M14.6823 23.7188H10.1168C10.0102 23.7188 9.92383 23.8052 9.92383 23.9117V52.346C9.92383 52.4526 10.0102 52.539 10.1168 52.539H14.6823C14.7889 52.539 14.8753 52.4526 14.8753 52.346V23.9117C14.8753 23.8052 14.7889 23.7188 14.6823 23.7188Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M76.8922 8.11127V3.09375H24.0762V8.11127H34.7714C38.9561 5.46539 43.9076 3.92154 49.2146 3.92154C54.5216 3.92154 59.4629 5.46539 63.6475 8.11127H76.8922Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M16.2059 54.1328H15.952H3.50977V58.9574L6.049 61.4966H15.952V56.4181H16.4598V61.4966H18.4912V56.4181H18.9991V61.4966H21.0305V56.4181H21.5383V61.4966H23.5697V54.1328H16.2059Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M76.8934 41.4375H64.959V43.4689H76.8934V41.4375Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M49.2146 58.1272C43.9076 58.1272 38.9561 56.5834 34.7714 53.9375H24.0762V58.955H76.8922V53.9375H63.6475C59.468 56.5834 54.5216 58.1272 49.2146 58.1272Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M58.041 53.9375H40.3984C43.1408 54.9989 46.1117 55.588 49.2197 55.588C52.3277 55.588 55.3037 54.9989 58.041 53.9375Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M15.952 8.4263H8.3343V0.554688H6.049L3.50977 3.09392V53.6246H15.952V8.4263ZM15.2512 52.355C15.2512 52.6699 14.9972 52.9238 14.6824 52.9238H10.1118C9.7969 52.9238 9.54298 52.6699 9.54298 52.355V23.9156C9.54298 23.6007 9.7969 23.3468 10.1118 23.3468H14.6824C14.9972 23.3468 15.2512 23.6007 15.2512 23.9156V52.355ZM15.2512 21.8842C15.2512 22.1991 14.9972 22.453 14.6824 22.453H10.1118C9.7969 22.453 9.54298 22.1991 9.54298 21.8842V9.69592C9.54298 9.38105 9.7969 9.12713 10.1118 9.12713H14.6824C14.9972 9.12713 15.2512 9.38105 15.2512 9.69592V21.8842Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M99.7464 41.4375H95.1758V43.4689H99.7464V41.4375Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M81.9718 36.3594H64.959V40.93H77.4012V43.9771H64.959V46.0542L67.2037 48.2938H84.5568L86.7964 46.0542V43.9771H81.9718V36.3594Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M99.7464 23.6641H95.1758V25.6954H99.7464V23.6641Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M99.7464 18.5859H95.1758V20.6173H99.7464V18.5859Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M97.4611 26.2031H95.1758V28.2345H97.4611V26.2031Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M99.7464 16.0469H95.1758V18.0783H99.7464V16.0469Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M99.7464 28.7422H95.1758V30.7736H99.7464V28.7422Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M97.4603 0.554688H79.6857L77.4004 2.84V10.4577H99.9995V3.09392L97.4603 0.554688ZM92.3819 8.4263C90.8431 8.4263 89.5887 7.17192 89.5887 5.63315C89.5887 4.09438 90.8431 2.84 92.3819 2.84C93.9206 2.84 95.175 4.09438 95.175 5.63315C95.175 7.17192 93.9206 8.4263 92.3819 8.4263Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M92.383 3.35156C91.1235 3.35156 90.0977 4.37741 90.0977 5.63687C90.0977 6.89633 91.1235 7.92218 92.383 7.92218C93.6424 7.92218 94.6683 6.89633 94.6683 5.63687C94.6683 4.37741 93.6424 3.35156 92.383 3.35156ZM92.383 7.11978C91.5653 7.11978 90.9001 6.4545 90.9001 5.63687C90.9001 4.81924 91.5653 4.15396 92.383 4.15396C93.2006 4.15396 93.8659 4.81924 93.8659 5.63687C93.8659 6.4545 93.2006 7.11978 92.383 7.11978Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M97.4611 13.5078H95.1758V15.5392H97.4611V13.5078Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M99.7464 21.125H95.1758V23.1564H99.7464V21.125Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M64.959 15.9974V35.8491H86.7964V15.9974L84.5568 13.7578H67.2037L64.959 15.9974Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M99.7464 43.9766H95.1758V46.0079H99.7464V43.9766Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M76.8927 8.42969H16.459V53.628H76.8927V51.0888H99.9997V49.0574H94.6673V13.0003H99.9997V10.9689H76.8927V8.42969ZM35.4169 51.3427H31.2983C25.6713 46.3709 22.1113 39.1087 22.1113 31.0288C22.1113 22.949 25.6713 15.6868 31.2983 10.715H67.1166C67.8378 11.3549 68.5234 12.0354 69.1785 12.7464H84.9776L87.0547 14.8235V13.0003H92.641V49.0574H87.0547V47.2342L84.9776 49.3113H69.1785C68.5234 50.0223 67.8429 50.7028 67.1166 51.3427H35.4169Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M86.7952 36.3594H82.4785V43.4692H86.7952V36.3594Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M99.7464 36.3594H95.1758V38.3908H99.7464V36.3594Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M99.7464 31.2812H95.1758V33.3126H99.7464V31.2812Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M99.7464 33.8203H95.1758V35.8517H99.7464V33.8203Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M99.7464 38.8984H95.1758V40.9298H99.7464V38.8984Z"
                        fill="#E0E24E"
                      ></path>
                      <path
                        d="M97.4611 46.5156H95.1758V48.547H97.4611V46.5156Z"
                        fill="#8E9030"
                      ></path>
                      <path
                        d="M63.9425 15.5812L66.2125 13.3111C65.2222 12.3614 64.1558 11.4879 63.0131 10.7109H35.4167C28.9214 15.1343 24.6504 22.5895 24.6504 31.0248C24.6504 39.4601 28.9265 46.9153 35.4167 51.3386H63.0131C64.1507 50.5616 65.2172 49.6881 66.2125 48.7385L63.9425 46.4684V15.5812ZM49.2149 38.7542C44.9541 38.7542 41.4906 35.2856 41.4906 31.0299C41.4906 26.7741 44.9592 23.3055 49.2149 23.3055C53.4707 23.3055 56.9393 26.7741 56.9393 31.0299C56.9393 35.2856 53.4707 38.7542 49.2149 38.7542Z"
                        fill="#E0E24E"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_391_5805">
                        <rect
                          width="100"
                          height="65"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="relative flex justify-center">
                    <div className="absolute -top-6 ">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.40757 9.65625L5.61777 11.4124C5.14721 11.883 4.88672 12.4964 4.88672 13.1518C4.88672 14.5131 6.0211 15.6223 7.40757 15.6223C8.79404 15.6223 9.92842 14.5131 9.92842 13.1518C9.92842 12.4964 9.66794 11.8746 9.19738 11.4124L7.40757 9.65625Z"
                          fill="white"
                        ></path>
                        <path
                          d="M10.767 3.86114L10.3973 4.32329C9.40574 5.55851 7.40587 4.86107 7.40587 3.27294V0.5C7.40587 0.5 0.683594 3.86114 0.683594 9.74312C0.683594 12.1968 1.99444 14.3395 3.9523 15.5075C3.48174 14.8436 3.20445 14.0286 3.20445 13.1547C3.20445 12.0455 3.64139 11.0036 4.43966 10.2137L7.40587 7.3063L10.3721 10.2221C11.1703 11.0036 11.6073 12.0455 11.6073 13.1631C11.6073 14.0202 11.3468 14.81 10.893 15.4739C12.4812 14.5075 13.6576 12.9026 14.0105 11.0204C14.5651 8.03735 13.1114 5.2224 10.767 3.86114Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <svg
                      width="40"
                      height="63"
                      viewBox="0 0 40 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_391_5851)">
                        <path
                          d="M0.5 0.5H33.387L37.4304 4.54348V16.9435L39.587 19.3696V38.2391L37.4304 40.6652V60.3435H13.9783H0.5V40.9348L3.19565 38.2391V19.3696L0.5 16.6739V0.5Z"
                          fill="#2F2B2B"
                        ></path>
                        <path
                          d="M20.1016 35.6955V40.9018L26.4989 31.9219L20.1016 35.6955Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.1016 27.8047V34.4895L26.4989 30.7068L20.1016 27.8047Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.1016 20.0977V27.8045L26.4989 30.7066L20.1016 20.0977Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.1037 35.6955V40.9018L13.7109 31.9219L20.1037 35.6955Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.1037 27.8047V34.4895L13.7109 30.7068L20.1037 27.8047Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.1037 20.0977V27.8045L13.7109 30.7066L20.1037 20.0977Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_391_5851">
                          <rect
                            width="39.087"
                            height="62"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="absolute -top-6 ">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.40757 9.65625L5.61777 11.4124C5.14721 11.883 4.88672 12.4964 4.88672 13.1518C4.88672 14.5131 6.0211 15.6223 7.40757 15.6223C8.79404 15.6223 9.92842 14.5131 9.92842 13.1518C9.92842 12.4964 9.66794 11.8746 9.19738 11.4124L7.40757 9.65625Z"
                          fill="white"
                        ></path>
                        <path
                          d="M10.767 3.86114L10.3973 4.32329C9.40574 5.55851 7.40587 4.86107 7.40587 3.27294V0.5C7.40587 0.5 0.683594 3.86114 0.683594 9.74312C0.683594 12.1968 1.99444 14.3395 3.9523 15.5075C3.48174 14.8436 3.20445 14.0286 3.20445 13.1547C3.20445 12.0455 3.64139 11.0036 4.43966 10.2137L7.40587 7.3063L10.3721 10.2221C11.1703 11.0036 11.6073 12.0455 11.6073 13.1631C11.6073 14.0202 11.3468 14.81 10.893 15.4739C12.4812 14.5075 13.6576 12.9026 14.0105 11.0204C14.5651 8.03735 13.1114 5.2224 10.767 3.86114Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <svg
                      width="40"
                      height="63"
                      viewBox="0 0 40 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_391_5860)">
                        <path
                          d="M0.586914 0.5H33.4739L37.5173 4.54348V16.9435L39.6739 19.3696V38.2391L37.5173 40.6652V60.3435H0.586914V40.9348L3.28257 38.2391V19.3696L0.586914 16.6739V0.5Z"
                          fill="#2F2B2B"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.0869 20.5C15.8403 20.5 11.5869 24.7534 11.5869 30C11.5869 35.2466 15.8403 39.5 21.0869 39.5C26.3335 39.5 30.5869 35.2466 30.5869 30C30.5869 24.7534 26.3335 20.5 21.0869 20.5ZM20.2786 32.6901L20.2724 32.7014C20.0618 33.0701 19.955 33.2571 19.8071 33.3978C19.6458 33.5519 19.4527 33.6638 19.2401 33.7265C19.046 33.7799 18.8293 33.7799 18.3948 33.7799H16.5511C16.1639 33.7799 15.9718 33.7799 15.8557 33.7049C15.7294 33.6227 15.6523 33.4882 15.6431 33.3382C15.6359 33.2006 15.7314 33.0321 15.9235 32.6962L20.4758 24.6733C20.6699 24.3323 20.7675 24.1617 20.8907 24.0991C21.0232 24.0313 21.1824 24.0313 21.316 24.0991C21.4392 24.1617 21.5378 24.3323 21.731 24.6733L22.6667 26.3064L22.6718 26.3146C22.8813 26.6803 22.9871 26.8652 23.0333 27.0603C23.0847 27.273 23.0847 27.4969 23.0333 27.7095C22.9871 27.9057 22.8813 28.0926 22.6687 28.4634L20.2775 32.6901H20.2786ZM26.3952 33.7028C26.2781 33.7799 26.0829 33.7799 25.6926 33.7799H23.0508C22.6615 33.7799 22.4653 33.7799 22.3503 33.7049C22.2239 33.6227 22.1469 33.4851 22.1377 33.3361C22.1305 33.1995 22.2271 33.0332 22.4201 32.6993L22.4243 32.6911L23.7431 30.4273C23.9372 30.0935 24.0348 29.9281 24.156 29.8644C24.2895 29.7966 24.4457 29.7966 24.5782 29.8644C24.6983 29.926 24.7928 30.0842 24.9787 30.3996L24.9941 30.4252L26.3171 32.6891C26.3233 32.7004 26.3305 32.7106 26.3366 32.7219C26.5205 33.0383 26.614 33.1995 26.6068 33.3331C26.5996 33.482 26.5205 33.6196 26.3941 33.7018L26.3952 33.7028Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_391_5860">
                          <rect
                            width="39.087"
                            height="62"
                            fill="white"
                            transform="translate(0.586914 0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <svg
                    width="40"
                    height="63"
                    viewBox="0 0 40 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_391_5863)">
                      <path
                        d="M0.673828 0.5H33.5608L37.6043 4.54348V16.9435L39.7608 19.3696V38.2391L37.6043 40.6652V60.3435H0.673828V40.9348L3.36948 38.2391V19.3696L0.673828 16.6739V0.5Z"
                        fill="white"
                      ></path>
                      <g clip-path="url(#clip1_391_5863)">
                        <g clip-path="url(#clip2_391_5863)">
                          <path
                            d="M16.2717 35.3512C15.4075 35.3512 14.6999 35.1482 14.1489 34.7422C13.6037 34.3304 13.3311 33.7388 13.3311 32.979C13.3311 32.8166 13.3485 32.6252 13.3833 32.3932C13.4761 31.8712 13.6095 31.2448 13.7835 30.5082C14.2765 28.513 15.5525 27.5154 17.6057 27.5154C18.1625 27.5154 18.6671 27.6082 19.1079 27.7996C19.5487 27.9794 19.8967 28.2578 20.1519 28.629C20.4071 28.9944 20.5347 29.4294 20.5347 29.934C20.5347 30.0848 20.5173 30.2762 20.4825 30.5082C20.3723 31.152 20.2447 31.7842 20.0881 32.3932C19.8329 33.385 19.3979 34.1332 18.7715 34.6262C18.1509 35.1134 17.3157 35.3512 16.2717 35.3512ZM16.4283 33.7852C16.8343 33.7852 17.1765 33.6634 17.4607 33.4256C17.7507 33.1878 17.9595 32.8224 18.0813 32.3236C18.2495 31.6392 18.3771 31.0476 18.4641 30.5372C18.4931 30.3864 18.5105 30.2298 18.5105 30.0674C18.5105 29.4062 18.1683 29.0756 17.4781 29.0756C17.0721 29.0756 16.7241 29.1974 16.4341 29.4352C16.1499 29.673 15.9469 30.0384 15.8251 30.5372C15.6917 31.0244 15.5641 31.616 15.4307 32.3236C15.4017 32.4686 15.3843 32.6194 15.3843 32.7818C15.3785 33.4546 15.7323 33.7852 16.4283 33.7852Z"
                            fill="black"
                          ></path>
                          <path
                            d="M21.0392 35.2467C20.958 35.2467 20.9 35.2235 20.8536 35.1713C20.8188 35.1133 20.8072 35.0495 20.8188 34.9741L22.321 27.8981C22.3326 27.8169 22.3732 27.7531 22.4428 27.7009C22.5066 27.6487 22.5762 27.6255 22.6516 27.6255H25.5458C26.352 27.6255 26.9958 27.7937 27.483 28.1243C27.976 28.4607 28.2254 28.9421 28.2254 29.5743C28.2254 29.7541 28.2022 29.9455 28.1616 30.1427C27.9818 30.9779 27.6164 31.5927 27.0596 31.9929C26.5144 32.3931 25.7662 32.5903 24.815 32.5903H23.3476L22.8488 34.9741C22.8314 35.0553 22.7966 35.1191 22.727 35.1713C22.6632 35.2235 22.5936 35.2467 22.5182 35.2467H21.0392ZM24.8904 31.0881C25.1978 31.0881 25.4588 31.0069 25.685 30.8387C25.917 30.6705 26.0678 30.4327 26.1432 30.1195C26.1664 29.9977 26.178 29.8875 26.178 29.7947C26.178 29.5859 26.1142 29.4235 25.9924 29.3133C25.8706 29.1973 25.656 29.1393 25.3602 29.1393H24.0552L23.6434 31.0881H24.8904Z"
                            fill="black"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_391_5863">
                        <rect
                          width="39.087"
                          height="62"
                          fill="white"
                          transform="translate(0.673828 0.5)"
                        ></rect>
                      </clipPath>
                      <clipPath id="clip1_391_5863">
                        <rect
                          x="6.41211"
                          y="17.5"
                          width="28.2941"
                          height="28.2941"
                          rx="14.1471"
                          fill="white"
                        ></rect>
                      </clipPath>
                      <clipPath id="clip2_391_5863">
                        <rect
                          width="29"
                          height="29"
                          fill="white"
                          transform="translate(6 17)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="">
                <ul>
                  <li className="flex flex-row justify-center">
                    {" "}
                    <span className="text-[24px] leading-6 mr-1">•</span> Access
                    to one storyline of your choice.
                  </li>
                  <li className="flex flex-row justify-center">
                    {" "}
                    <span className="text-[24px] leading-6 mr-1">•</span> Claim
                    1 of 25 unique Pages.
                  </li>
                  <li className="flex flex-row justify-center">
                    {" "}
                    <span className="text-[24px] leading-6 mr-1">•</span> Burned
                    when used.
                  </li>
                </ul>
              </div>
              <Link
                href={"/buy"}
                className="mt-5 py-2 px-4 w-36 text-xs text-black items-center bg-[#dee451] justify-center font-bold"
              >
                Coming Soon
              </Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center mt-[115px] md:mt-[150px]">
          <h1 className="fontsDharmaHeavy text-center text-[120px] leading-[70px] md:text-2xl md:leading-[100px]">
            CREATE YOUR I.D.
          </h1>
          <p className="mt-2 md:mt-0 md:w-3/4 inter400 text-base w-[60%]">
            {`There's work to be
                        done.
                        Create an I.D and access the Lab. Ohh you were an intern? Dust off your old one and get to it!`}
          </p>
          <div className="mt-[63px]">
            <Image
              alt="illustration of different paths"
              loading="lazy"
              width="1172"
              height="600"
              decoding="async"
              data-nimg="1"
              className="max-h-xl"
              src={scientists_creator_preview}
              style={{
                color: "transparent",
              }}
            />
          </div>
        </section>
        <section className="flex flex-col items-center mt-[115px] md:mt-[150px]">
          <h1 className="fontsDharmaHeavy text-center text-[120px] leading-[70px] md:text-2xl md:leading-[100px]">
            FORGE YOUR PATH
          </h1>
          <p className="mt-2 md:mt-0 md:w-3/4 inter400 text-base w-[60%]">
            Your decisions reflect who you are and what you value. Your actions
            have consequences. Who you trust... what you do...how you react
            changes...everything. Choose wisely.
          </p>
          <div className="mt-[63px]">
            <div className="w-full relative">
              <svg
                className="w-full h-[459px]"
                viewBox="0 0 1250 459"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1250" height="458" fill="black"></rect>
                <g opacity="1">
                  <path
                    d="M98.8092 363.568C66.3568 363.568 50.6128 354.412 63.1879 343.578C75.2496 333.207 109.142 325.078 139.19 325.078C169.238 325.078 186.071 333.207 176.364 343.578C166.232 354.399 131.262 363.568 98.8092 363.568ZM136.297 327.834C110.733 327.834 81.9755 334.773 71.8928 343.578C61.4344 352.708 74.8488 360.386 102.141 360.386C129.433 360.386 158.954 352.708 167.659 343.578C176.051 334.773 161.873 327.834 136.309 327.834H136.297Z"
                    fill="#0082FA"
                    opacity="1"
                  ></path>
                  <path
                    d="M210.784 256.859C184.995 256.859 170.767 251.06 178.808 244.133C186.573 237.445 212.437 232.172 236.686 232.172C260.934 232.172 275.714 237.445 269.464 244.133C262.988 251.047 236.586 256.859 210.797 256.859H210.784ZM234.795 233.975C214.191 233.975 192.272 238.472 185.772 244.146C179.083 249.982 191.17 254.855 212.888 254.855C234.607 254.855 256.914 249.982 262.475 244.146C267.886 238.472 255.398 233.975 234.795 233.975Z"
                    fill="#0082FA"
                    opacity="1"
                  ></path>
                  <path
                    d="M284.604 186.487C263.211 186.487 250.461 182.479 256.034 177.682C261.458 173.023 282.287 169.328 302.603 169.328C322.918 169.328 335.994 173.023 331.636 177.682C327.152 182.479 305.997 186.487 284.604 186.487ZM301.287 170.581C284.028 170.581 266.38 173.724 261.846 177.682C257.312 181.64 268.021 185.097 286.044 185.097C304.068 185.097 321.954 181.728 325.811 177.682C329.581 173.724 318.534 170.581 301.275 170.581H301.287Z"
                    fill="#0082FA"
                    opacity="1"
                  ></path>
                  <path
                    d="M336.934 136.625C318.66 136.625 307.187 133.694 311.282 130.175C315.278 126.743 332.688 124 350.173 124C367.658 124 379.331 126.73 376.112 130.175C372.818 133.694 355.208 136.625 336.921 136.625H336.934ZM349.196 124.939C334.341 124.939 319.599 127.269 316.267 130.175C312.861 133.143 322.58 135.611 337.998 135.611C353.417 135.611 368.296 133.143 371.14 130.175C373.92 127.257 364.05 124.939 349.208 124.939H349.196Z"
                    fill="#0082FA"
                    opacity="1"
                  ></path>
                  <path
                    d="M375.965 99.4272C360.008 99.4272 349.625 97.1977 352.756 94.5048C355.825 91.862 370.755 89.7578 386.111 89.7578C401.466 89.7578 411.987 91.862 409.52 94.5048C407.002 97.1977 391.922 99.4272 375.965 99.4272ZM385.359 90.4717C372.333 90.4717 359.683 92.2628 357.128 94.4923C354.522 96.7718 363.315 98.6506 376.779 98.6506C390.244 98.6506 402.982 96.7718 405.149 94.4923C407.278 92.2628 398.385 90.4717 385.359 90.4717Z"
                    fill="#0082FA"
                    opacity="1"
                  ></path>
                  <path
                    d="M406.202 70.609C392.049 70.609 382.58 68.843 385.047 66.7263C387.477 64.6346 400.541 62.9688 414.218 62.9688C427.895 62.9688 437.465 64.6346 435.511 66.7263C433.519 68.8555 420.355 70.609 406.202 70.609ZM413.629 63.5324C402.019 63.5324 390.959 64.9477 388.93 66.7137C386.876 68.5173 394.892 69.9953 406.841 69.9953C418.79 69.9953 429.924 68.5173 431.64 66.7137C433.331 64.9477 425.24 63.5324 413.629 63.5324Z"
                    fill="#0082FA"
                    opacity="1"
                  ></path>
                </g>
                <g opacity="1">
                  <path
                    d="M356.84 363.568C324.388 363.568 304.097 354.412 311.299 343.578C318.213 333.207 348.073 325.078 378.108 325.078C408.155 325.078 429.022 333.207 424.463 343.578C419.703 354.399 389.28 363.568 356.828 363.568H356.84ZM376.592 327.834C351.029 327.834 325.715 334.773 320.004 343.578C314.08 352.708 331.302 360.386 358.594 360.386C385.886 360.386 411.587 352.708 415.758 343.578C419.779 334.773 402.156 327.834 376.58 327.834H376.592Z"
                    fill="#8247E5"
                    opacity="1"
                  ></path>
                  <path
                    d="M415.832 256.859C390.043 256.859 372.934 251.06 377.543 244.133C381.989 237.445 405.236 232.172 429.472 232.172C453.72 232.172 471.118 237.445 468.187 244.133C465.143 251.047 441.621 256.859 415.832 256.859ZM428.482 233.975C407.879 233.975 388.189 238.472 384.507 244.146C380.724 249.982 395.228 254.855 416.934 254.855C438.653 254.855 458.543 249.982 461.21 244.146C463.803 238.472 449.086 233.975 428.482 233.975Z"
                    fill="#8247E5"
                    opacity="1"
                  ></path>
                  <path
                    d="M454.719 186.487C433.327 186.487 418.585 182.479 421.779 177.682C424.885 173.023 443.873 169.328 464.201 169.328C484.517 169.328 499.434 173.023 497.38 177.682C495.276 182.479 476.112 186.487 454.719 186.487ZM463.512 170.581C446.253 170.581 430.17 173.724 427.603 177.682C424.973 181.728 437.46 185.097 455.484 185.097C473.507 185.097 489.715 181.728 491.568 177.682C493.372 173.724 480.772 170.581 463.512 170.581Z"
                    fill="#8247E5"
                    opacity="1"
                  ></path>
                  <path
                    d="M482.288 136.625C464.014 136.625 451.088 133.694 453.43 130.175C455.722 126.743 471.767 124 489.265 124C506.75 124 519.788 126.73 518.273 130.175C516.719 133.694 500.562 136.625 482.288 136.625ZM488.751 124.939C473.896 124.939 460.319 127.269 458.428 130.175C456.499 133.143 467.446 135.611 482.852 135.611C498.27 135.611 511.935 133.143 513.288 130.175C514.615 127.257 503.606 124.939 488.751 124.939Z"
                    fill="#8247E5"
                    opacity="1"
                  ></path>
                  <path
                    d="M502.843 99.4272C486.886 99.4272 475.401 97.1977 477.192 94.5048C478.945 91.862 492.836 89.7578 508.191 89.7578C523.547 89.7578 535.108 91.862 533.943 94.5048C532.753 97.1977 518.8 99.4272 502.843 99.4272ZM507.791 90.4717C494.765 90.4717 483.003 92.2628 481.551 94.4923C480.073 96.7718 489.805 98.6506 503.269 98.6506C516.733 98.6506 528.545 96.7718 529.584 94.4923C530.611 92.2628 520.829 90.4717 507.791 90.4717Z"
                    fill="#8247E5"
                    opacity="1"
                  ></path>
                  <path
                    d="M518.776 70.609C504.622 70.609 494.277 68.843 495.692 66.7263C497.082 64.6346 509.319 62.9688 522.997 62.9688C536.674 62.9688 547.07 64.6346 546.155 66.7263C545.216 68.8555 532.929 70.609 518.776 70.609ZM522.683 63.5324C511.073 63.5324 500.715 64.9477 499.575 66.7137C498.41 68.5173 507.165 69.9953 519.114 69.9953C531.063 69.9953 541.459 68.5173 542.285 66.7137C543.099 64.9477 534.294 63.5324 522.696 63.5324H522.683Z"
                    fill="#8247E5"
                    opacity="1"
                  ></path>
                </g>
                <g opacity="1">
                  <path
                    d="M614.868 363.568C582.416 363.568 557.579 354.412 559.407 343.578C561.161 333.207 586.988 325.078 617.035 325.078C647.083 325.078 671.982 333.207 672.584 343.578C673.197 354.399 647.321 363.568 614.881 363.568H614.868ZM616.872 327.834C591.309 327.834 569.452 334.773 568.112 343.578C566.722 352.708 587.752 360.386 615.044 360.386C642.336 360.386 664.229 352.708 663.866 343.578C663.516 334.773 642.436 327.834 616.872 327.834Z"
                    fill="#F7D002"
                    opacity="1"
                  ></path>
                  <path
                    d="M620.866 256.859C595.077 256.859 575.087 251.06 576.264 244.133C577.392 237.445 598.02 232.172 622.256 232.172C646.505 232.172 666.52 237.445 666.908 244.133C667.296 251.047 646.655 256.859 620.866 256.859ZM622.156 233.975C601.552 233.975 584.092 238.472 583.228 244.146C582.339 249.982 599.26 254.855 620.979 254.855C642.697 254.855 660.157 249.982 659.932 244.146C659.706 238.472 642.76 233.975 622.156 233.975Z"
                    fill="#F7D002"
                    opacity="1"
                  ></path>
                  <path
                    d="M624.828 186.487C603.435 186.487 586.714 182.479 587.529 177.682C588.318 173.023 605.477 169.328 625.793 169.328C646.108 169.328 662.854 173.023 663.117 177.682C663.393 182.479 646.221 186.487 624.828 186.487ZM625.717 170.581C608.458 170.581 593.929 173.724 593.328 177.682C592.714 181.728 606.867 185.097 624.891 185.097C642.914 185.097 657.456 181.728 657.293 177.682C657.143 173.724 642.964 170.581 625.705 170.581H625.717Z"
                    fill="#F7D002"
                    opacity="1"
                  ></path>
                  <path
                    d="M627.632 136.625C609.358 136.625 594.979 133.694 595.581 130.175C596.157 126.743 610.861 124 628.346 124C645.831 124 660.222 126.73 660.423 130.175C660.623 133.694 645.919 136.625 627.645 136.625H627.632ZM628.284 124.939C613.429 124.939 601.004 127.269 600.553 130.175C600.102 133.143 612.264 135.611 627.682 135.611C643.101 135.611 655.538 133.143 655.425 130.175C655.313 127.257 643.138 124.939 628.284 124.939Z"
                    fill="#F7D002"
                    opacity="1"
                  ></path>
                  <path
                    d="M629.723 99.4272C613.767 99.4272 601.166 97.1977 601.617 94.5048C602.068 91.862 614.906 89.7578 630.262 89.7578C645.618 89.7578 658.218 91.862 658.368 94.5048C658.519 97.1977 645.668 99.4272 629.711 99.4272H629.723ZM630.224 90.4717C617.198 90.4717 606.327 92.2628 605.988 94.4923C605.638 96.7718 616.309 98.6506 629.761 98.6506C643.225 98.6506 654.097 96.7718 654.01 94.4923C653.922 92.2628 643.251 90.4717 630.224 90.4717Z"
                    fill="#F7D002"
                    opacity="1"
                  ></path>
                  <path
                    d="M631.338 70.609C617.184 70.609 605.962 68.843 606.325 66.7263C606.676 64.6346 618.099 62.9688 631.776 62.9688C645.453 62.9688 656.676 64.6346 656.801 66.7263C656.926 68.8555 645.503 70.609 631.35 70.609H631.338ZM631.738 63.5324C620.128 63.5324 610.471 64.9477 610.208 66.7137C609.932 68.5173 619.426 69.9953 631.375 69.9953C643.324 69.9953 652.981 68.5173 652.906 66.7137C652.83 64.9477 643.337 63.5324 631.738 63.5324Z"
                    fill="#F7D002"
                    opacity="1"
                  ></path>
                </g>
                <g opacity="1">
                  <path
                    d="M872.897 363.568C840.445 363.568 811.049 354.412 807.517 343.578C804.122 333.207 825.903 325.078 855.951 325.078C885.999 325.078 914.944 333.207 920.68 343.578C926.667 354.399 905.337 363.568 872.897 363.568ZM857.166 327.834C831.602 327.834 813.19 334.773 816.221 343.578C819.365 352.708 844.215 360.386 871.495 360.386C898.787 360.386 916.873 352.708 911.976 343.578C907.254 334.773 882.729 327.834 857.166 327.834Z"
                    fill="#00FA55"
                    opacity="1"
                  ></path>
                  <path
                    d="M825.904 256.859C800.115 256.859 777.245 251.06 774.978 244.133C772.786 237.445 790.797 232.172 815.033 232.172C839.281 232.172 861.926 237.445 865.621 244.133C869.454 251.047 851.681 256.859 825.904 256.859ZM815.834 233.975C795.231 233.975 780.013 238.472 781.954 244.146C783.895 249.82 803.309 254.855 825.015 254.855C846.734 254.855 861.776 249.982 858.645 244.146C855.601 238.472 836.425 233.975 815.822 233.975H815.834Z"
                    fill="#00FA55"
                    opacity="1"
                  ></path>
                  <path
                    d="M794.928 186.487C773.535 186.487 754.823 182.479 753.257 177.682C751.729 173.023 767.06 169.328 787.376 169.328C807.691 169.328 826.278 173.023 828.859 177.682C831.514 182.479 816.321 186.487 794.928 186.487ZM787.927 170.581C770.667 170.581 757.704 173.724 759.069 177.682C760.459 181.728 776.291 185.097 794.314 185.097C812.338 185.097 825.201 181.728 823.034 177.682C820.918 173.724 805.186 170.581 787.927 170.581Z"
                    fill="#00FA55"
                    opacity="1"
                  ></path>
                  <path
                    d="M772.973 136.625C754.699 136.625 738.867 133.694 737.715 130.175C736.588 126.743 749.927 124 767.412 124C784.897 124 800.641 126.73 802.545 130.175C804.499 133.694 791.247 136.625 772.96 136.625H772.973ZM767.825 124.939C752.97 124.939 741.698 127.269 742.7 130.175C743.727 133.143 757.116 135.611 772.522 135.611C787.94 135.611 799.15 133.143 797.56 130.175C795.994 127.257 782.667 124.939 767.825 124.939Z"
                    fill="#00FA55"
                    opacity="1"
                  ></path>
                  <path
                    d="M756.601 99.4272C740.644 99.4272 726.929 97.1977 726.052 94.5048C725.188 91.862 736.987 89.7578 752.342 89.7578C767.698 89.7578 781.351 91.862 782.803 94.5048C784.294 97.1977 772.545 99.4272 756.588 99.4272H756.601ZM752.656 90.4717C739.63 90.4717 729.647 92.2628 730.411 94.4923C731.2 96.7718 742.798 98.6506 756.25 98.6506C769.715 98.6506 779.647 96.7718 778.432 94.4923C777.23 92.2628 765.682 90.4717 752.643 90.4717H752.656Z"
                    fill="#00FA55"
                    opacity="1"
                  ></path>
                  <path
                    d="M743.915 70.609C729.761 70.609 717.662 68.843 716.973 66.7263C716.284 64.6346 726.868 62.9688 740.545 62.9688C754.223 62.9688 766.272 64.6346 767.437 66.7263C768.614 68.8555 758.068 70.609 743.915 70.609ZM740.796 63.5324C729.185 63.5324 720.242 64.9477 720.843 66.7137C721.457 68.5173 731.69 69.9953 743.639 69.9953C755.588 69.9953 764.506 68.5173 763.541 66.7137C762.589 64.9477 752.394 63.5324 740.783 63.5324H740.796Z"
                    fill="#00FA55"
                    opacity="1"
                  ></path>
                </g>
                <g opacity="1">
                  <path
                    d="M1130.91 363.568C1098.46 363.568 1064.52 354.412 1055.61 343.578C1047.07 333.207 1064.82 325.078 1094.86 325.078C1124.91 325.078 1157.89 333.207 1168.79 343.578C1180.16 354.399 1163.38 363.568 1130.92 363.568H1130.91ZM1097.44 327.834C1071.88 327.834 1056.91 334.773 1064.32 343.578C1071.99 352.708 1100.65 360.386 1127.94 360.386C1155.23 360.386 1169.5 352.708 1160.08 343.578C1150.99 334.773 1123.02 327.834 1097.46 327.834H1097.44Z"
                    fill="#E54747"
                    opacity="1"
                  ></path>
                  <path
                    d="M1030.95 256.859C1005.16 256.859 979.408 251.06 973.71 244.133C968.211 237.445 983.579 232.172 1007.83 232.172C1032.08 232.172 1057.34 237.445 1064.35 244.133C1071.62 251.047 1056.73 256.859 1030.95 256.859ZM1009.51 233.975C988.902 233.975 975.914 238.472 980.673 244.146C985.583 249.982 1007.34 254.855 1029.06 254.855C1050.78 254.855 1063.4 249.982 1057.38 244.146C1051.53 238.472 1030.11 233.975 1009.51 233.975Z"
                    fill="#E54747"
                    opacity="1"
                  ></path>
                  <path
                    d="M965.041 186.487C943.648 186.487 922.944 182.479 918.999 177.682C915.153 173.023 928.643 169.328 948.971 169.328C969.287 169.328 989.703 173.023 994.6 177.682C999.635 182.479 986.433 186.487 965.041 186.487ZM950.148 170.581C932.889 170.581 921.491 173.724 924.823 177.682C928.23 181.728 945.727 185.097 963.751 185.097C981.774 185.097 992.972 181.728 988.788 177.682C984.705 173.724 967.408 170.581 950.148 170.581Z"
                    fill="#E54747"
                    opacity="1"
                  ></path>
                  <path
                    d="M918.324 136.625C900.05 136.625 882.766 133.694 879.86 130.175C877.029 126.743 889.003 124 906.501 124C923.986 124 941.095 126.73 944.702 130.175C948.397 133.694 936.598 136.625 918.324 136.625ZM907.377 124.939C892.523 124.939 882.402 127.269 884.857 130.175C887.362 133.143 901.966 135.611 917.385 135.611C932.803 135.611 942.786 133.143 939.717 130.175C936.711 127.257 922.232 124.939 907.377 124.939Z"
                    fill="#E54747"
                    opacity="1"
                  ></path>
                  <path
                    d="M883.48 99.4272C867.523 99.4272 852.706 97.1977 850.489 94.5048C848.322 91.862 859.068 89.7578 874.424 89.7578C889.78 89.7578 904.472 91.862 907.24 94.5048C910.07 97.1977 899.437 99.4272 883.48 99.4272ZM875.088 90.4717C862.062 90.4717 852.969 92.2628 854.847 94.4923C856.764 96.7718 869.289 98.6506 882.753 98.6506C896.218 98.6506 905.223 96.7718 902.868 94.4923C900.564 92.2628 888.114 90.4717 875.088 90.4717Z"
                    fill="#E54747"
                    opacity="1"
                  ></path>
                  <path
                    d="M856.491 70.609C842.337 70.609 829.361 68.843 827.62 66.7263C825.892 64.6346 835.649 62.9688 849.326 62.9688C863.004 62.9688 875.892 64.6346 878.084 66.7263C880.313 68.8555 870.644 70.609 856.491 70.609ZM849.865 63.5324C838.254 63.5324 830.013 64.9477 831.503 66.7137C833.019 68.5173 843.978 69.9953 855.927 69.9953C867.876 69.9953 876.067 68.5173 874.201 66.7137C872.372 64.9477 861.463 63.5324 849.865 63.5324Z"
                    fill="#E54747"
                    opacity="1"
                  ></path>
                </g>
                <ellipse
                  cx="615.605"
                  cy="343.528"
                  rx="33.1914"
                  ry="10.02"
                  fill="#F8D103"
                ></ellipse>
                <ellipse
                  cx="421.659"
                  cy="244.216"
                  rx="20.6163"
                  ry="4.79449"
                  transform="rotate(-1.90451 421.659 244.216)"
                  fill="#8247E5"
                ></ellipse>
                <ellipse
                  cx="790.158"
                  cy="177.072"
                  rx="19.8455"
                  ry="3.61077"
                  transform="rotate(0.655863 790.158 177.072)"
                  fill="#00FA55"
                ></ellipse>
                <ellipse
                  cx="912.316"
                  cy="129.921"
                  rx="14.4782"
                  ry="2.44402"
                  transform="rotate(1.64403 912.316 129.921)"
                  fill="#F60C53"
                ></ellipse>
                <ellipse
                  cx="378.68"
                  cy="94.6296"
                  rx="12.9918"
                  ry="1.8948"
                  transform="rotate(-1.16781 378.68 94.6296)"
                  fill="#0082FA"
                ></ellipse>
                <ellipse
                  cx="521.212"
                  cy="66.5651"
                  rx="12.6694"
                  ry="1.46426"
                  transform="rotate(-1.16781 521.212 66.5651)"
                  fill="#8247E5"
                ></ellipse>
                <path
                  d="M601.83 346.03L530.438 458.129H716.435L629.386 339.141L427.106 245.829L794.09 178.82L919.967 129.973L380.763 93.6501L523.549 66.2608L521.044 65.4688L368.238 95.5289L909.32 130.599L785.949 175.063L403.935 243.951L601.83 346.03Z"
                  fill="url(#paint0_linear_259_6331)"
                  clip-path="url(#clip)"
                ></path>
                <g opacity="1">
                  <g
                    opacity="1"
                    transform-origin="621.6451110839844px 247.08451080322266px"
                    style={{
                      transform: "translateY(1.15162px)",
                      transformOrigin: "621.645px 247.085px",
                    }}
                  >
                    <rect
                      width="75.9517"
                      height="107.715"
                      transform="matrix(-1 0 0 1 659.621 193.227)"
                      fill="#F7D002"
                    ></rect>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M638.466 247.618L621.652 219.66V219.656L621.651 219.658L621.65 219.656V219.66L604.824 247.618L604.818 247.62L604.821 247.622L604.818 247.628L604.825 247.625L621.65 257.593V257.594L621.651 257.593L621.652 257.594V257.593L638.465 247.625L638.473 247.628L638.469 247.622L638.473 247.62L638.466 247.618ZM621.651 260.777L638.473 250.828L621.652 274.502V274.505L621.651 274.503L621.65 274.505V274.502L604.818 250.828L621.651 260.777Z"
                      fill="black"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform-origin="424.32098388671875px 172.9738998413086px"
                    style={{
                      transform: "translateY(1.15162px)",
                      transformOrigin: "424.321px 172.974px",
                    }}
                  >
                    <rect
                      width="59.562"
                      height="84.7438"
                      transform="matrix(-1 0 0 1 454.102 130.602)"
                      fill="#8247E5"
                    ></rect>
                    <path
                      d="M414.395 166.694C415.09 166.296 415.984 166.296 416.778 166.694L422.337 169.969L426.109 172.054L431.569 175.33C432.264 175.727 433.157 175.727 433.951 175.33L438.22 172.749C438.915 172.352 439.411 171.558 439.411 170.664V165.701C439.411 164.907 439.014 164.113 438.22 163.616L433.951 161.134C433.257 160.737 432.363 160.737 431.569 161.134L427.3 163.715C426.605 164.113 426.109 164.907 426.109 165.8V169.076L422.337 166.892V163.517C422.337 162.723 422.734 161.929 423.528 161.432L431.47 156.767C432.165 156.369 433.058 156.369 433.852 156.767L441.992 161.532C442.787 161.929 443.184 162.723 443.184 163.517V172.848C443.184 173.642 442.787 174.437 441.992 174.933L433.951 179.599C433.257 179.996 432.363 179.996 431.569 179.599L426.109 176.422L422.337 174.238L416.877 171.061C416.182 170.664 415.289 170.664 414.495 171.061L410.226 173.543C409.531 173.94 409.035 174.734 409.035 175.628V180.591C409.035 181.386 409.432 182.18 410.226 182.676L414.395 185.158C415.09 185.555 415.984 185.555 416.778 185.158L421.046 182.676C421.741 182.279 422.238 181.485 422.238 180.591V177.415L426.01 179.599V182.875C426.01 183.669 425.613 184.463 424.819 184.959L416.778 189.625C416.083 190.022 415.189 190.022 414.395 189.625L406.354 184.959C405.66 184.562 405.163 183.768 405.163 182.875V173.444C405.163 172.65 405.56 171.856 406.354 171.359L414.395 166.694Z"
                      fill="black"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform-origin="786.8510131835938px 118.07794952392578px"
                    style={{
                      transform: "translateY(1.15162px)",
                      transformOrigin: "786.851px 118.078px",
                    }}
                  >
                    <svg>
                      <rect
                        width="49.298"
                        height="70.1403"
                        transform="matrix(-1 0 0 1 811.5 83.0078)"
                        fill="#00FA55"
                      ></rect>
                      <path
                        d="M776.44 127.663C774.384 127.663 772.7 127.18 771.389 126.214C770.092 125.234 769.443 123.827 769.443 122.019C769.443 121.633 769.485 121.177 769.568 120.625C769.788 119.383 770.106 117.893 770.52 116.14C771.693 111.393 774.729 109.019 779.614 109.019C780.939 109.019 782.139 109.24 783.188 109.696C784.237 110.123 785.065 110.786 785.672 111.669C786.279 112.538 786.583 113.573 786.583 114.774C786.583 115.133 786.542 115.588 786.459 116.14C786.197 117.672 785.893 119.176 785.52 120.625C784.913 122.985 783.878 124.765 782.388 125.938C780.911 127.097 778.924 127.663 776.44 127.663ZM776.813 123.937C777.779 123.937 778.593 123.647 779.269 123.082C779.959 122.516 780.456 121.646 780.746 120.46C781.146 118.831 781.449 117.424 781.656 116.209C781.725 115.85 781.767 115.478 781.767 115.091C781.767 113.518 780.953 112.732 779.31 112.732C778.344 112.732 777.516 113.021 776.826 113.587C776.15 114.153 775.667 115.022 775.377 116.209C775.06 117.368 774.756 118.776 774.439 120.46C774.37 120.805 774.329 121.163 774.329 121.55C774.315 123.151 775.157 123.937 776.813 123.937Z"
                        fill="black"
                      ></path>
                      <path
                        d="M787.784 127.415C787.591 127.415 787.453 127.36 787.342 127.235C787.259 127.097 787.232 126.946 787.259 126.766L790.834 109.93C790.861 109.737 790.958 109.585 791.123 109.461C791.275 109.337 791.441 109.282 791.62 109.282H798.506C800.425 109.282 801.956 109.682 803.116 110.468C804.289 111.269 804.882 112.414 804.882 113.918C804.882 114.346 804.827 114.802 804.73 115.271C804.302 117.258 803.433 118.721 802.108 119.673C800.811 120.625 799.031 121.094 796.768 121.094H793.276L792.089 126.766C792.048 126.959 791.965 127.111 791.8 127.235C791.648 127.36 791.482 127.415 791.303 127.415H787.784ZM796.947 117.52C797.678 117.52 798.299 117.327 798.838 116.927C799.39 116.527 799.748 115.961 799.928 115.216C799.983 114.926 800.011 114.664 800.011 114.443C800.011 113.946 799.859 113.56 799.569 113.297C799.279 113.021 798.769 112.883 798.065 112.883H794.96L793.98 117.52H796.947Z"
                        fill="black"
                      ></path>
                    </svg>
                  </g>
                  <g
                    opacity="1"
                    transform-origin="912.9112854003906px 81.75540351867676px"
                    style={{
                      transform: "translateY(1.15162px)",
                      transformOrigin: "912.911px 81.7554px",
                    }}
                  >
                    <rect
                      width="42.2554"
                      height="60.1202"
                      transform="matrix(-1 0 0 1 934.039 51.6953)"
                      fill="#F60C53"
                    ></rect>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M915.276 89.3543L915.29 89.3805C915.791 90.2377 916.045 90.6723 916.396 90.9994C916.779 91.3576 917.238 91.6178 917.744 91.7634C918.205 91.8876 918.72 91.8876 919.752 91.8876H924.134C925.054 91.8876 925.511 91.8876 925.787 91.7133C926.087 91.5223 926.27 91.2095 926.292 90.8609C926.309 90.541 926.082 90.1494 925.626 89.3686L914.807 70.7185C914.346 69.9258 914.114 69.5295 913.821 69.3838C913.506 69.2262 913.128 69.2262 912.81 69.3838C912.517 69.5295 912.283 69.9258 911.824 70.7185L909.6 74.515L909.588 74.534C909.09 75.384 908.839 75.8138 908.729 76.2675C908.607 76.7617 908.607 77.2823 908.729 77.7765C908.839 78.2325 909.09 78.667 909.595 79.529L915.278 89.3543H915.276ZM900.739 91.7085C901.017 91.8876 901.481 91.8876 902.409 91.8876H908.687C909.612 91.8876 910.079 91.8876 910.352 91.7133C910.652 91.5223 910.835 91.2024 910.857 90.8561C910.874 90.5386 910.645 90.1518 910.186 89.3757L910.176 89.3567L907.042 84.0943C906.581 83.3182 906.349 82.9338 906.061 82.7859C905.743 82.6282 905.372 82.6282 905.057 82.7859C904.772 82.929 904.547 83.2968 904.105 84.0298L904.069 84.0895L900.925 89.352C900.91 89.3782 900.893 89.4021 900.878 89.4283C900.441 90.1637 900.219 90.5386 900.236 90.849C900.253 91.1952 900.441 91.5152 900.742 91.7062L900.739 91.7085Z"
                      fill="black"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform-origin="382.5234069824219px 51.06694984436035px"
                    style={{
                      transform: "translateY(1.15162px)",
                      transformOrigin: "382.523px 51.0669px",
                    }}
                  >
                    <rect
                      width="36.0932"
                      height="51.3527"
                      transform="matrix(-1 0 0 1 400.57 25.3906)"
                      fill="#0082FA"
                    ></rect>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M372.636 44.096C371.985 44.5065 371.57 45.2117 371.539 45.982V56.5209C371.568 57.2125 371.888 57.8508 372.433 58.2741L381.916 63.7868C382.186 63.8933 382.472 63.9473 382.766 63.9473C383.085 63.9473 383.44 63.8773 383.687 63.757C383.718 63.7418 383.807 63.693 383.937 63.6198C384.021 63.5724 384.123 63.5143 384.238 63.4488L387.709 61.4425L386.92 60.0992L383.057 62.3294C382.883 62.4006 382.677 62.4042 382.502 62.3404L379.238 60.4418L382.723 54.9519L380.595 51.3281L376.019 58.569L376.017 58.5683L375.117 58.0444L375.115 58.0432L379.941 50.2072L378.086 47.0469L373.102 54.8392V46.0399C373.114 45.7875 373.247 45.5566 373.46 45.4204L382.464 40.2215C382.675 40.1176 382.942 40.1187 383.152 40.2247C383.181 40.239 392.126 45.4364 392.167 45.4661C392.333 45.5854 392.443 45.7621 392.478 45.9601C392.484 45.99 392.488 46.0202 392.49 46.051L392.476 54.4656L394.043 56.8827V45.9772C394.007 45.2636 393.652 44.6142 393.071 44.1961C392.961 44.117 392.844 44.0472 392.722 43.9886C392.722 43.9886 383.927 38.8685 383.851 38.83C383.206 38.5044 382.402 38.5048 381.758 38.8302L372.636 44.096ZM391.578 59.212L394.043 57.7862H394.043V56.888L392.476 54.4709L387.817 47.2232C387.231 46.2621 385.953 45.9526 384.767 45.9694L383.375 46.0063L391.578 59.212ZM378.643 46L382.312 46.0134L390.613 59.7646L387.712 61.4416L386.923 60.0982L378.643 46Z"
                      fill="black"
                    ></path>
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_259_6331"
                    x1="644.103"
                    y1="46.6812"
                    x2="644.103"
                    y2="458.129"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0748015" stop-color="#0082FA"></stop>
                    <stop offset="0.241372" stop-color="#F60C53"></stop>
                    <stop offset="0.241472" stop-color="#00FA55"></stop>
                    <stop offset="0.470644" stop-color="#8247E5"></stop>
                    <stop offset="0.845652" stop-color="#F7D002"></stop>
                    <stop offset="0.98628" stop-color="#F7D002"></stop>
                  </linearGradient>
                  <clipPath id="clip">
                    <rect
                      width="100%"
                      height="459"
                      transform-origin="625px 229.5px"
                      style={{
                        transform: "translateY(0%)",
                        transformOrigin: "625px 229.5px",
                      }}
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-row items-center justify-center">
              <svg
                width="19"
                height="18"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block"
              >
                <g id="bxs:zap">
                  <path
                    id="Vector"
                    d="M42.4601 23.604C42.3859 23.2333 42.2077 22.8914 41.9463 22.6184C41.685 22.3453 41.3512 22.1523 40.9841 22.062L27.2641 18.63L32.3381 6.788C32.5149 6.37706 32.5485 5.91865 32.4335 5.48633C32.3185 5.05401 32.0617 4.67285 31.7041 4.404C31.3472 4.13339 30.9096 3.99094 30.4618 3.99964C30.014 4.00835 29.5822 4.16771 29.2361 4.452L7.23611 22.452C6.94914 22.6867 6.73308 22.9966 6.61203 23.3471C6.49099 23.6975 6.46974 24.0747 6.55065 24.4365C6.63156 24.7983 6.81145 25.1305 7.07023 25.396C7.329 25.6615 7.65649 25.8498 8.01611 25.94L21.4541 29.302L14.7641 41.01C14.5915 41.3142 14.5016 41.6582 14.5034 42.0079C14.5051 42.3576 14.5984 42.7008 14.774 43.0032C14.9496 43.3057 15.2013 43.5568 15.5042 43.7317C15.807 43.9066 16.1504 43.9991 16.5001 44C16.933 44.0007 17.3543 43.8603 17.7001 43.6L41.7001 25.6C42.0025 25.3731 42.2343 25.0652 42.3689 24.7119C42.5034 24.3587 42.535 23.9745 42.4601 23.604Z"
                    fill="#E0E24E"
                  ></path>
                </g>
              </svg>
              <span className="font-light italic ml-2 mt-4 text-[10px] lg:mt-0 lg:text-[14px]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline mb-1 mr-1 lg:hidden"
                >
                  <g id="bxs:zap">
                    <path
                      id="Vector"
                      d="M42.4601 23.604C42.3859 23.2333 42.2077 22.8914 41.9463 22.6184C41.685 22.3453 41.3512 22.1523 40.9841 22.062L27.2641 18.63L32.3381 6.788C32.5149 6.37706 32.5485 5.91865 32.4335 5.48633C32.3185 5.05401 32.0617 4.67285 31.7041 4.404C31.3472 4.13339 30.9096 3.99094 30.4618 3.99964C30.014 4.00835 29.5822 4.16771 29.2361 4.452L7.23611 22.452C6.94914 22.6867 6.73308 22.9966 6.61203 23.3471C6.49099 23.6975 6.46974 24.0747 6.55065 24.4365C6.63156 24.7983 6.81145 25.1305 7.07023 25.396C7.329 25.6615 7.65649 25.8498 8.01611 25.94L21.4541 29.302L14.7641 41.01C14.5915 41.3142 14.5016 41.6582 14.5034 42.0079C14.5051 42.3576 14.5984 42.7008 14.774 43.0032C14.9496 43.3057 15.2013 43.5568 15.5042 43.7317C15.807 43.9066 16.1504 43.9991 16.5001 44C16.933 44.0007 17.3543 43.8603 17.7001 43.6L41.7001 25.6C42.0025 25.3731 42.2343 25.0652 42.3689 24.7119C42.5034 24.3587 42.535 23.9745 42.4601 23.604Z"
                      fill="#E0E24E"
                    ></path>
                  </g>
                </svg>
                Minting a Cassette or Replicator will allow you to start new
                pathways
              </span>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center mt-[115px] md:mt-[150px]">
          <h1 className="fontsDharmaHeavy text-center text-[120px] leading-[70px] md:text-2xl md:leading-[100px]">
            MAKE YOUR CLAIM
          </h1>
          <p className="mt-2 md:mt-0 md:w-3/4 inter400 text-base w-[60%]">
            The Pages in these Journals hold fragmented accounts and unique
            depictions of...{`it's`} hard to make out...but it seems important.
            5 Journals. 5 Chains. 25 pieces of history.
          </p>
          <div className="mt-[63px]">
            <Image
              alt="illustration of different paths"
              loading="lazy"
              width="653"
              height="310"
              decoding="async"
              data-nimg="1"
              className="max-h-xl"
              src={adventure_and_collect}
              style={{
                color: "transparent",
              }}
            />
          </div>
        </section>
        <section className="flex flex-col items-center mt-[115px] md:mt-[150px]">
          <h1 className="fontsDharmaHeavy text-center text-[120px] leading-[70px] md:text-2xl md:leading-[100px]">
            EXPLORE THE LAB
          </h1>
          <p className=" mt-2 md:mt-0 md:w-3/4 inter400 text-base w-[60%]">
            {`There's research to
                        file,
                        deadlines to meet, and a world to change. Tensions run high and not everyone can handle the
                        pressure. But behind it all...you can't shake the feeling that something doesn't quite add up...`}
          </p>
          <div className="mt-[63px] flex flex-row">
            <Image
              alt="3 previews of the lab"
              loading="lazy"
              width="781"
              height="400"
              decoding="async"
              data-nimg="1"
              src={explore_lab_preview}
              style={{
                color: "transparent",
              }}
            />
          </div>
        </section>
        <section className="flex flex-col items-center mt-[115px] md:mt-[150px]">
          <h1 className="fontsDharmaHeavy text-center text-[120px ] leading-[70px] md:text-2xl md:leading-[100px]">
            UNCOVER THE TRUTH
          </h1>
          <p className="mt-2 md:mt-0 md:w-3/4 inter400 text-base w-[60%]">
            Those willing to uncover all the secrets hidden in the lab are .....
            ... [MESSAGE INTERUPTED] and will qualify to ... [FILE CORRUPTED]...
          </p>
          <div className="mt-[63px]">
            <Image
              alt="preview of the secret room - where is the secret room?"
              loading="lazy"
              width="320"
              height="350"
              decoding="async"
              data-nimg="1"
              src={secret_room}
              style={{
                color: "transparent",
              }}
            />
          </div>
        </section>
        <section className="flex gap-10 mt-[115px] md:mt-[150px]">
          <div className="flex flex-col md:flex-row mb-6 md:mb-4">
            <div className="mb-6 md:mb-0 md:mr-4 ">
              <svg
                viewBox="0 0 704 346"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[350px] md:w-[704px] h-auto md:h-[346px]"
              >
                <g clip-path="url(#clip0_1_963)">
                  <path d="M0 0H674V30H0V0Z" fill="#111111"></path>
                  <path d="M704 30L674 0V30H704Z" fill="#111111"></path>
                </g>
                <rect
                  width="704"
                  height="280"
                  transform="translate(0 30)"
                  fill="#111111"
                ></rect>
                <g clip-path="url(#clip1_1_963)">
                  <path d="M25 335H80V310H0L25 335Z" fill="#111111"></path>
                  <path d="M80 310H704V346H80V310Z" fill="#111111"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_963">
                    <rect width="704" height="30" fill="white"></rect>
                  </clipPath>
                  <clipPath id="clip1_1_963">
                    <rect
                      width="704"
                      height="36"
                      fill="white"
                      transform="translate(0 310)"
                    ></rect>
                  </clipPath>
                </defs>
                <foreignObject x="0" y="0" width="704" height="346">
                  <div className="h-full flex flex-col justify-around py-10 px-5 items-center">
                    <svg
                      width="312"
                      height="103"
                      viewBox="0 0 312 103"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.884127"
                        y="0.77112"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="0.884127"
                        y="22.1757"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="0.601288"
                        y="43.2976"
                        width="76.9322"
                        height="16.4047"
                        fill="white"
                      ></rect>
                      <rect
                        x="0.884127"
                        y="64.985"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="0.884127"
                        y="86.3898"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="117.816"
                        y="0.77112"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="117.816"
                        y="22.1757"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="117.816"
                        y="43.5804"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="117.533"
                        y="64.7021"
                        width="76.9322"
                        height="16.4047"
                        fill="white"
                      ></rect>
                      <rect
                        x="117.816"
                        y="86.3898"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="234.467"
                        y="0.488281"
                        width="76.9322"
                        height="16.4047"
                        fill="white"
                      ></rect>
                      <rect
                        x="234.749"
                        y="22.1757"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="234.749"
                        y="43.5804"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="234.749"
                        y="64.985"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <rect
                        x="234.749"
                        y="86.3898"
                        width="76.3665"
                        height="15.839"
                        stroke="white"
                        stroke-width="0.565678"
                      ></rect>
                      <path
                        d="M81.6013 51.4883H98.7239V72.4883H114.601"
                        stroke="white"
                        stroke-width="1.13136"
                        stroke-dasharray="2.26 2.26"
                      ></path>
                      <path
                        d="M200.601 72.4883H216.167V9.48828H230.601"
                        stroke="white"
                        stroke-width="1.13136"
                        stroke-dasharray="2.26 2.26"
                      ></path>
                    </svg>
                    <div>
                      <h1 className="inter900 text-lg md:text-md">
                        FORGE YOUR PATH ACROSS CHAINS
                      </h1>
                      <p className="inter400 text-md md:text-base text-white/80">
                        Your choice matters. arenavault aims to create
                        entertaining experiences that push boundaries and
                        provide opportunities to participate your way across
                        multiple blockchains.
                      </p>
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
            <svg
              viewBox="0 0 491 346"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[350px] md:w-[491px] h-auto md:h-[346px]"
            >
              <g clip-path="url(#clip0_1_996)">
                <path d="M0 0H461V30H0V0Z" fill="#111111"></path>
                <path d="M491 30L461 0V30H491Z" fill="#111111"></path>
              </g>
              <rect
                width="491"
                height="280"
                transform="translate(0 30)"
                fill="#111111"
              ></rect>
              <g clip-path="url(#clip1_1_996)">
                <path d="M25 335H80V310H0L25 335Z" fill="#111111"></path>
                <path d="M80 310H491V346H80V310Z" fill="#111111"></path>
              </g>
              <defs>
                <clipPath id="clip0_1_996">
                  <rect width="491" height="30" fill="white"></rect>
                </clipPath>
                <clipPath id="clip1_1_996">
                  <rect
                    width="491"
                    height="36"
                    fill="white"
                    transform="translate(0 310)"
                  ></rect>
                </clipPath>
              </defs>
              <foreignObject x="0" y="0" width="491" height="346">
                <div className="h-full flex flex-col justify-around py-10 px-5 items-center">
                  <svg
                    width="59"
                    height="101"
                    viewBox="0 0 59 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.4985 0.405764C25.7241 0.424588 21.9904 1.1907 18.5106 2.66049C15.0309 4.13028 11.8731 6.27505 9.21781 8.97201C6.56245 11.6689 4.46153 14.8654 3.03497 18.3788C1.60842 21.8922 0.884228 25.6537 0.903703 29.4485V39.0416H24.1371V25.1432C24.1369 24.4905 24.2645 23.8441 24.5128 23.241C24.7611 22.6379 25.1251 22.09 25.5841 21.6284C26.0431 21.1668 26.5881 20.8008 27.1878 20.5511C27.7876 20.3013 28.4305 20.1729 29.0797 20.173H29.9173C30.5665 20.1729 31.2095 20.3013 31.8091 20.5511C32.4091 20.8008 32.954 21.1668 33.4133 21.6284C33.8722 22.0899 34.2362 22.6379 34.4848 23.241C34.7331 23.8441 34.8608 24.4904 34.8608 25.1432V62.4013C37.9119 62.4013 40.9332 61.7972 43.752 60.6235C46.5707 59.4494 49.1322 57.7287 51.2897 55.5598C53.4472 53.3905 55.1583 50.8153 56.326 47.9812C57.4934 45.1471 58.0943 42.1092 58.0943 39.0416V29.4485C58.1108 21.7597 55.0994 14.3769 49.7183 8.91361C47.0781 6.21764 43.9305 4.07698 40.4589 2.61632C36.9876 1.15567 33.2618 0.40418 29.4985 0.405764Z"
                      fill="white"
                    ></path>
                    <path
                      d="M29.0808 80.9559H29.9184C30.5675 80.9559 31.2104 80.8273 31.81 80.5778C32.41 80.328 32.9549 79.9622 33.4139 79.5005C33.8728 79.0392 34.2371 78.4912 34.4857 77.8883C34.734 77.2853 34.862 76.6391 34.862 75.9863V62.0879H58.0952V71.5475C58.1339 75.3479 57.4231 79.1182 56.0032 82.6406C54.5836 86.163 52.4835 89.3674 49.8244 92.0686C47.1652 94.7695 43.9996 96.9138 40.5112 98.3772C37.0225 99.8407 33.2801 100.594 29.5001 100.594C25.7201 100.594 21.9775 99.8407 18.4889 98.3772C15.0004 96.9138 11.835 94.7695 9.17585 92.0686C6.51668 89.3674 4.41653 86.163 2.99686 82.6406C1.57717 79.1182 0.866113 75.3479 0.90482 71.5475V62.0879C0.904557 59.0203 1.5053 55.9824 2.6728 53.1484C3.84029 50.314 5.5517 47.7387 7.70916 45.5695C9.86665 43.4003 12.4279 41.6798 15.2469 40.5058C18.0658 39.3321 21.0871 38.7282 24.1383 38.7285V75.9863C24.1381 76.6388 24.2659 77.2853 24.5142 77.8883C24.7625 78.4912 25.1266 79.0389 25.5856 79.5002C26.0446 79.9619 26.5895 80.328 27.1892 80.5778C27.7889 80.8273 28.4317 80.9559 29.0808 80.9559Z"
                      fill="white"
                    ></path>
                  </svg>
                  <div>
                    <h1 className="inter900 text-lg md:text-md">
                      Powered By LayerZero
                    </h1>
                    <p className="inter400 text-md md:text-base text-white/80">
                      The premiere omnichain interoperability protocol.{" "}
                      <a
                        target="_blank"
                        className="text-augmintYellow underline hover:text-augmintYellowHover"
                        href="https://layerzero.gitbook.io/docs/"
                      >
                        Learn more.
                      </a>
                    </p>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="mb-6 md:mb-0 md:mr-4">
              <svg
                viewBox="0 0 491 346"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[350px] md:w-[491px] h-auto md:h-[346px]"
              >
                <g clip-path="url(#clip0_1_996)">
                  <path d="M0 0H461V30H0V0Z" fill="#111111"></path>
                  <path d="M491 30L461 0V30H491Z" fill="#111111"></path>
                </g>
                <rect
                  width="491"
                  height="280"
                  transform="translate(0 30)"
                  fill="#111111"
                ></rect>
                <g clip-path="url(#clip1_1_996)">
                  <path d="M25 335H80V310H0L25 335Z" fill="#111111"></path>
                  <path d="M80 310H491V346H80V310Z" fill="#111111"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_996">
                    <rect width="491" height="30" fill="white"></rect>
                  </clipPath>
                  <clipPath id="clip1_1_996">
                    <rect
                      width="491"
                      height="36"
                      fill="white"
                      transform="translate(0 310)"
                    ></rect>
                  </clipPath>
                </defs>
                <foreignObject x="0" y="0" width="491" height="346">
                  <div className="h-full flex flex-col justify-around py-10 px-5 items-center">
                    <svg
                      width="173"
                      height="102"
                      viewBox="0 0 173 102"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="6.44528"
                        y="20.1843"
                        width="54.2735"
                        height="79.1488"
                        transform="rotate(-15.605 6.44528 20.1843)"
                        fill="white"
                        stroke="#111111"
                        stroke-width="9.04558"
                      ></rect>
                      <rect
                        x="-5.57273"
                        y="3.13943"
                        width="54.2735"
                        height="79.1488"
                        transform="matrix(-0.963139 -0.269004 -0.269004 0.963139 162.032 15.6616)"
                        fill="white"
                        stroke="#111111"
                        stroke-width="9.04558"
                      ></rect>
                      <path
                        d="M59.058 4.60775L113.331 4.60775V83.7566H59.058L59.058 4.60775Z"
                        fill="white"
                        stroke="#111111"
                        stroke-width="9.04558"
                      ></path>
                    </svg>
                    <div>
                      <h1 className="inter900 text-lg md:text-md">
                        Collect quality art
                      </h1>
                      <p className="inter400 text-md md:text-base text-white/80">
                        Claim a piece of history. The Pages unlocked in the
                        experience are high-quality digital artworks
                        representing key moments forming the foundations of
                        KAIJU lore.
                      </p>
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
            <svg
              viewBox="0 0 704 346"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[350px] md:w-[704px] h-auto md:h-[346px]"
            >
              <g clip-path="url(#clip0_1_963)">
                <path d="M0 0H674V30H0V0Z" fill="#111111"></path>
                <path d="M704 30L674 0V30H704Z" fill="#111111"></path>
              </g>
              <rect
                width="704"
                height="280"
                transform="translate(0 30)"
                fill="#111111"
              ></rect>
              <g clip-path="url(#clip1_1_963)">
                <path d="M25 335H80V310H0L25 335Z" fill="#111111"></path>
                <path d="M80 310H704V346H80V310Z" fill="#111111"></path>
              </g>
              <defs>
                <clipPath id="clip0_1_963">
                  <rect width="704" height="30" fill="white"></rect>
                </clipPath>
                <clipPath id="clip1_1_963">
                  <rect
                    width="704"
                    height="36"
                    fill="white"
                    transform="translate(0 310)"
                  ></rect>
                </clipPath>
              </defs>
              <foreignObject x="0" y="0" width="704" height="346">
                <div className="h-full flex flex-col justify-around py-10 px-5 items-center">
                  <Image src={log} alt="arenavault Origins"></Image>
                  <div>
                    <h1 className="inter900 text-lg md:text-md">
                      arenavault Origins
                    </h1>
                    <p className="inter400 text-md md:text-base text-white/80">
                      Connect with a diverse community of creators, innovators,
                      gamers and builders making an impact across Web3 and
                      beyond. This is just the beginning.
                    </p>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
        </section>
      </section>
    </div>
  );
}
