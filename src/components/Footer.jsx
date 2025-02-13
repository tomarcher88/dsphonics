"use client";
export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="bg-white md:w-3/5 md:h-4/5 justify-between flex flex-col h-full w-5/6 mx-auto">
      <article className="flex flex-col h-3/4 md:h-2/4 justify-around">
        <div>
          <h2 className="font-semibold text-3xl text-left">
            Fancy a chat? Call us!
          </h2>
          <a className="mt-3 text-left block" href="tel:+44 7418 610909">
            +44 7418 610909
          </a>
        </div>
        <div>
          <h2 className="font-semibold text-3xl md:text-right">
            More of an introvert? We've got you.
          </h2>
          <a
            className="mt-3 md:text-right block"
            href="mailto:sales@dsphonics.co.uk"
          >
            sales@dsphonics.co.uk
          </a>
        </div>
        <div>
          <h2 className="font-semibold text-3xl text-left">
            Social media savvy? Say no more.
          </h2>
          <a
            className="mt-3 text-left block"
            href="https://www.linkedin.com/company/dsphonics/"
          >
            LinkedIn
          </a>
        </div>
      </article>

      <p className="text-center text-sm text-slate-400 mb-8 md:mb-0">
        &copy; {currentYear} - DSPhonics Ltd
      </p>
    </footer>
  );
}
