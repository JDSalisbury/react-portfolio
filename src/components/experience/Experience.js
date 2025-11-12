import "./Experience.css";

const experienceData = [
  {
    company: "JPMorganChase",
    positions: [
      {
        title: "V.P. Lead Software Engineer - Business Intelligence Automation Team",
        period: "2023 - Present",
        location: "Hybrid",
        description: "As a V.P. Lead Software Engineer, I spearhead the creation of automation solutions for Business Intelligence (BI) tools, including Tableau, Cognos, Qlik, and Thoughtspot, enabling seamless management and integration within the firm's infrastructure. I lead a team of six developers, focusing on maintaining high development standards and sustainable, maintainable code through paired programming, code reviews, and comprehensive documentation.",
        highlights: [
          "Designing and implementing microservice-based architectures to handle automation for various BI tools",
          "Overseeing the intake and triage process for automation requests across multiple departments by creating structured workflows and communication channels",
          "Leading development initiatives, such as the MVP for AutoFlow, ensuring that agile processes like daily standups and story management are followed",
          "Managing multiple roles, including project owner, scrum master, and lead developer, to ensure successful project execution and delivery",
          "Mentoring team members on coding best practices, reducing code complexity, and setting up knowledge transfer sessions to maintain a culture of continuous learning"
        ],
        skills: ["Python", "React.js", "Cloud Foundry", "Vue.js", "Django Rest Framework", "Django", "Agile Methodologies"]
      },
      {
        title: "V.P. Lead Software Engineer - Cloud Automation Team",
        period: "May 2022 - Mar 2023",
        location: "Columbus, Ohio Metropolitan Area · Hybrid",
        description: "During my time on the Cloud Automation Team, I was instrumental in driving the transition of on-premise Business Analytics (BA) tools and data to the cloud. One of my key contributions was the design and development of a comprehensive DSN (Data Source Name) management tool, built with React and Django/Django REST Framework.",
        highlights: [
          "Developed an automation tool that allows new connections to be dynamically created via an admin panel, eliminating the need for production deployments for updates",
          "Played a critical role in moving on-premise BA tools to the cloud by streamlining DSN management, enabling any BI tool to connect to any data source",
          "Created a scalable, efficient solution that continues to be used firmwide for real-time data source updates"
        ],
        skills: ["Python", "React.js", "Agile Methodologies", "Vue.js", "Linux", "Celery"]
      },
      {
        title: "Software Engineer",
        period: "Oct 2020 - May 2022",
        location: "Columbus, Ohio Metropolitan Area",
        description: "Team Lead: Set up a team by training members to use Git, Bitbucket, Django, Vue, Celery, and CI/CD. Implemented Scrum's two-week sprints over Kanban to better support a more product-forward team. Standardized Jira epic and story ticket setup with more modern-day practices.",
        highlights: [
          "Designed and architected an internal application with over 100 daily users, working with and training two Junior developers to bring the application to prod in 4 months",
          "Built with Vue/Vuex frontend and a Django/DRF backend, the application is used as a one-stop-shop for JPMC employees' use of Tableau, automating onboarding, deployments, support requests, and administration",
          "Application has the largest userbase in Chase with over 100,000 users",
          "Data Center Migration Automation: Created Pipeline and Python script to run Tableau Server in new Data Center, linking NAS and backups together for multi-node server clusters"
        ],
        skills: ["Agile Methodologies"]
      }
    ]
  },
  {
    company: "The Judge Group",
    positions: [
      {
        title: "Lead Software Engineer",
        period: "May 2020 - Oct 2020",
        location: "Columbus, Ohio Metropolitan Area",
        type: "Contract",
        description: "Creating a Vue/Django application for automating the team's Manual processes. Setting up Bitbucket and Git practices, and implementing Jira tickets to correspond with the work in an agile environment.",
        highlights: [
          "Data Center Migration Automation: Creating Pipeline and Python scripts to run Tableau Server in new Data Center",
          "Flow designed to automate resiliency tasks and events, recovery, detect loss and system availability"
        ],
        skills: ["Agile Methodologies"]
      }
    ]
  },
  {
    company: "PNC",
    positions: [
      {
        title: "Infrastructure Engineer",
        period: "Oct 2019 - May 2020",
        location: "Columbus, Ohio Metropolitan Area",
        type: "Contract",
        description: "Apart of the Infrastructure Automation team, tasked with developing APIs. Currently working on an inhouse server provisioning application. Creating workflows for more efficient software development across the team. Implementing Testing and clean code practices. Created documentation to implement Atlassian products more efficiently.",
        skills: ["Agile Methodologies"]
      }
    ]
  },
  {
    company: "Everest Technologies, Inc",
    positions: [
      {
        title: "Consultant",
        period: "Oct 2018 - May 2020",
        location: "Worthington, Ohio",
        description: "Multi-client consulting role with diverse responsibilities across different projects.",
        highlights: [
          "Everest Technologies - Worked on in-house Timesheet Application, created new features for administrative staff to have a more clear view of Employees using PHP and MySQL",
          "PNC - Developed an API for a Podcast Application using Django and Python",
          "Rue 21: Lead Software Developer - Responsible for managing code quality and the underlying architecture of the project, overseeing work being done by other developers both on and offshore",
          "Onboarding new developers, interviewing potential resources, created Katas for use in assessing candidates, attended events looking for potential candidates"
        ],
        skills: ["Agile Methodologies"]
      }
    ]
  }
];

export const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-content">
        <div className="experience-header">
          <h2 className="experience-title">Work Experience</h2>
        </div>

        <div className="timeline">
          {experienceData.map((company, companyIndex) => (
            <div key={companyIndex} className="company-section">
              <div className="company-header">
                <h3 className="company-name">{company.company}</h3>
              </div>

              {company.positions.map((position, posIndex) => (
                <div key={posIndex} className="position-item">
                  <div className="position-header">
                    <div className="position-main">
                      <h4 className="position-title">{position.title}</h4>
                      <div className="position-meta">
                        <span className="position-period">{position.period}</span>
                        {position.type && <span className="position-type">· {position.type}</span>}
                      </div>
                      <div className="position-location">{position.location}</div>
                    </div>
                  </div>

                  <div className="position-content">
                    <p className="position-description">{position.description}</p>

                    {position.highlights && position.highlights.length > 0 && (
                      <ul className="position-highlights">
                        {position.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    )}

                    {position.skills && position.skills.length > 0 && (
                      <div className="position-skills">
                        {position.skills.map((skill, idx) => (
                          <span key={idx} className="skill-badge">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
