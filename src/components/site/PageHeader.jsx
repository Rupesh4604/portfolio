// Inner-page title block: big display H1, optional lead, optional right-hand aside.
export default function PageHeader({ title, lead, aside, children }) {
  return (
    <header className="pt-[clamp(48px,8vw,120px)]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-0">
          <h1 className="h1-page">{title}</h1>
          {lead && (
            <p className="m-0 mt-[22px] max-w-[600px] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-i2">{lead}</p>
          )}
        </div>
        {aside}
      </div>
      {children}
    </header>
  );
}
