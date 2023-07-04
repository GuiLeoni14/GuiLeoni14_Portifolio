import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import { AccordionItem } from './AccordionItem';
export function AccordionAbout() {
  const [activeValueAccordion, setActiveValueAccordion] = useState('two');

  const handleChangeAccordionAbout = (value: string) => {
    setActiveValueAccordion(value);
  };

  const activeAccordionAboutImageSrc: Record<string, string> = {
    one: '/img/author_about.jpg',
    two: '/img/author_formatura.jfif',
  };

  return (
    <div className="mt-8 p-10 bg-purple-50 dark:bg-gray-700 shadow-lg rounded-lg">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold block bg-gradient-orange text-transparent bg-clip-text max-w-[60%]">
          <span className="font-belle text-yellow-200">&lt;h2&gt;</span>Never stop learning
          <span className="font-belle text-yellow-200">&lt;h2&gt;</span>
        </span>
        <BsStars size={60} color="yellow" />
      </div>
      <div className="flex items-start justify-between gap-10 mt-8">
        <div className="rounded-lg w-full max-w-[30%] flex items-center justify-center h-[600px] overflow-hidden">
          <img
            className="w-full object-cover h-full"
            src={activeAccordionAboutImageSrc[activeValueAccordion ?? 'one']}
            width={300}
            height={600}
            alt="Eu"
          />
        </div>
        <div className="w-full max-w-[70%]">
          <Accordion.Root type="single" onValueChange={handleChangeAccordionAbout} defaultValue="two">
            <AccordionItem title="Quem eu sou?" value="one">
              <span className="block text-xl font-medium text-gray-300">👋 Olá, me chamo Guilherme dos Reis Leoni</span>
              <p className="mt-2">
                Sou apaixonado por programação e tecnologia. Adoro praticar esportes, estar com as pessoas que gosto e
                claro, programar!. Programar tem sido meu hobby durante esses últimos anos, sempre aprendendo e
                evoluindo a cada dia, e acima de tudo me divertindo. Estou em busca de novos desafios todos os dias,
                seja criando aplicações ou aprendendo novas linguagens e frameworks.
              </p>
            </AccordionItem>
            <AccordionItem title="Minha formação" value="two">
              <span className="block text-xl font-medium text-gray-300">👋 Olá, me chamo Guilherme dos Reis Leoni</span>
              <p className="mt-2">
                Sou apaixonado por programação e tecnologia. Adoro praticar esportes, estar com as pessoas que gosto e
                claro, programar!. Programar tem sido meu hobby durante esses últimos anos, sempre aprendendo e
                evoluindo a cada dia, e acima de tudo me divertindo. Estou em busca de novos desafios todos os dias,
                seja criando aplicações ou aprendendo novas linguagens e frameworks.
              </p>
              <span className="block font-bold mt-4 text-xl">Cursos:</span>
              <div>
                <div className="flex items-center gap-4">
                  <img src="/img/icons/if_machado.jfif" width={80} height={80} />
                  <div className="flex flex-col">
                    <strong className="font-bold text-lg">Técnico em informática</strong>
                    <span>Ifsuldeminas Campus Machado - Curso técnico</span>
                    <span className="text-yellow-200 font-bold">2019 - 2021</span>
                    <span className="bg-gradient-orange text-transparent bg-clip-text font-bold">
                      banco de dados, mysql, java, html, css, javascript...
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/img/icons/codeboost.png" width={80} height={80} />
                  <div className="flex flex-col">
                    <strong className="font-bold text-lg">Front-end Developer</strong>
                    <span>Codeboost</span>
                    <span className="text-yellow-200 font-bold">2019 - 2021</span>
                    <span className="bg-gradient-orange text-transparent bg-clip-text font-bold">
                      react, nextjs, html, css, scss, javascript, wordpress, gulp...
                    </span>
                  </div>
                </div>
              </div>
            </AccordionItem>
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}
