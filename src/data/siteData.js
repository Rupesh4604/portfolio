// Shared identity, navigation and links used by the site shell.

export const site = {
  name: "Rupesh Mediboyina",
  initials: "RM",
  legalName: "M Rupesh Kumar Yadav",
  email: "rupesh32003@gmail.com",
  cv: "/resume.pdf",
  city: "New Delhi",
  timeZone: "Asia/Kolkata",
};

// Primary navigation. Contact points at email until the /contact page lands (build step 4).
export const nav = [
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Research" },
  { to: "/beyond", label: "Blog" },
  { to: "/experience", label: "Career" },
  { to: `mailto:${site.email}`, label: "Contact" },
];

export const links = {
  github: "https://github.com/Rupesh4604",
  scholar: "https://scholar.google.com/citations?user=3uXHnsAAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/mediboyina-rupesh-kumar-yadav-8b7a14205/",
  orcid: "https://orcid.org/0000-0001-7148-0660",
  blog: "https://rupesh4604.github.io/",
  email: `mailto:${site.email}`,
};
