# Personal-Website
Personal website and interactive resume. 
Next.js Portfolio / Click-Through Resume Spec

Goal

Build a clean, fast, minimal personal website in Next.js that functions as both:

a portfolio

a click-through resume

a structured archive of projects that can later be shortened into resume bullets

The site should make it easy for a recruiter or hiring manager to quickly understand:

what I worked on

what kind of work it was

what I owned

who it was for

what changed because of my work

This should feel more like a polished, modern project database than a flashy design portfolio.

Overall Structure

Create a simple top-level navigation with the following sections:

Home

Project Management

Product / UX

Creative / Content

Film / Production

Resume

Contact

The most important section right now is Project Management.

Core Concept

The Project Management section should behave like a filtered, click-through case study library.

Each project should appear first as a compact card/list item with structured fields.
When clicked, it should open a project detail page with deeper context.

The structure should make it easy for me to:

show breadth of experience

reuse project descriptions for resumes

quickly swap between short and long versions of the same work

present startup work in a professional PM-friendly format

UX Direction

Design goals:

minimal

modern

highly readable

professional

low clutter

strong hierarchy

not overly playful

not overly corporate

Visual feel:

clean typography

card/grid or list layout

subtle interactions

soft borders/shadows

easy filtering

fast scanning

Avoid:

overly animated portfolio gimmicks

giant walls of text on first view

too much decorative visual noise

Main Project Management Page

Build a page that includes:

1. Intro Header

Short intro explaining that this section highlights implementation, onboarding, product rollout, stakeholder coordination, systems thinking, and cross-functional execution.

2. Filter / Sort Controls

Allow filtering by:

Project Type

Industry / Client

Role

Skill Area

Year / Timeline

Suggested project type filters:

Onboarding / Implementation

Product Build

Systems Integration

Workflow / Process Design

CRM / Data Integration

Dashboard / UX

Communications / Lifecycle

Production / Operations

Suggested skill filters:

Project Planning

Stakeholder Management

Cross-Functional Collaboration

Risk / Issue Resolution

Process Design

Documentation

Product Strategy

UX / Information Architecture

Automation

Content / Messaging

3. Project Cards

Each project card should show:

Project Title

Project Type

Client / Company

Role

Timeline

One-line summary

Skills used

Optional: impact tag / status tag

Example card fields:

Project: Advisor Onboarding System Transformation

Project Type: Onboarding / Implementation

Client / Company: Finliti

Role: Product & Content Lead

Timeline: 2023–2026

Summary: Transformed manual advisor onboarding into a self-serve automated SaaS workflow.

Skills Used: onboarding design, workflow design, stakeholder coordination, product operations, Stripe integration

4. Click-through Detail Page

Each card should open to a page with fuller detail.

Project Detail Page Structure

Each project detail page should include the following sections in this order:

A. Header Block

Project title

Project type

Client / company

My role

Timeline

Optional status (launched / in pilot / prototype / ongoing)

B. Project Snapshot

A compact summary row or list with:

Industry

Users / audience

Team collaborators

Tools / platforms

Scope level (internal / external / enterprise / pilot / B2C)

C. Context

Explain the starting situation.
Answer:

What existed before?

What problem needed solving?

Why did this matter?

D. Objective

One short section explaining the goal of the project.

E. What I Owned

Explicitly define my role and ownership.
Examples:

onboarding flow design

dashboard structure

documentation systems

pilot coordination

product messaging

stakeholder communication

feature organization

F. What I Built / Changed

Use a concise bullet list of the real outputs.
Examples:

automated onboarding flow

Stripe plan purchase setup

advisor dashboard structure

client survey distribution flow

CRM export logic for behavioral profile data

demo bypass system for pilot usage

G. Collaboration

Show who I worked with.
Examples:

CEO

CTO

software developer

interns

advisors

firms / clients

H. Skills Used

Use structured tags and also a readable list.

I. Outcome / Impact

This should be one of the most important blocks.
Show:

scale

adoption

efficiency gains

reduced friction

improved clarity

enabled growth

J. Resume Version Toggle

Include a small area on each project page with:

Short resume version

Long resume version

Key skills / ATS keywords

This is important because I want to reuse these projects for job applications.

Data Model / CMS Structure

Please build the project system in a way that is easy to maintain, ideally using local JSON, MDX, or a lightweight content structure that can later move into a CMS.

Each project entry should support these fields:

id

slug

title

shortTitle

category

projectType

company

client

role

location

timelineStart

timelineEnd

status

oneLineSummary

shortResumeVersion

longResumeVersion

context

objective

ownership

deliverables

collaborators

skills

tools

outcomes

metrics

tags

featured

Optional fields:

screenshots

diagrams

links

testimonials

relatedProjects

Initial Project Entries to Create

Start by creating the following projects in the Project Management section.
These should all be separate entries.

1. Advisor Onboarding System Transformation

Project Type: Onboarding / Implementation

Client / Company: Finliti

Role: Product & Content Lead

Timeline: March 2023 – Present

Summary: Transformed manual advisor onboarding from email/PDF-based setup into an automated self-serve SaaS onboarding experience.

Context: Advisors were previously onboarded manually through email, PDFs, and survey distribution with limited system visibility.

Objective: Reduce onboarding friction and create a scalable, professional advisor setup experience.

What I Owned: onboarding flow structure, user guidance, documentation, experience design, workflow refinement

What I Built / Changed: simplified signup page, Stripe plan purchase flow, automated activation logic, dashboard access setup, survey workflow, demo bypass system for pilots

Collaboration: CEO, CTO, software developer

Scale / Outcome: ~10 advisors across ~4 firms onboarded through evolving workflows; reduced manual steps and improved scalability

Skills Used: onboarding design, workflow design, implementation support, stakeholder coordination, process improvement, product operations

ATS / Resume Keywords: implementation, customer onboarding, project coordination, SaaS deployment, workflow automation, stakeholder management

2. Advisor Dashboard & Platform Expansion

Project Type: Product Build / Dashboard / UX

Client / Company: Finliti

Role: Product & Content Lead

Timeline: March 2023 – Present

Summary: Helped evolve the platform from a limited survey/report flow into a broader advisor dashboard with integrated tools.

Context: Early workflow was fragmented and centered on standalone outputs rather than a unified product experience.

Objective: Build a centralized advisor workspace where multiple tools and insights live together.

What I Owned: product structuring, experience clarity, dashboard organization, content logic, user-facing workflow design

What I Built / Changed: integrated survey visibility, client profile access, behavioral insights display, portfolio tools, newsletter generation, AI/voice agent touchpoints, market alert organization

Collaboration: CEO, CTO, software developer

Outcome: created a more cohesive advisor-facing product and improved usability of expanding feature set

Skills Used: UX thinking, information architecture, product design, feature organization, cross-functional collaboration

ATS Keywords: dashboard development, product operations, UX design, feature rollout, product enhancement

3. CRM Behavioral Profile Integration

Project Type: Systems Integration / CRM / Data Workflow

Client / Company: Finliti / Wealthbox-related integration work

Role: Product & Content Lead

Timeline: 2025 – Present

Summary: Supported export and integration of behavioral profile data into CRM workflows so advisors could use personality data in daily practice.

Context: Behavioral insights existed but were not deeply embedded into advisor CRM workflows.

Objective: Make client personality profile data accessible within CRM environments and connected to advisor action.

What I Owned: workflow definition, behavioral data framing, integration logic support, communication of use cases

What I Built / Changed: data export structure for profile information, internal CRM/Pulse workflow connections, alignment of investor profile data with advisor tools

Collaboration: CEO, CTO, software developer

Outcome: advanced practical integration of behavioral data into advisor workflow systems

Skills Used: systems thinking, CRM workflow design, data mapping support, product implementation, stakeholder communication

ATS Keywords: CRM integration, data workflows, systems integration, implementation support, cross-functional collaboration

4. Market Alerts & Portfolio Signal System

Project Type: Product Feature / Alerts / Portfolio Workflow

Client / Company: Finliti

Role: Product & Content Lead

Timeline: 2025 – Present

Summary: Helped shape a market alert workflow that connects uploaded asset shelves and portfolio data to relevant alerts and investor profile logic.

Context: Advisors needed more actionable, ongoing product value beyond static reports.

Objective: Create an insight layer that links portfolios, market movement, and investor profile context.

What I Owned: feature framing, workflow clarity, user value articulation, interface logic support

What I Built / Changed: organized alert concepts, portfolio shelf usage logic, profile-based categorization of signals, user-facing structure for alerts and insights

Collaboration: CEO, CTO, software developer

Outcome: contributed to expansion of platform from report-based tool to ongoing advisor utility system

Skills Used: product strategy, feature planning, workflow design, information architecture

ATS Keywords: feature implementation, alerts workflow, portfolio tools, product planning, user experience

5. Lifecycle Email & Engagement System

Project Type: Communications / Lifecycle / Engagement

Client / Company: Finliti

Role: Product & Content Lead / Content Lead

Timeline: 2021 – Present

Summary: Designed and produced lifecycle emails and newsletters that improved user engagement and supported onboarding and retention.

Context: Product adoption and user education required stronger communication structure.

Objective: Improve clarity, engagement, and continuity across user touchpoints.

What I Owned: messaging strategy, content design, email structure, ongoing communications

What I Built / Changed: lifecycle sequences, newsletters, advisor-facing communications, content systems tied to user journey

Outcome: achieved approximately 42% open rates and helped maintain consistent product engagement

Skills Used: lifecycle marketing, user communication, content strategy, onboarding support, engagement design

ATS Keywords: email campaigns, lifecycle communication, customer engagement, onboarding communications, retention support

6. B2C Discovery Survey Funnel

Project Type: Funnel / Product Experience / User Acquisition

Client / Company: Finliti

Role: Content Lead / Product & Content Lead

Timeline: 2021 – Present

Summary: Supported user-facing discovery survey experience that drove over 1,000 completions and fed product insight generation.

Context: Finliti needed a scalable entry point for users to discover behavioral finance profiles.

Objective: Build an accessible, compelling B2C experience that supports discovery and conversion.

What I Owned: survey-facing content, experience clarity, report framing, product messaging

Outcome: contributed to more than 1,000 completed discovery surveys

Skills Used: user journey design, content strategy, conversion support, product messaging

ATS Keywords: funnel optimization, user journey, survey experience, acquisition support, customer engagement

7. Enterprise Product Rollout & Early Client Growth

Project Type: Product Rollout / Early-Stage Growth / Client Delivery

Client / Company: Finliti

Role: Product & Content Lead

Timeline: 2023 – Present

Summary: Helped move Finliti from early startup stage with no revenue to a revenue-generating platform with advisors and enterprise firms on annual plans.

Context: Business was transitioning from pre-seed experimentation to active commercial traction.

Objective: support product readiness, delivery, onboarding, and credibility for early clients

What I Owned: product presentation, onboarding readiness, user-facing clarity, rollout support

Outcome: supported growth from zero clients/revenue to an active advisor base and enterprise relationships

Skills Used: startup operations, product rollout, implementation readiness, cross-functional execution, stakeholder support

ATS Keywords: product rollout, SaaS implementation, early-stage growth, client onboarding, project coordination

8. Intern Coordination & Feature Support

Project Type: Team Coordination / Delivery Support

Client / Company: Finliti

Role: Product & Content Lead

Timeline: 2024 – Present

Summary: Coordinated intern contributions across product-related workstreams and feature support.

Context: Startup work required flexible support across evolving product priorities.

Objective: direct available resources toward features and initiatives with highest value

What I Owned: guidance, review, coordination, team communication

Collaboration: interns, CEO, CTO, developer

Skills Used: coordination, prioritization, delegation, review, communication

ATS Keywords: team coordination, cross-functional collaboration, project support, task management

9. RBC FinSec Incubator Participation

Project Type: Strategic Stakeholder Engagement / Ecosystem Exposure

Client / Company: Finliti

Role: Product & Content Lead / Company Representative

Timeline: 2023

Summary: Participated in RBC FinSec incubator and contributed to conversations with Canadian fintech and banking stakeholders.

Context: Finliti was building credibility and market visibility during growth stage.

Objective: engage industry stakeholders and strengthen strategic positioning

Skills Used: communication, product positioning, stakeholder engagement, startup representation

ATS Keywords: stakeholder engagement, fintech, enterprise readiness, external collaboration

Resume Section

Build a separate Resume page that includes:

concise professional summary

role-based experience

downloadable resume links

quick links back to detailed projects

Allow each role entry to reference related projects.
Example:
Finliti — Product & Content Lead
Related Projects:

Advisor Onboarding System Transformation

CRM Behavioral Profile Integration

Enterprise Product Rollout

Technical Build Notes

Use Next.js with a clean, maintainable structure.
Recommended:

App Router

TypeScript

Tailwind CSS

simple local content architecture (JSON or MDX)

reusable card/detail components

filtering UI

responsive design

Suggested components:

Navbar

SectionHeader

FilterBar

ProjectCard

ProjectDetailHeader

MetadataGrid

SkillsTagList

ResumeVersionBlock

RelatedProjects

Content Priorities

Priority order:

Structure and readability

Search/filter usability

Clear PM framing

Easy future editing

Visual polish

Tone of the Site

The copy should feel:

clear

intelligent

direct

confident

not overhyped

not overly artsy

not buzzword-heavy

What Success Looks Like

A recruiter or hiring manager should be able to land on the site and within 60–90 seconds understand:

I have real project management and implementation experience

I have led systems/process/product work in startup environments

I can work cross-functionally

I can translate messy evolving work into structure

I have enough detail to back up short resume bullets

Final Request

Please build this so I can easily add new project entries later and so each project can serve both as:

a case study

a database entry

a source for tailored resume bullets

The Project Management section is the first priority, and the Finliti projects above should be entered first.

