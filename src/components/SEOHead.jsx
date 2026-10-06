import { useEffect } from 'react';

export default function SEOHead({ title, description, canonicalPath = '' }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
      let twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (twitterDesc) {
        twitterDesc.setAttribute('content', description);
      }
    }

    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }
      let twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
      }
    }
  }, [title, description, canonicalPath]);

  return null;
}
