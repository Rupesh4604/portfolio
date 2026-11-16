import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Page from "../components/site/Page.jsx";

export default function NotFound() {
  return (
    <Page className="page-enter">
      <Helmet>
        <title>404 — Not Found | M Rupesh Kumar Yadav</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="flex min-h-[60vh] flex-col justify-center pt-[clamp(48px,8vw,120px)]">
        <p className="m-0 text-sm text-mu">Error 404</p>
        <h1 className="h1-page mt-3">Page not found</h1>
        <p className="m-0 mt-5 max-w-[520px] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-i2">
          The page you are looking for doesn&apos;t exist or has moved. Press <kbd className="rounded border border-ln px-1.5 text-sm">/</kbd> to search the site.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex h-[50px] items-center rounded-btn bg-ink px-6 text-[15px] font-medium text-bg transition hover:-translate-y-px hover:opacity-90"
          >
            Go home
          </Link>
          <Link
            to="/projects"
            className="inline-flex h-[50px] items-center rounded-btn border border-ln px-6 text-[15px] text-ink transition-colors hover:border-ac hover:text-ac"
          >
            Browse projects
          </Link>
        </div>
      </section>
    </Page>
  );
}
