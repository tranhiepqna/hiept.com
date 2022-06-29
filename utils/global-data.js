export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Hiep Tran';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Learning By Doing';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2022 All rights reserved.';
  const domain = process.env.URL
    ? decodeURI(process.env.URL)
    : 'https://hiept.com';

  return {
    name,
    blogTitle,
    footerText,
    domain,
  };
};
