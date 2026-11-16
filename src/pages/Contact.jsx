import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { site, links } from "../data/siteData";
import { contact } from "../data/contactData";
import useClock from "../hooks/useClock";
import Page from "../components/site/Page.jsx";
import SiteLink from "../components/site/SiteLink.jsx";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

function Meta() {
  return (
    <Helmet>
      <title>Contact | M Rupesh Kumar Yadav</title>
      <meta name="description" content="Get in touch with M Rupesh Kumar Yadav (Rupesh Mediboyina) about research collaborations, multimodal models, agents and inference." />
      <link rel="canonical" href="https://rupeshmediboyina.dev/contact" />
      <meta property="og:title" content="Contact | M Rupesh Kumar Yadav" />
      <meta property="og:description" content="Email, GitHub, LinkedIn and Google Scholar for M Rupesh Kumar Yadav." />
      <meta property="og:url" content="https://rupeshmediboyina.dev/contact" />
      <meta name="twitter:title" content="Contact | M Rupesh Kumar Yadav" />
      <meta name="twitter:description" content="Email, GitHub, LinkedIn and Google Scholar for M Rupesh Kumar Yadav." />
    </Helmet>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const t = useRef();
  useEffect(() => () => clearTimeout(t.current), []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      clearTimeout(t.current);
      t.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked */
    }
  };
  return (
    <div className="cd mt-8 flex flex-wrap items-center justify-between gap-4 py-2.5 pl-6 pr-2.5">
      <a href={links.email} className="break-all text-lg text-ink hover:text-ac">{site.email}</a>
      <button
        type="button"
        onClick={copy}
        className={`h-11 rounded-btn border px-[18px] text-sm transition-colors ${
          copied ? "border-ac bg-tint text-acink" : "border-ln bg-transparent text-ink hover:border-ac"
        }`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">{copied ? "Email address copied" : ""}</span>
    </div>
  );
}

const inputCls = (bad) =>
  `min-h-12 w-full rounded-[10px] border bg-transparent px-3.5 py-3 text-base text-ink placeholder:text-mu transition-[border-color,box-shadow] focus:border-ac focus:shadow-[0_0_0_4px_var(--tint)] focus:outline-none ${
    bad ? "border-err" : "border-ln"
  }`;

function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", msg: "" });
  const [err, setErr] = useState({});
  const [ok, setOk] = useState("");
  const refs = { name: useRef(), email: useRef(), msg: useRef() };

  const set = (k) => (e) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    setErr((s) => ({ ...s, [k]: "" }));
    setOk("");
  };

  const submit = (e) => {
    e.preventDefault();
    const n = {};
    if (!v.name.trim()) n.name = "Enter your name";
    if (!EMAIL_RE.test(v.email.trim())) n.email = "Enter a valid email, like ada@company.com";
    if (v.msg.trim().length < 10) n.msg = "Write at least a sentence";
    setErr(n);
    const first = ["name", "email", "msg"].find((k) => n[k]);
    if (first) {
      refs[first].current?.focus();
      return;
    }
    // No form backend (CSP form-action 'self'): hand the message to the visitor's email app.
    const subject = encodeURIComponent(`Hello from ${v.name.trim()}`);
    const body = encodeURIComponent(`${v.msg.trim()}\n\n${v.name.trim()} <${v.email.trim()}>`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOk("Your email app should open with this message. Nothing is sent until you press send there.");
  };

  const field = (k, label, props, tag = "input") => {
    const Tag = tag;
    return (
    <div className="mt-2.5 first:mt-0">
      <label htmlFor={`cf-${k}`} className="mb-2 block text-sm text-i2">{label}</label>
      <Tag
        ref={refs[k]}
        id={`cf-${k}`}
        name={k}
        value={v[k]}
        onChange={set(k)}
        aria-invalid={err[k] ? true : undefined}
        aria-describedby={`cf-${k}-err`}
        className={inputCls(err[k])}
        {...props}
      />
      <div id={`cf-${k}-err`} className="mt-1.5 min-h-[18px] text-[13px] text-err">{err[k]}</div>
    </div>
    );
  };

  return (
    <form noValidate onSubmit={submit} className="cd p-[clamp(24px,3vw,40px)]" aria-labelledby="cf-title">
      <h2 id="cf-title" className="m-0 mb-6 text-[22px] font-medium tracking-[-0.015em]">Or send a message</h2>
      {field("name", "Name", { autoComplete: "name", placeholder: "Ada Lovelace" })}
      {field("email", "Email", { type: "email", autoComplete: "email", placeholder: "ada@company.com" })}
      {field("msg", "Message", { rows: 6, placeholder: "What are you working on?", style: { resize: "vertical" } }, "textarea")}
      <button
        type="submit"
        className="mt-2 h-[52px] w-full cursor-pointer rounded-btn border-0 bg-ink text-base font-medium text-bg transition hover:-translate-y-px hover:opacity-90"
      >
        Send message
      </button>
      <div className="mt-3.5 min-h-5 text-sm text-ac" role="status" aria-live="polite">{ok}</div>
    </form>
  );
}

export default function Contact() {
  const time = useClock(site.timeZone);
  const rows = [
    { label: "GitHub", value: `${links.github.split("/").pop()} ↗`, to: links.github },
    { label: "LinkedIn", value: "Profile ↗", to: links.linkedin },
    { label: "Google Scholar", value: "Profile ↗", to: links.scholar },
  ];
  return (
    <Page className="page-enter">
      <Meta />
      <div className="grid items-start gap-[clamp(40px,7vw,112px)] pt-[clamp(48px,8vw,120px)] min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,480px)]">
        <div>
          <h1 className="h1-page">Say hello</h1>
          <p className="m-0 mt-[22px] max-w-[520px] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-i2">{contact.lead}</p>
          <CopyEmail />
          <div className="mt-[18px] flex items-center gap-2.5 text-[15px] text-i2">
            <span className="pulse-dot shrink-0" aria-hidden="true" />
            {contact.status}
          </div>

          <h2 className="m-0 mb-4 mt-12 text-sm font-normal text-mu">Good reasons to write</h2>
          <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
            {contact.reasons.map((r) => (
              <li key={r.title} className="cd flex gap-3.5 px-5 py-[18px]">
                <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-ac shadow-[0_0_0_4px_var(--tint)]" aria-hidden="true" />
                <span>
                  <span className="block text-base font-medium text-ink">{r.title}</span>
                  <span className="mt-1 block text-sm leading-[1.55] text-i2">{r.text}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-b border-ln">
            {rows.map((r) => (
              <SiteLink
                key={r.label}
                to={r.to}
                className="group flex min-h-[60px] items-center justify-between border-t border-ln text-base text-ink transition-[padding] duration-300 hover:pl-2"
              >
                <span>{r.label}</span>
                <span className="text-mu transition-colors group-hover:text-ac">{r.value}</span>
              </SiteLink>
            ))}
            <div className="flex min-h-[60px] items-center justify-between border-t border-ln text-base">
              <span>Local time</span>
              <span className="text-mu">{site.city} · {time} IST</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </Page>
  );
}
