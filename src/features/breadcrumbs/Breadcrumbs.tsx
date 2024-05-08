import { Breadcrumbs, Anchor } from '@mantine/core';

type BreadcrumbItem = {
  title: string;
  href: string;
};

export default function BreadcrumbsElement({ items }: { items: BreadcrumbItem[] }) {
  return (
    <Breadcrumbs style={{
      marginBottom: "20px",
    }}>
      {items.map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
