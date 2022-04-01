import Script from "next/script";

const Ganalytics4 = () => {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?G-LQD256NF19`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LQD256NF19', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
};

export default Ganalytics4;
