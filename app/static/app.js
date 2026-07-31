const experience = [
  { period: "Aug. 2025 — Present", title: "Software Engineer", organization: "Carta · Platform & Infra · Kitchener, ON" },
  { period: "Sept. 2024 — Dec. 2024", title: "Software Engineer Intern", organization: "Spire Global · Data Platform · Cambridge, ON" },
  { period: "Jan. 2023 — Aug. 2024", title: "Software Engineer Intern", organization: "Carta · Platform & Infra · Kitchener, ON" },
  { period: "May 2022 — Aug. 2022", title: "Software Engineer Intern", organization: "Fleet Complete · Platform & Infra · Remote" }
];

const projects = [
  { period: "Ongoing", title: "Home Lab", url: "https://github.com/saxenavinayak/sugar-lane", organization: "Personal project", description: "Operate a K3s cluster using GitOps with Argo CD, with a full Prometheus and Grafana observability stack, alerting, and Cloudflare Tunnel zero-trust ingress. Infrastructure is managed with Terraform and deployed via GitHub Actions." },
  { period: "Ongoing", title: "Recog", url: "https://github.com/saxenavinayak/recog", organization: "Personal project", description: "A real-time face-recognition system for RTSP streams using InsightFace embeddings, HDBSCAN identity clustering, and medoid selection for per-identity matching. Delivers named alerts on live camera feeds." },
  { period: "2024", title: "Cloud Cost Optimization Dashboard", organization: "Personal project · Private repository", description: "Designed and built a SQL-driven dashboard to estimate Databricks job costs, integrating AWS Cost Explorer for real-time cost insights." },
  { period: "2024", title: "UDP Data Transfer", url: "https://github.com/saxenavinayak/UDP_Simulator", organization: "Personal project", description: "Implemented reliable data transfer over a UDP channel using the Python Socket API." },
  { period: "2023", title: "Connect 4", url: "https://github.com/saxenavinayak/connect-four", organization: "Personal project", description: "Built a two-player Connect 4 game in JavaFX using the MVC design pattern, with auto-centering, sound effects, and confetti." },
  { period: "2023", title: "Hydra", url: "https://github.com/saxenavinayak/Hydra", organization: "Personal project", description: "Developed a computerized Hydra card game to practice OOP principles, including the observer pattern, polymorphism, high cohesion, low coupling, encapsulation, and smart pointers." },
  { period: "2020", title: "Patient Registration", url: "https://github.com/saxenavinayak/Patient_Registration", organization: "Personal project", description: "Built an EMR application with Java." }
];

const education = [
  { period: "Sep. 2020 — Apr. 2025", title: "Bachelor of Computer Science (Honours)", organization: "University of Waterloo · Waterloo, ON" },
  { period: "Feb. 2026", title: "AWS Certified Solutions Architect — Associate", url: "https://www.credly.com/badges/4c3b08ee-e246-4977-bd22-e92284aaa139/public_url?trk=public_profile_see-credential", organization: "Certification" }
];

function timeline(entries) {
  return `<div class="timeline">${entries.map((entry) => `<article class="timeline-item"><p class="period">${entry.period}</p><div class="timeline-copy"><h2>${entry.url ? `<a href="${entry.url}" target="_blank" rel="noreferrer">${entry.title} <span aria-hidden="true">↗</span></a>` : entry.title}</h2><p class="organization">${entry.organization}</p>${entry.description ? `<p>${entry.description}</p>` : ""}${entry.bullets ? `<ul>${entry.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}</div></article>`).join("")}</div>`;
}

const skills = `<section class="skills"><h2>Technical skills</h2><div class="skills-grid"><div><h3>Languages</h3><p>Python (fluent), C, C++, Java, JavaScript, Go</p></div><div><h3>Infrastructure</h3><p>Terraform, Docker, K3s, EKS, AWS (S3, EC2, VPC)</p></div><div><h3>Delivery & observability</h3><p>GitHub Actions, CI/CD, Jenkins, Grafana, Prometheus</p></div></div></section>`;
const pages = {
  "/": { number: "01", title: "Experience", content: timeline(experience) },
  "/experience": { number: "01", title: "Experience", content: timeline(experience) },
  "/projects": { number: "02", title: "Projects", content: timeline(projects) },
  "/education": { number: "03", title: "Education", content: `${timeline(education)}${skills}` }
};
const page = pages[window.location.pathname] || pages["/"];
const themeSwitch = document.getElementById("theme-switch");
const savedTheme = localStorage.getItem("theme");
function setTheme(isDark) { document.documentElement.classList.toggle("dark", isDark); themeSwitch.checked = isDark; }
setTheme(savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
themeSwitch.addEventListener("change", () => { setTheme(themeSwitch.checked); localStorage.setItem("theme", themeSwitch.checked ? "dark" : "light"); });
document.title = `${page.title} | Vinayak Saxena`;
document.getElementById("page-number").textContent = page.number;
document.getElementById("page-title").textContent = page.title;
document.getElementById("page-content").innerHTML = page.content;
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === window.location.pathname || (window.location.pathname === "/" && link.getAttribute("href") === "/experience")));
