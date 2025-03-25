'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import style from '../styles/Breadcrumb.module.css'

const Breadcrumb = () => {
  const pathname = usePathname();  
  const pathnames = pathname?.split('/').filter((x) => x);

  return (
    <div aria-label="Breadcrumb" className={style.breadcrumb}>
      <ol className={style.breadcrumbList}>
        <li>
          <Link href="/" className={style.breadcrumbItem}>Home</Link>
        </li>
        {pathnames?.map((part, index) => {
          const path = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={index}>
              <li className={style.breadcrumbSeparator}>/</li>
              <li>
                {isLast ? (
                  <span className={style.breadcrumbText}>{part}</span>
                ) : (
                  <Link href={path} className={style.breadcrumbItem}>{part}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
