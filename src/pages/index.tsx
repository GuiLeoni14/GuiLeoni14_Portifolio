import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { DefaultButton } from '../components/DefaultButton';
import { AccordionAbout } from '../components/AccordionAbout';

// fazer um slide infinito rodando as tecnologias que utilizo embaixo da hero section
export default function Home() {
  return (
    <main>
      <section className="container mx-auto bg-point bg-cover bg-center bg-no-repeat">
        <div className="flex items-center">
          <div>
            <h1 className="text-6xl font-bold w-full max-w-[378px] relative pb-5 after:h-3 after:absolute after:w-1/2 after:bg-yellow-200 after:bottom-0 after:left-0">
              Guilherme Leoni.
            </h1>
            <DefaultButton className="mt-9">Baixar currículo</DefaultButton>
          </div>
          <Image quality={100} src="/img/author.png" width={443} height={448} alt="Imagem do author da página" />
          <div>
            <span className="block text-gray-600 text-4xl font-bold">I&apos;m a</span>
            <div className="flex w-full max-w-[442px]">
              <span className="self-start font-belle text-4xl text-yellow-200">&lt;h1&gt;</span>
              <span className="text-6xl font-bold text-center bg-gradient-orange text-transparent bg-clip-text">
                Front-end <strong className="text-yellow-200">Developer</strong>
              </span>
              <span className="self-end font-belle text-4xl text-yellow-200">&lt;/h1&gt;</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="font-bold text-center text-6xl w-full">
            Minhas <strong className="bg-gradient-orange text-transparent bg-clip-text">Tecnologias</strong>
          </h2>
        </div>
        <Swiper
          className="trusted-by-swiper w-full container mx-auto mt-10"
          spaceBetween={40}
          grabCursor={true}
          a11y={{ enabled: false }}
          freeMode={true}
          speed={11000}
          loop={true}
          slidesPerView={6}
          modules={[Autoplay]}
          autoplay={{
            delay: 0.5,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              spaceBetween: 30,
            },
            480: {
              spaceBetween: 30,
            },
            767: {
              spaceBetween: 40,
            },
            992: {
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="trusted-by-swiper w-full container mx-auto mt-10"
          spaceBetween={40}
          grabCursor={true}
          a11y={{ enabled: false }}
          freeMode={true}
          speed={11000}
          loop={true}
          slidesPerView={6}
          modules={[Autoplay]}
          autoplay={{
            delay: 0.5,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              spaceBetween: 30,
            },
            480: {
              spaceBetween: 30,
            },
            767: {
              spaceBetween: 40,
            },
            992: {
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="trusted-by-swiper w-full container mx-auto mt-10"
          spaceBetween={40}
          grabCursor={true}
          a11y={{ enabled: false }}
          freeMode={true}
          speed={11000}
          loop={true}
          slidesPerView={6}
          modules={[Autoplay]}
          autoplay={{
            delay: 0.5,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              spaceBetween: 30,
            },
            480: {
              spaceBetween: 30,
            },
            767: {
              spaceBetween: 40,
            },
            992: {
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86px] w-[86px] rounded-md border border-gray-200">
              <img src="https://www.svgrepo.com/show/452092/react.svg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="bg-point bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="py-20 container mx-auto relative">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-6xl w-full">
              Meus <strong className="bg-gradient-orange text-transparent bg-clip-text">cases</strong>
            </h2>
            <div className="flex items-end gap-4 w-full">
              <img className="translate-y-4" src="/img/icons/arrow.svg" width={120} height={100} alt="" />
              <span className="block font-medium text-gray-300 text-2xl">
                As melhores tecnologia aliadas as melhores práticas constroem grandes soluções!
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <div className="py-20 flex items-center sticky top-0">
            <div className="w-full container mx-auto">
              <div className="max-w-[45%] space-y-10">
                <img src="	https://lojaintegrada.com.br/assets/img/logo.svg" />
                <div className="flex items-center gap-2">
                  <span className="leading-10 inline-block rounded-full border-2 border-gray-900 text-gray-900 font-bold px-6 text-center text-2xl">
                    React
                  </span>
                  <span className="leading-10 inline-block rounded-full border-2 border-gray-900 text-gray-900 font-bold px-6 text-center text-2xl">
                    React
                  </span>
                  <span className="leading-10 inline-block rounded-full border-2 border-gray-900 text-gray-900 font-bold px-6 text-center text-2xl">
                    React
                  </span>
                </div>
                <h2 className="text-6xl font-bold">Acesso Digital agora é unico.io</h2>
                <p className="text-2xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis eos dolore, iste velit enim maxime sint
                  officia reiciendis amet cum vel nesciunt soluta libero doloremque cumque nam placeat ex dolorem.
                </p>
              </div>
            </div>
            <div
              className="absolute right-0 top-0 bg-center bg-cover h-full w-full left-[50vw] max-w-[50vw]"
              style={{
                backgroundImage: `url("https://insany.design/wp-content/uploads/2021/08/clarice-02.jpg")`,
              }}
            ></div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-20 container mx-auto">
          <span className="block font-bold text-yellow-200 text-center">Quem é? Oque come? Onde vive?</span>
          <h2 className="text-5xl font-bold text-center">
            Minha <strong className="font-bold bg-gradient-orange text-transparent bg-clip-text">trajetória</strong>
          </h2>
          <AccordionAbout />
        </div>
      </section>
    </main>
  );
}
