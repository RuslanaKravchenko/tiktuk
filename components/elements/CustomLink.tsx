import Link from 'next/link';

interface ILink {
  url: string;
  newTab: boolean;
  download?: boolean;
}

type TCustomLinkProps = {
  className: string;
  link: ILink;
};

const CustomLink: React.FC<TCustomLinkProps> = ({
  link,
  children,
  className,
}) => {
  const isInternalLink = link.url.startsWith('/');

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href={link.url} as={link.url}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  // Plain <a> tags for external links

  return (
    <a
      className={className}
      href={link.url}
      // Change target and rel attributes is newTab is turned on
      target={link.newTab ? '_blank' : '_self'}
      rel={link.newTab ? 'noopener noreferrer' : ''}
      download={link.download}
    >
      {children}
    </a>
  );
};
export default CustomLink;
