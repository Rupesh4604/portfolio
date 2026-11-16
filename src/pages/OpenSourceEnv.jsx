import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import Page from "../components/site/Page.jsx";
import PageHeader from "../components/site/PageHeader.jsx";
import Disclosure from "../components/site/Disclosure.jsx";
import SiteLink from "../components/site/SiteLink.jsx";

const GITHUB = "https://github.com/openSourceEnv";
const TEAMSPACE = "https://www.notion.so/Teamspace-Home-913399bce8764b36ad8e928a0083af45?pvs=21";
const FORM = "https://forms.gle/cwSLtKeJtyTRS3Cq7";
const SLACK = "https://join.slack.com/t/opensourceenv/shared_invite/zt-3b0wkmqqf-~C0ddraEgMqPHoT4nJQ5JQ";

const prodhub = {
  title: "ProdHub: AI-Powered Personal Productivity Hub",
  tagline: "Modern, all-in-one productivity platform to organize, achieve, and grow.",
  github: "https://github.com/Rupesh4604/ProdHub",
  live: "https://my-productivity-hub-5a3ba.web.app/",
  description:
    "ProdHub helps you manage projects, tasks, habits, and your calendar from a single, intuitive platform with AI planning powered by Google Gemini.",
  tech: ["React.js", "Firebase", "Google APIs", "Gemini"],
  longDescription: `
    <p><strong>ProdHub</strong> is a modern, all-in-one web application built to help you organize, achieve, and grow. Seamlessly manage projects, tasks, habits, and your calendar from a single, intuitive platform—all with smart AI-powered features and robust security.</p>
    <p><strong>Try ProdHub Now:</strong> <a href="https://my-productivity-hub-5a3ba.web.app/" target="_blank" rel="noopener noreferrer">my-productivity-hub-5a3ba.web.app</a></p>
    <p><strong>Key Features</strong></p>
    <ul>
      <li>Dashboard Overview: snapshot of overdue tasks, upcoming deadlines, and progress; one-click <em>AI Daily Planner</em>.</li>
      <li>AI Goal Decomposition: turn big ambitions into structured projects with tasks.</li>
      <li>Hierarchical Project Management: per-project pages with dynamic progress bars.</li>
      <li>Task Management: priorities, due dates, quick completion.</li>
      <li>Advanced AI Planning (Gemini): goal decomposition, daily planning, <strong>smart scheduling</strong> that respects Google Calendar; produces an actionable time-blocked plan.</li>
      <li>Task Generation: context-aware task lists using project titles &amp; calendar.</li>
      <li><strong>Habit Tracker</strong> and <strong>Unified Schedule</strong> with secure Calendar integration.</li>
    </ul>
  `,
};

const steps = [
  ["Explore Ideas", "Help improve existing projects or propose new ones."],
  ["Form Teams", "Connect with like-minded folks and collaborate."],
  ["Organize Projects", "Lead initiatives with support from mentors."],
];

const channels = [
  { name: "Slack", to: SLACK, cta: "Join", text: "Channels for help, updates, and collaboration." },
  { name: "Telegram", to: "https://t.me/openSourceEnv", cta: "Open", text: "Quick announcements & informal chats." },
  { name: "Discord", to: "https://discord.gg/ZydDAs87", cta: "Open", text: "Study rooms, voice calls, and meetups." },
];

const emails = ["opensourceenv@gmail.com", "rupesh32003@gmail.com"];

const btnPrimary =
  "inline-flex min-h-11 items-center rounded-btn bg-ink px-5 text-[15px] font-medium text-bg transition hover:-translate-y-px hover:opacity-90";
const btnGhost =
  "inline-flex min-h-11 items-center rounded-btn border border-ln px-5 text-[15px] text-ink transition-colors hover:border-ac hover:text-ac";
const h2 = "display m-0 mb-5 text-[clamp(28px,3vw,36px)] tracking-[-0.02em]";

function Meta() {
  return (
    <Helmet>
      <title>OpenSourceEnv &amp; ProdHub | M Rupesh Kumar Yadav</title>
      <meta
        name="description"
        content="OpenSourceEnv — open-source learning initiative covering Deep Learning, ML, AI, Data Science, Web Dev, DBMS, and DSA. Featuring ProdHub, an AI-powered personal productivity hub by M Rupesh Kumar Yadav."
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/open-source-env" />
      <meta property="og:title" content="OpenSourceEnv & ProdHub | M Rupesh Kumar Yadav" />
      <meta property="og:description" content="Open-source learning initiative and ProdHub — an AI-powered personal productivity hub." />
      <meta property="og:url" content="https://rupeshmediboyina.dev/open-source-env" />
      <meta name="twitter:title" content="OpenSourceEnv & ProdHub | M Rupesh Kumar Yadav" />
      <meta name="twitter:description" content="Open-source learning initiative and ProdHub — an AI-powered personal productivity hub." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rupeshmediboyina.dev/" },
            { "@type": "ListItem", position: 2, name: "OpenSourceEnv", item: "https://rupeshmediboyina.dev/open-source-env" },
          ],
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ProdHub",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web",
          description:
            "AI-powered personal productivity hub with projects, tasks, habits and smart scheduling powered by Google Gemini.",
          url: prodhub.live,
          author: { "@type": "Person", name: "M Rupesh Kumar Yadav" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        })}
      </script>
    </Helmet>
  );
}

function CopyRow({ email }) {
  const [copied, setCopied] = useState(false);
  const t = useRef();
  useEffect(() => () => clearTimeout(t.current), []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(t.current);
      t.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked */
    }
  };
  return (
    <li className="flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-t border-ln">
      <a href={`mailto:${email}`} className="break-all text-base text-ink hover:text-ac">{email}</a>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${email}`}
        className={`h-10 rounded-btn border px-4 text-sm transition-colors ${
          copied ? "border-ac bg-tint text-acink" : "border-ln bg-transparent text-ink hover:border-ac"
        }`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </li>
  );
}

export default function OpenSourceEnv() {
  const [open, setOpen] = useState(false);
  return (
    <Page className="page-enter">
      <Meta />
      <PageHeader
        title="OpenSourceEnv"
        lead="OpenSourceEnv is a dedicated initiative focused on democratizing access to high-quality education in technology. Our mission is to provide comprehensive resources that empower learners at all levels to master new skills."
      >
        <p className="m-0 mt-6 text-[15px] text-i2">
          Explore our projects: browse repositories and Notion teamspaces to discover projects &amp; resources.
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          <SiteLink to={GITHUB} className={btnPrimary}>GitHub ↗</SiteLink>
          <SiteLink to={TEAMSPACE} className={btnGhost}>Teamspace ↗</SiteLink>
        </div>
      </PageHeader>

      <section className="mt-[clamp(56px,7vw,104px)] grid gap-4 md:grid-cols-2" aria-label="About">
        <article className="cd p-7">
          <h2 className="m-0 text-xl font-medium tracking-[-0.01em]">Our Initiative</h2>
          <p className="m-0 mt-3 text-base leading-[1.65] text-i2">
            We foster an inclusive learning environment where everyone can thrive. Current offerings span{" "}
            <strong className="font-medium text-ink">Deep Learning</strong>, <strong className="font-medium text-ink">Machine Learning</strong>,{" "}
            <strong className="font-medium text-ink">AI</strong>, <strong className="font-medium text-ink">Data Science</strong>,{" "}
            <strong className="font-medium text-ink">Rapid Web Development</strong>, <strong className="font-medium text-ink">DBMS &amp; SQL</strong>, and{" "}
            <strong className="font-medium text-ink">DSA</strong>. Resources are continuously updated for relevance and depth.
          </p>
        </article>
        <article className="cd p-7">
          <h2 className="m-0 text-xl font-medium tracking-[-0.01em]">What We Offer</h2>
          <ul className="m-0 mt-3 list-none space-y-3 p-0 text-base leading-[1.6] text-i2">
            <li><strong className="font-medium text-ink">Comprehensive Learning Paths:</strong> curated roadmaps from fundamentals to advanced techniques.</li>
            <li><strong className="font-medium text-ink">Community-Driven Learning:</strong> contribute, learn, and grow together with like-minded peers.</li>
          </ul>
        </article>
      </section>

      <section className="mt-[clamp(64px,8vw,112px)]" aria-labelledby="featured-ose">
        <h2 id="featured-ose" className={h2}>Featured project</h2>
        <article className="cd p-7">
          <span className="tag">Projects</span>
          <h3 className="m-0 mt-3 text-[22px] font-medium tracking-[-0.015em]">{prodhub.title}</h3>
          <p className="m-0 mt-2 max-w-[720px] text-base leading-[1.6] text-i2">{prodhub.description}</p>
          <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
            {prodhub.tech.map((t) => (
              <li key={t} className="tag-line">{t}</li>
            ))}
          </ul>
          <div className="mt-2">
            <Disclosure open={open} onToggle={() => setOpen((o) => !o)} label="Details" openLabel="Hide details">
              <div className="rich max-w-[720px] text-base leading-[1.65] text-i2">
                <p className="m-0 italic">{prodhub.tagline}</p>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(prodhub.longDescription) }} />
              </div>
            </Disclosure>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <SiteLink to={prodhub.live} className={btnPrimary}>Open app ↗</SiteLink>
            <SiteLink to={prodhub.github} className={btnGhost}>GitHub ↗</SiteLink>
          </div>
        </article>
      </section>

      <section className="mt-[clamp(64px,8vw,112px)] grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-2" aria-label="Get involved">
        <div>
          <h2 className={h2}>Contribute</h2>
          <p className="m-0 mb-4 text-base text-i2">
            Join the community, learn, build, and contribute to open-source initiatives.
          </p>
          <ol className="m-0 list-none border-b border-ln p-0">
            {steps.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[32px_minmax(0,1fr)] gap-3 border-t border-ln py-5">
                <span className="pt-0.5 text-sm text-mu">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-lg font-medium">{t}</span>
                  <span className="mt-1 block text-[15px] text-i2">{d}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <SiteLink to={FORM} className={btnPrimary}>Contributor form ↗</SiteLink>
            <SiteLink to={GITHUB} className={btnGhost}>Browse GitHub ↗</SiteLink>
          </div>
        </div>
        <div>
          <h2 className={h2}>Engage with the Community</h2>
          <ul className="m-0 list-none border-b border-ln p-0">
            {channels.map((c) => (
              <li key={c.name} className="border-t border-ln">
                <SiteLink to={c.to} className="row-indent group flex items-baseline justify-between gap-4 py-5 text-ink">
                  <span>
                    <span className="row-title block text-lg font-medium">{c.name}</span>
                    <span className="mt-1 block text-[15px] text-i2">{c.text}</span>
                  </span>
                  <span className="row-arrow whitespace-nowrap text-sm text-mu">{c.cta} ↗</span>
                </SiteLink>
              </li>
            ))}
          </ul>
          <p className="m-0 mt-3 text-sm text-mu">
            Alternate Slack invite:{" "}
            <SiteLink to={SLACK} className="text-ac underline underline-offset-[3px]">link</SiteLink>
          </p>
        </div>
      </section>

      <section className="mt-[clamp(64px,8vw,112px)] grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-2" aria-labelledby="resources">
        <div>
          <h2 id="resources" className={h2}>Resources &amp; Contact</h2>
          <h3 className="m-0 mb-3 text-sm font-normal text-mu">Quick Links</h3>
          <div className="flex flex-wrap gap-2.5">
            <SiteLink to={GITHUB} className={btnPrimary}>GitHub ↗</SiteLink>
            <SiteLink to={TEAMSPACE} className={btnGhost}>Teamspace ↗</SiteLink>
          </div>
        </div>
        <div>
          <h3 className="m-0 mb-1 text-sm font-normal text-mu lg:mt-[60px]">Email Us</h3>
          <ul className="m-0 list-none border-b border-ln p-0">
            {emails.map((e) => (
              <CopyRow key={e} email={e} />
            ))}
          </ul>
        </div>
      </section>
    </Page>
  );
}
