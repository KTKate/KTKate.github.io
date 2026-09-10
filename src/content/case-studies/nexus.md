---
title: Project Nexus
summary: Taking LinuxONE provisioning from client research to a funded product.
order: 1
status: draft
role: Product and design lead
timeframe: 2025–2026
---

New LinuxONE customers reported **7 to 24 months** to get a first workload into production, and most paid for consulting services to do it.

I built the client evidence, identified the technical path, and turned a proposal into a funded product team with a **three-month** first release.

The install and configuration steps that took clients months now take **minutes**: a freshly delivered LinuxONE reaches a running RHEL or OpenShift partition.

## The situation

Most new IBM LinuxONE customers needed months, sometimes years, and paid consulting services to get a first workload into production. They were sold on the scaling ability of LinuxONE as a private "cloud in a box." When the server arrived, it was nothing like a cloud. Networking configuration, storage configuration, and resource configuration each had idiosyncrasies that were not documented anywhere, and each was a major obstacle. Paid consulting was a significant additional expense for a customer who had just taken a risk on LinuxONE and its large initial capital cost compared to a cloud subscription. An IBM consultant who specialized in this work estimated at least **8 hours** to install an operating system on a new machine, even on site with the customer and with the install media in hand.

The blockers were conceptual as well as technical. LinuxONE terminology and documentation assumed decades of system knowledge, which most customers of its sister platform, IBM Z, have. On-premises networking and storage skills are declining as more companies start cloud native, so industry-standard approaches like FCP storage protocols and SAN configuration were sometimes major blockers. Some customers did not know they needed separate storage for their LinuxONE.

## What we learned

Clients, prospects, and Business Partners ranked AI-assisted system management and streamlined system management as the top two of **22** candidate priorities. I gathered input internally and externally about potential improvements to LinuxONE, synthesized the candidates into a list of 22, and had my researcher take the list to regional LinuxONE events worldwide for prioritization.

At the same time I founded a client council of about **30 clients**, with recurring virtual sessions and one in-person event a year. The council exists for design input and future direction, not for sales. We used the sessions to gather data on client pain points.

Clients said it can take **7 to 24 months** to plan, configure, and deploy a new workload on our systems. They told us the OS install process was different and confusing compared to mainstream distributed and cloud systems. They said the infrastructure configuration process was hard because every step assumed deep mainframe knowledge.

## The bet

We postponed the agentic experience and built manual system management first. We had first targeted a combined manual and agentic experience. Other teams at IBM were already building AI experiences for the platform, so working with one of those products was a better use of my team than starting a separate product with a similar focus. Without basic manual management capabilities, clients would also have no way to verify or explore the agent's decisions outside the AI, and no reason to trust it.

With **three months** to a first release, we scoped to our most valuable and most common use cases: first-day onboarding for customers who had never used the platform, and installing the most commonly used Linux distribution and Kubernetes flavor, as shown by telemetry data and my previous user research. The system has an almost unlimited number of management configuration options, so we started small and worked iteratively to avoid another failed attempt at "simplification."

## Moving the org

Research showing that setup difficulty was reducing adoption got us two executive sponsors and then a key development leader. One of the executives advocated for both the need and the solution across the organization. The remaining problem was that most solutions of this type live in the firmware layer, which cannot be allowed to fail and therefore has strict processes and a planning cycle measured in years. To move quickly we needed another path, and we did not know whether the current APIs were sufficient.

A demo of another employee's internal tooling proved that the APIs we needed already existed. The employee had built it to help their own team with similar management tasks. I brought the stakeholders and executives together and showed them the demo, and after that we had commitment from the organization and its leadership. Recognizing the significance of the demo required technical understanding; connecting it to the client research required the research. Without both, it would have stayed an idea we wished we could do. Presenting the two together to the right executives turned a proposal into a product team, with leaders from development, product management, and design, and then a development team.

Early research with a small group of clients confirmed the need and some of the implementation details before the business made its final commitment. We also presented the accumulated research and a competitive analysis. Few products combine on-premises hardware with cloud-style provisioning, so the analysis compared partial analogues rather than direct competitors.

## What shipped

Nexus is now a funded product with a development team and client participation. The install and configuration steps that clients told us took months now take **minutes**: a client goes from a freshly delivered LinuxONE to a partition with RHEL or OpenShift running. The scope matches the two use cases chosen at the start: first-day onboarding, and installing RHEL or OpenShift on a new partition.

## What I would do differently

I made sure my team gave the presentations and got the credit. I kept no written record of which decisions were mine, so inside the organization the strategy had no clear author. Next time I would do both: have the team present, and also keep a dated record of the major decisions and my reasoning, shared with the leaders who decide what gets funded.