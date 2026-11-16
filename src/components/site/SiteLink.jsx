import { Link } from "react-router-dom";

// Internal route -> <Link>; mailto/external -> <a>. External opens in a new tab.
export default function SiteLink({ to, children, ...rest }) {
  if (/^(https?:|mailto:)/.test(to) || to.endsWith(".pdf")) {
    const ext = to.startsWith("http");
    return (
      <a href={to} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}

