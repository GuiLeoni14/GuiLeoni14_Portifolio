import * as Accordion from '@radix-ui/react-accordion';
import { ReactNode } from 'react';
interface AccordionItemProps {
  children: ReactNode;
  value: string;
  title: string;
}
export function AccordionItem({ children, title, value }: AccordionItemProps) {
  return (
    <Accordion.Item className="w-full pb-8 border-t-2 border-gray-500" value={value}>
      <Accordion.Header>
        <Accordion.Trigger className="pt-8 font-bold text-xl w-full text-start">{title}</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mt-4">{children}</Accordion.Content>
    </Accordion.Item>
  );
}
