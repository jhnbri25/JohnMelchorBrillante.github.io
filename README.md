# John Melchor Brillante | Portfolio

My personal portfolio site. It shows who I am, the projects I've built, my certificates and how to reach me. It's plain HTML, CSS and JavaScript with no build step.

Live site: https://brillanteprojectpotfolio.netlify.app/

## About me

I'm a third-year BS Computer Science student at Gordon College (College of Computer Studies) in Olongapo City, and I live in Subic, Zambales. I like turning everyday problems into working software. I'm also adding cybersecurity and cloud skills.

## What's on the site

- **RoomieTrack**: a PWA I built alone for roommates to split bills and share chores. Has a live demo link, an interactive Debt Eraser switch and screenshots.
- **RoomieTrack case study**: the problem, target users, sprints, design, decisions, results and lessons learned.
- **AI-assisted recruitment**: a group project with Rylan Bernardino and Adrian Raymundo for One Source General Solutions Inc., built with n8n and Google Gemini. It's also the topic of our research paper.
- **Recruitment case study**: the bottleneck survey, decisions, how we measure it, and my part (application form builder, QA tester and n8n automation support).
- **Certificates**: Fortinet NSE 1, Cybersecurity and Cloud Fundamentals 1.0, and Cisco Networking Academy courses in Python, HTML and CSS.
- **Skills** and **contact** sections.

## Technical skills

- Web apps: HTML5, CSS3, JavaScript (responsive layouts, dark mode, installable PWAs)
- Backend and data: Supabase, PostgreSQL, Row-Level Security
- Python 3, including object-oriented design
- Algorithms: greedy debt minimization, a chore fairness heuristic
- Automation: n8n workflows with Gmail, Google Sheets and Gemini
- Security and cloud: Fortinet NSE 1, cloud fundamentals

## Technologies used in this site

- HTML5 and CSS3 (CSS variables for theming, responsive layout)
- Vanilla JavaScript (scroll animations, progress bar, Debt Eraser demo, certificate tilt effect)
- Google Fonts: Bricolage Grotesque and DM Sans
- Images in WebP format

## Key features of the site

- Responsive layout for phones and desktops
- Interactive Debt Eraser demo that goes from 12 payments to 3
- Scroll-reveal animations that turn off when the visitor prefers reduced motion
- Accessibility basics: semantic HTML, alt text, skip link, `aria` labels

## Run locally

Open `index.html` in a browser, or run this in the project folder and visit http://localhost:8000:

```
python3 -m http.server
```

## Project structure

```
.
├── index.html        page content
├── css/
│   └── styles.css    styles, theme variables, responsive rules
├── js/
│   └── main.js       animations and the Debt Eraser demo
├── assets/           images (portrait, hiking photo, app screenshots, n8n workflow)
└── README.md
```

## Deploy

The site is deployed on Netlify. It also works on GitHub Pages: Settings, Pages, deploy from the `main` branch, root folder. All paths are relative, so it works as a project site.

## Contact

brillantejm72@gmail.com | Instagram @jhn_bri | [GitHub](https://github.com/jhnbri25)
