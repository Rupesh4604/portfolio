import SiteLink from "./SiteLink.jsx";
import { GithubIcon, ScholarIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";
import useVariant from "../../hooks/useVariant.js";
import useClock from "../../hooks/useClock.js";
import { site, nav, links } from "../../data/siteData.js";

const year = new Date().getFullYear();
const siteLinks = nav.filter((n) => n.label !== "Contact");
const elsewhere = [
  { to: links.github, label: "GitHub" },
  { to: links.scholar, label: "Scholar" },
  { to: links.linkedin, label: "LinkedIn" },
  { to: site.cv, label: "CV" },
];

function Clock() {
  const time = useClock(site.timeZone);
  return (
    <span>
      {site.city} · <time>{time}</time> IST
    </span>
  );
}

function Columns({ labelClass, linkClass }) {
  return (
    <>
      <div>
        <div className={labelClass}>Site</div>
        {siteLinks.map((l) => (
          <SiteLink key={l.label} to={l.to} className={linkClass}>{l.label}</SiteLink>
        ))}
      </div>
      <div>
        <div className={labelClass}>Elsewhere</div>
        {elsewhere.map((l) => (
          <SiteLink key={l.label} to={l.to} className={linkClass}>{l.label}</SiteLink>
        ))}
      </div>
    </>
  );
}

/* Phone: row of 54px icon buttons, then © */
function IconLinks() {
  const items = [
    { to: links.github, label: "GitHub", Icon: GithubIcon },
    { to: links.scholar, label: "Google Scholar", Icon: ScholarIcon },
    { to: links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { to: links.email, label: "Email", Icon: MailIcon },
  ];
  return (
    <div className="flex gap-2">
      {items.map((it) => {
        const { to, label, Icon } = it;
        return (
        <SiteLink
          key={label}
          to={to}
          aria-label={label}
          className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-[14px] border border-ln text-ink transition-colors active:border-ac active:bg-tint"
        >
          <Icon />
        </SiteLink>
        );
      })}
    </div>
  );
}

function PhoneBase({ tinted }) {
  return (
    <div className={`px-5 pb-9 pt-[22px] ${tinted ? "bg-bg-2" : ""}`}>
      <IconLinks />
      <div className="mt-4 text-[13px] text-mu">© {year} {site.name}</div>
    </div>
  );
}

/* A · Editorial */
function FooterA({ isPhone }) {
  if (isPhone) {
    return (
      <footer className="mt-[clamp(96px,11vw,160px)] border-t border-ln bg-bg-2">
        <div className="px-5 pb-2 pt-8">
          <p className="display m-0 text-[32px] leading-[1.08]">Have a problem worth working on together?</p>
          <SiteLink to={links.email} className="mt-3 inline-flex min-h-11 items-center text-base text-ac hover:text-ac-hover">
            Email me →
          </SiteLink>
        </div>
        <PhoneBase />
      </footer>
    );
  }
  return (
    <footer className="mt-[clamp(112px,12vw,176px)] border-t border-ln bg-bg-2">
      <div className="wrap pb-8 pt-[clamp(64px,8vw,112px)]">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="col-span-2 lg:col-span-1">
            <p className="display m-0 text-[clamp(40px,4.6vw,68px)] leading-[1.04]">
              Have a problem worth
              <br />
              working on together?
            </p>
            <SiteLink to={links.email} className="mt-7 inline-flex min-h-11 items-center gap-2.5 text-[17px] text-ac hover:text-ac-hover">
              Email me →
            </SiteLink>
          </div>
          <Columns labelClass="mb-2.5 text-[13px] text-mu" linkClass="block text-[15px] leading-[2.2] text-i2 hover:text-ink" />
        </div>
        <div className="mt-[clamp(56px,7vw,96px)] flex flex-wrap justify-between gap-3 border-t border-[#DEDED7] pt-6 text-[13px] text-mu">
          <span>© {year} {site.name}</span>
          <Clock />
        </div>
      </div>
    </footer>
  );
}

/* C · Glass card */
function FooterC() {
  return (
    <div className="wrap relative pb-10">
      <footer className="glass mt-[clamp(72px,9vw,128px)] rounded-[22px] px-[clamp(24px,4vw,52px)] pb-6 pt-[clamp(28px,4vw,52px)]">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="col-span-2 lg:col-span-1">
            <p className="m-0 text-[clamp(32px,3.6vw,52px)] font-medium leading-[1.05] tracking-[-0.03em]">Let's build something.</p>
            <SiteLink
              to={links.email}
              className="mt-6 inline-flex h-[46px] items-center rounded-full bg-[#ECEDEA] px-[22px] text-[15px] font-medium text-[#0A0D10] transition hover:-translate-y-px hover:shadow-[0_8px_30px_-8px_rgba(79,179,169,.55)]"
            >
              Email me
            </SiteLink>
          </div>
          <Columns labelClass="mb-2.5 text-[13px] text-ac" linkClass="block text-[15px] leading-[2.2] text-mu hover:text-ink" />
        </div>
        <div className="mt-[clamp(40px,5vw,72px)] flex flex-wrap justify-between gap-3 border-t border-white/[.08] pt-[18px] text-[13px] text-mu">
          <span>© {year} {site.name}</span>
          <Clock />
        </div>
      </footer>
    </div>
  );
}

/* D · Bold teal band (phone) */
function FooterD() {
  return (
    <footer className="mt-[clamp(120px,13vw,200px)]">
      <div className="bg-[#4FB3A9] px-5 pb-[30px] pt-[34px] text-[#06201E]">
        <p className="m-0 text-[clamp(16px,1.3vw,19px)]">Have an interesting problem?</p>
        <SiteLink
          to={links.email}
          className="mt-2 inline-block text-[clamp(56px,7.2vw,108px)] font-semibold leading-none tracking-[-0.045em] text-[#06201E] transition-transform duration-[350ms] ease-[var(--ease-out)] hover:translate-x-2 hover:text-black"
        >
          Let's talk.
        </SiteLink>
      </div>
      <PhoneBase />
    </footer>
  );
}

export default function SiteFooter() {
  const { variant, isPhone } = useVariant();
  if (variant === "C") return <FooterC />;
  if (variant === "D") return <FooterD />;
  return <FooterA isPhone={isPhone} />;
}
