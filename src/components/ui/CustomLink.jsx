import Link from 'next/link';
import styles from './CustomLink.module.css';

const CustomLink = ({ href, children, className, ...props }) => {
  // Combina styles.link con cualquier otra clase que se pase como prop
  const combinedClassName = `${styles.link}`.trim();
  
  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;