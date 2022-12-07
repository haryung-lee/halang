import Link from 'next/link';

interface Props {
  href: string;
  [key: string]: any;
}

const CustomLink = ({ href, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }
  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
