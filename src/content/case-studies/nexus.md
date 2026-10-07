---
title: IBM Launchpad for LinuxONE
summary: Client research and a working demonstration turned a provisioning proposal into a funded product team.
order: 1
status: restricted
role: Design and research lead, with product leadership responsibilities
category: Product direction
result: Proposal to funded product
brief:
  - label: Problem
    text: New LinuxONE clients struggled to configure infrastructure and deploy a first workload. Many paid for consulting to do it.
  - label: My decision
    text: Build manual provisioning before any agentic experience, and use a working internal demonstration to prove the APIs already existed.
  - label: Evidence
    text: Client research, a council of about 30 clients, and the demonstration supported a funded product team. Figures are restricted until general availability.
diagram:
  title: How the proposal became funded work
  caption: A decision sequence based on client research, a working internal demonstration, and organizational commitment. It does not describe release timing or performance.
  steps:
    - title: Establish the need
      detail: Client research identified setup and provisioning difficulties as a reason adoption stalled.
    - title: Establish feasibility
      detail: An internal demonstration showed the required APIs were available without a firmware change.
    - title: Secure commitment
      detail: Product, engineering, and design leaders committed a product team and client participation.
---

## The situation

**First-workload setup was a product problem, not a documentation problem.** New LinuxONE clients struggled with networking, storage, resource configuration, and operating system installation. Many needed consulting support to configure a system they had already bought.

**The experience assumed knowledge that new clients did not have.** Terminology and documentation assumed years of platform familiarity. On-premises networking and storage skills are less common as more companies start cloud native, so industry-standard steps such as storage protocol and SAN configuration became blockers. Some clients did not know they needed separate storage at all.

## What we learned

**Clients ranked simpler system management at the top.** I gathered improvement candidates from internal and external input and synthesized them into one list. A researcher on my team took the list to regional LinuxONE events for prioritization by clients, prospects, and Business Partners.

**Recurring research gave the work continuing input.** I founded the LinuxONE client council, which includes about **30 clients**, recurring virtual sessions, and one in-person event each year. Its purpose is design input and future direction, not sales.

**The evidence combined several sources.** Client accounts described setup difficulties. Earlier research and available telemetry informed the choice of operating system and container platform use cases. These sources supported scope decisions. They do not establish a public performance result for Launchpad for LinuxONE.

## The bet

**We built manual system management before an agentic experience.** The first target had been a combined manual and agentic product. Other IBM teams were already building AI experiences for the platform, so collaborating with them was a better use of my team than starting a similar product. Clients also needed a way to inspect and verify system changes outside the AI before they would trust it.

**We narrowed the scope to initial onboarding and provisioning.** The product direction focused on clients new to the platform and the most common Linux and Kubernetes use cases. The system has an almost unlimited number of configuration options, so we started small and worked iteratively instead of attempting another broad simplification.

## Moving the organization

**Research showing that setup difficulty was slowing adoption brought in executive sponsors and an engineering leader.** The remaining obstacle was that most solutions of this type live in the firmware layer, which has strict processes and a long planning cycle. Moving quickly required another path, and nobody knew whether the current APIs were sufficient.

**A demonstration of another employee's internal tooling showed that the APIs already existed.** The employee had built it for their own team's management tasks. I recognized that the demonstration covered the interfaces our proposed experience needed, and I brought the stakeholders and executives together to see it. Recognizing the significance of the demonstration required technical understanding. Connecting it to the client research required the research. Presented together, they turned a proposal into a product team with leaders from engineering, product management, and design.

**The team tested the proposal with clients before the final commitment.** Early research with a small group of clients confirmed the need and some implementation details. We also presented the accumulated research and a competitive analysis. Few products combine on-premises hardware with cloud-style provisioning, so the analysis compared partial analogues rather than direct competitors.

## What shipped

**The proposal became a funded product with a development team and client involvement.** My contribution was establishing the need, recognizing the technical feasibility, and organizing support for the product direction. Engineering, product management, and design carried the work into delivery together.

**IBM has published the product name and intended scope.** Its [statement of direction for IBM Launchpad for LinuxONE](https://www.ibm.com/docs/en/announcements/linuxone-rockhopper-5-built-secured-ai-ready-enterprise-it) describes planned onboarding, configuration management, and workload deployment for administrators new to LinuxONE. This is a statement of future direction. Release timing and performance results remain restricted.

## What I would do differently

**I would keep a dated decision record while still having the team present the work.** I made sure my team gave the presentations and received the credit. I kept no written record of which decisions were mine, so inside the organization the strategy had no clear author. Next time I would do both: have the team present, and keep a dated record of the major decisions and my reasoning, shared with the leaders who decide what gets funded.
