import React from "react";
export default class DataService {
  _data = {
    projectRepo: "https://github.com/declangessel/portfolio-site",
    react95Repo: "https://github.com/React95/React95",
    items: [
      {
        id: "about",
        name: "About.txt",
        icon: "info_bubble",
        content: {
          paragraphs: [
            <>
              Building{' '}
              <a href="https://www.linkt.ai/" target="_blank">
                Linkt AI
              </a>
            </>,
          ],
        },
      },
      
      

      {
        id: "resume",
        name: "Work.txt",
        icon: "notepad_2",
        content: {
          resumeLink:
            "https://docs.google.com/document/d/1hAhNktHRrfwLPlPECqicOBSTWvufPPWcNDvgK8aWjr8/export?format=pdf",
          currentWork: [
            {
              jobTitle: "Co-Founder",
              company: (
                <div
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<a href="https://myjotbot.com/" target="_blank">JotBot</a>',
                  }}
                />
              ),
              period: "AUG 2023 – PRESENT",
              accomplishments: [
                "JotBot is a supercharged document editor that replicates your voice from writing samples, explores sources, takes notes on video-content, and gives you AI-powered document editing capabilities.",
                "We’re building towards a writing assistant that proactively explores ideas (external sources, internal documents, new analysis) along with you as you write.",
              ],
            },
          ],
          pastWork: [
            {
              jobTitle: "Founder",
              company: (
                <div
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<a href="https://steadysoles.com/" target="_blank">Steady Soles</a>',
                  }}
                />
              ),
              period: "DEC 2018 – PRESENT",
              accomplishments: [
                "A subscription-based SaaS education platform fueled by high school boredom and a passion for sneakers.",
                "Grew to $350,000 in revenue, 5000+ customers.",
              ],
            },
            {
              jobTitle: "Co-Founder",
              company: (
                <div
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<a href="https://avoalarm.com/" target="_blank">Avo</a>',
                  }}
                />
              ),
              period: "JUN 2023 – PRESENT",
              accomplishments: [
                "Avo is an AI alarm app that wakes you up with AI-generated messages, delivered by voices of popular figures, and tailored to your daily schedule and local weather.",
                "Available on the App Store.",
              ],
            },
            {
              jobTitle: "Co-Founder",
              company: (
                <div
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<a href="https://youup.io/" target="_blank">You Up</a>',
                  }}
                />
              ),
              period: "JUL 2022 – PRESENT",
              accomplishments: [
                "YouUp is a social alarm app that replaces your alarm sound with personalized, surprise messages from friends and family.",
                "Live on App Store. 20k+ downloads.",
              ],
            },
            {
              jobTitle: "Founder",
              company: (
                <div
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<a href="https://vortexproxies.com/" target="_blank">Vortex Proxies</a>',
                  }}
                />
              ),
              period: "JUL 2020 – NOV 2021",
              accomplishments: [
                "Maintained a proxy network with multiple ISP DC subnets and over 20 million residential IPs.",
                "Grew to $40,000 in revenue, 2000+ customers.",
              ],
            },
            {
              jobTitle: "Startup Founder",
              company: (
                <div
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<a href="https://www.inacademy.eu/" target="_blank">European Innovation Academy</a>',
                  }}
                />
              ),
              period: "JUL 2020 – AUG 2022",
              accomplishments: [
                "A month-long hyper-accelerator program with 500+ international students.",
              ],
            },
          ],
          education: [
            {
              credit: "B.A. in Computer Science",
              place: "University of California, Berkeley",
              period: "AUG 2021 – MAY 2025",
            },
          ],
        },
      },

      {
        id: "photography",
        name: "Photography.txt",
        icon: "camera",
      },
      {
        id: "contact",
        name: "Contact.txt",
        icon: "inetcfg_2301",
        content: {
          emailText: "Send me an email @ ",
          email: "declan@berkeley.edu",
          socialText: "Or reach out below:",
          social: [
            {
              name: "FaTwitter",
              link: "https://twitter.com/declangessel_/",
            },
            {
              name: "FaLinkedin",
              link: "https://www.linkedin.com/in/declangessel/",
            },
            {
              name: "FaGithub",
              link: "https://github.com/declangessel",
            },
            {
              name: "FaInstagram",
              link: "https://www.instagram.com/declangessel/",
            },
            {
              name: "FaSpotify",
              link: "https://open.spotify.com/user/dghrnim2uztw50sl6jwa4lgez?si=9beefce7d7a24733/",
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
