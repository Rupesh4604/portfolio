import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { work, internships } from "../data/internshipData";
// Highlights are switched off for now; restore this import with the block below to bring them back.
// import { achievements, positions } from "../data/achievementsData";
import { education } from "../data/educationData";
import { tools } from "../data/careerData";
import { site } from "../data/siteData";
import { currentRole } from "../lib/derived";
import Page from "../components/site/Page.jsx";
import PageHeader from "../components/site/PageHeader.jsx";
import Disclosure from "../components/site/Disclosure.jsx";
import { Timeline, TimelineItem } from "../components/site/Timeline.jsx";
import useVariant from "../hooks/useVariant";
import { glass } from "../data/glassCopy";
import { routeMeta } from "../lib/seo";

// "May 2023 - July 2023" -> "May 2023 – Jul 2023"; "Present" -> "now"
const when = (d = "") =>
  d
    .replace(/\s+-\s+/, " – ")
    .replace(/\bJuly\b/g, "Jul")
    .replace(/\bJune\b/g, "Jun")
    .replace(/\bPresent\b/i, "now");

// Last all-caps acronym in the org name: "... (CAIR), DRDO" -> "DRDO"; "... (HAL), Nasik" -> "HAL"
const acronym = (o = "") => (o.match(/\b[A-Z]{3,}\b/g) || [o]).pop();

const jobs = [...work.map((j) => ({ ...j, current: /present/i.test(j.duration) })), ...internships].map(
  (j, i) => ({ ...j, id: `job-${i}` })
);

const orgsBefore = [...new Set(internships.map((j) => acronym(j.organization)))];
// Same lead in every mode. IIT Bombay is where I studied (M.Tech), not a job.
const lead = [
  currentRole && `${currentRole.role} at ${currentRole.org}.`,
  education[0] && `${education[0].degreeShort} from ${education[0].short},`,
  orgsBefore.length > 0 &&
    `with research internships in computer vision and machine learning at ${orgsBefore.join(", ").replace(/, ([^,]*)$/, " and $1")}.`,
]
  .filter(Boolean)
  .join(" ");

// Highlights (achievements + the teaching role) are hidden for now. To bring them back,
// uncomment this, the import above and the Highlights block in the aside.
// const highlights = [
//   ...achievements.map((a) => ({ title: a.title, sub: a.description })),
//   ...positions
//     .filter((p) => /teaching/i.test(p.title))
//     .map((p) => ({ title: p.title, sub: `${p.organization} · ${p.duration}` })),
// ];

const META = routeMeta("/experience");

function Meta() {
  return (
    <Helmet>
      <title>{META.title}</title>
      <meta
        name="description"
        content={META.description}
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/experience" />
      <meta property="og:title" content={META.title} />
      <meta property="og:description" content={META.description} />
      <meta property="og:url" content="https://rupeshmediboyina.dev/experience" />
      <meta name="twitter:title" content={META.title} />
      <meta name="twitter:description" content={META.description} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rupeshmediboyina.dev/" },
            { "@type": "ListItem", position: 2, name: "Experience", item: "https://rupeshmediboyina.dev/experience" },
          ],
        })}
      </script>
    </Helmet>
  );
}

const sh = "display m-0 mb-2 text-[clamp(28px,3vw,36px)] tracking-[-0.02em]";

export default function Experience() {
  const { variant } = useVariant();
  const isGlass = variant === "C";
  const gj = (j) => (isGlass && glass.career.jobs[j.organization]) || {};
  const [open, setOpen] = useState(() => Object.fromEntries(jobs.filter((j) => j.current).map((j) => [j.id, true])));
  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <Page className="page-enter">
      <Meta />
      <PageHeader
        title="Career"
        lead={lead}
        aside={
          <a
            href={site.cv}
            download
            className="inline-flex h-[50px] items-center gap-2.5 rounded-btn bg-ink px-6 text-[15px] font-medium text-bg transition hover:-translate-y-px hover:opacity-90"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
            </svg>
            Download CV
          </a>
        }
      />

      <div className="mt-[clamp(56px,7vw,104px)] grid items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <section aria-labelledby="exp">
            <h2 id="exp" className={sh}>Experience</h2>
            <Timeline>
              {jobs.map((j, i) => (
                <TimelineItem key={j.id} when={when(j.duration)} current={j.current} last={i === jobs.length - 1}>
                  <h3 className="m-0 text-[clamp(19px,1.8vw,22px)] font-medium tracking-[-0.015em]">{gj(j).role || j.role}</h3>
                  <div className="mt-1 text-base text-i2">{gj(j).org || j.organization}</div>
                  <div className="mt-1">
                    <Disclosure open={!!open[j.id]} onToggle={() => toggle(j.id)} label="Details" openLabel="Hide details">
                      <div className="max-w-[680px] pb-1 text-base leading-[1.65] text-i2">
                        {(gj(j).detail || j.description)
                          .split(/\n+/)
                          .map((s) => s.trim())
                          .filter(Boolean)
                          .map((s, n) => (
                            <p key={n} className="m-0 mt-2 first:mt-0">{s}</p>
                          ))}
                        {j.techStack?.length > 0 && (
                          <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
                            {j.techStack.map((t) => (
                              <li key={t} className="tag-line">{t}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Disclosure>
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </section>

          <section aria-labelledby="edu" className="mt-[clamp(48px,6vw,88px)]">
            <h2 id="edu" className={sh}>Education</h2>
            <Timeline>
              {education.map((e, i) => (
                <TimelineItem key={e.school} when={`${e.from} – ${e.year}`} last={i === education.length - 1}>
                  <h3 className="m-0 text-[clamp(19px,1.8vw,22px)] font-medium tracking-[-0.015em]">
                    {e.degreeShort}, {e.short}
                  </h3>
                  <div className="mt-1 text-base text-i2">
                    {e.dept} · {e.grade.replace(":", "")}
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </section>
        </div>

        <aside aria-label="Tools" className="min-w-0">
          {/* Highlights, hidden for now (see the note at the top of this file):
          <h2 className="m-0 mb-3.5 mt-3.5 text-sm font-normal text-mu">Highlights</h2>
          <ul className="snap-row m-0 list-none lg:mx-0 lg:flex-col lg:overflow-visible lg:p-0">
            {highlights.map((h) => (
              <li key={h.title} className="cd w-[240px] px-6 py-[22px] lg:w-auto">
                <div className="display text-[clamp(22px,2vw,26px)] leading-[1.1] tracking-[-0.02em]">{h.title}</div>
                <div className="mt-1.5 text-[15px] text-i2">{h.sub}</div>
              </li>
            ))}
          </ul>
          */}
          <h2 className="m-0 mb-3.5 mt-3.5 text-sm font-normal text-mu">Tools I use most</h2>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {tools.map((t) => (
              <li key={t} className="inline-flex h-[34px] items-center rounded-full border border-ln px-3.5 text-sm text-i2">
                {t}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Page>
  );
}
