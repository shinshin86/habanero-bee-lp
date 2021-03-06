import { getExternalLinks, ExternalLink } from '@/utils/external-link';

const ExternalLinks: React.FC<{ url: string; text: string }> = ({
  url,
  text,
}): JSX.Element => {
  const externalLinks: Array<ExternalLink> = getExternalLinks(url, text);

  return (
    <div>
      <h3>External link</h3>
      <ul className="external-link-container">
        {externalLinks.map((link) => (
          <li key={link.url} className="external-link">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link-button"
            >
              {link.text || 'Read'}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExternalLinks;
