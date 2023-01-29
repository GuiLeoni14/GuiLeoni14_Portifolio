import Image from 'next/image';
import { AccordionAbout } from '../components/AccordionAbout';
import { DefaultButton } from '../components/DefaultButton';

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
        <div className="container mx-auto p-10 rounded-full flex flex-col justify-center items-center bg-gray-700 border border-gray-600">
          <h2 className="text-4xl font-medium text-center">
            <strong className="font-bold bg-gradient-orange text-transparent bg-clip-text">2+ anos </strong>
            de experiência como{' '}
            <strong className="font-bold bg-gradient-orange text-transparent bg-clip-text">
              desenvolvedor front-end
            </strong>
          </h2>
          <div className="flex items-center justify-center gap-10 w-full mt-4">
            <div className="flex justify-center items-center gap-4 rounded-full bg-gray-900 p-4 shadow-2xl border border-gray-300">
              <img src="/img/icons/code.svg" width={80} height={80} alt="" />
              <strong className="block text-center">+2 anos estudando programação</strong>
            </div>
            <div className="flex justify-center items-center gap-4 rounded-full bg-gray-900 p-4 shadow-2xl border border-gray-200">
              <img src="/img/icons/project.svg" width={80} height={80} alt="" />
              <strong className="block text-center">+50 projetos realizados</strong>
            </div>
            <div className="flex justify-center items-center gap-4 rounded-full bg-gray-900 p-4 shadow-2xl border border-gray-200">
              <img src="/img/icons/project.svg" width={80} height={80} alt="" />
              <strong className="block text-center">+50 projetos realizados</strong>
            </div>
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
      <section className="bg-point bg-cover bg-center bg-no-repeat">
        <div className="py-20 container mx-auto relative">
          <div className="absolute inset-0 w-full h-full z-[-1] grid grid-cols-4">
            <div className="h-full w-1 bg-gray-500"></div>
            <div className="h-full w-1 bg-gray-500"></div>
            <div className="h-full w-1 bg-gray-500"></div>
            <div className="h-full border-solid border-x-4 border-gray-500"></div>
          </div>
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
      </section>
    </main>
  );
}
