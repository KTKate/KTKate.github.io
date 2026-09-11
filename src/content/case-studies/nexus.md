---
title: IBM Launchpad for LinuxONE
summary: Establishing the research, technical feasibility, and organizational commitment for LinuxONE provisioning.
order: 1
status: restricted
role: Design and research lead, with product leadership responsibilities
category: Product direction · LinuxONE
result: Proposal to funded product
brief:
  - label: Problem
    text: New clients struggled to configure infrastructure and deploy their first workload.
  - label: My decision
    text: Prioritize manual provisioning and use a working demonstration to establish API feasibility.
  - label: Evidence
    text: Client research and technical evaluation supported a funded product team.
diagram:
  title: How the product proposal became funded work
  caption: A decision sequence based on client research, a working internal demonstration, and organizational commitment. It does not describe release timing or performance.
  steps:
    - title: Establish the need
      detail: Client research identified setup and provisioning difficulties.
    - title: Establish feasibility
      detail: An internal demonstration showed the required APIs were available.
    - title: Secure commitment
      detail: Product, engineering, and design leaders committed to a product team.
---

## The situation

**First-workload setup was a product problem.** New LinuxONE clients struggled with networking, storage, resource configuration, and operating system installation. Many needed consulting support to configure their systems.

**The experience assumed knowledge that new clients did not have.** Documentation and terminology required familiarity with the platform. Research also exposed gaps in clients' understanding of storage and networking prerequisites.

## What we learned

**Clients prioritized simpler system management.** I synthesized improvement candidates from internal and external input. A researcher on my team took those candidates to regional LinuxONE events for prioritization by clients, prospects, and Business Partners.

**Recurring research provided continuing design input.** I founded the LinuxONE client council, which includes about **30 clients**, recurring virtual sessions, and one in-person event each year. Its purpose is design input and future direction.

**The evidence combined several sources.** Client accounts described setup difficulties. Earlier research and available telemetry informed the choice of operating system and container platform use cases. These sources supported scope decisions; they do not establish a public performance result for Launchpad for LinuxONE.

## The bet

**We prioritized manual system management before an agentic experience.** Clients needed a way to inspect and verify system changes. Other IBM teams were developing AI experiences, creating an opportunity to collaborate rather than duplicate that work.

**We narrowed the scope to initial onboarding and provisioning.** The product direction focused on clients new to the platform and common Linux and Kubernetes use cases. This gave the team a defined set of user tasks within a much larger management system.

## Moving the organization

**I identified an existing technical implementation that supported the proposal.** An employee demonstrated tooling built for their own team's management tasks. I recognized that the demonstration showed the APIs required for our proposed experience already existed.

**I brought the client evidence and the demonstration to the decision-makers.** Executive sponsors and an engineering leader supported the proposal. I brought stakeholders together to assess the need and technical feasibility, helping secure commitment from product management, engineering, and design.

**The team tested the proposal with clients before the final commitment.** Early research confirmed the need and informed implementation details. We also presented accumulated research and a competitive analysis, comparing relevant parts of other products where no direct equivalent existed.

## What shipped

**The proposal became a funded product with a development team and client involvement.** My contribution was establishing the need, recognizing the technical feasibility, and organizing support for the product direction. Engineering, product management, and design carried the work into delivery together.

**IBM has published the product name and intended scope.** Its [statement of direction for IBM Launchpad for LinuxONE](https://www.ibm.com/docs/en/announcements/linuxone-rockhopper-5-built-secured-ai-ready-enterprise-it) describes planned onboarding, configuration management, and workload deployment for administrators new to LinuxONE. This is a statement of future direction. Release timing and performance results remain restricted.

## What I would do differently

**I would document decision ownership while continuing to give the team visibility.** I had team members present the work, but did not maintain a written record of my own product decisions. For future work, I would keep a dated decision record with the rationale and share it with the leaders responsible for funding.
