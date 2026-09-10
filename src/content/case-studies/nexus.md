---
title: Project Nexus
summary: Taking LinuxONE provisioning from client research to a funded product.
order: 1
status: restricted
role: Product and design lead
timeframe: 2025–2026
---

New LinuxONE customers told us it took **7 to 24 months** to plan, configure, and deploy a first workload, and most of them paid for consulting to get there.

I built the client evidence, found the technical path, and turned a proposal into a funded product team with a **three-month** first release.

The install and configuration steps that used to take months now take **minutes**.

## The situation

Net new LinuxONE customers were sold on LinuxONE as a private "cloud in a box." When the server arrived, it was nothing like a cloud. Customers struggled for months, sometimes years, to get their first workload into production. Networking config, storage config, and resource config each had undocumented quirks, and each one was its own major obstacle. Most clients needed paid consulting to get set up. That was a big ask from a customer who had just taken a risk on LinuxONE and its large up-front cost compared to a cloud subscription. An IBM consultant who was an expert in this said it would take him at least **8 hours** to install an operating system on a new machine, even standing next to the customer with the install media in hand.

The blockers were conceptual as well as technical. LinuxONE terminology and documentation assume decades of system knowledge, which most customers of its sister platform, IBM Z, have. On-prem networking and storage skills are also declining as more companies start cloud native, so even industry-standard things like FCP storage protocols and SAN configs were sometimes huge blockers. Some customers didn't realize they needed separate storage at all.

## What we learned

Clients, prospects, and Business Partners ranked AI-assisted system management and streamlined system management as the top two of **22** possible improvements. I gathered the candidates internally and externally, synthesized them into the list of 22, and had my researcher take it to regional LinuxONE events around the world to get it prioritized.

At the same time I started a client council of about **30 clients**, with recurring virtual sessions and a yearly in-person event. The council is for design input and future direction, not sales. We used it to gather data on client pain points.

Clients said it takes **7 to 24 months** to plan, configure, and deploy a new workload on our systems. They told us the OS install process was different and confusing compared to mainstream distributed and cloud systems. They said infrastructure config was hard because every step assumed deep mainframe knowledge.

## The bet

We postponed the agentic experience and built manual system management first. We had originally planned both together. Other teams at IBM were already building AI experiences for the platform, so it made more sense to work with one of those than to start another product with a similar focus. And without basic manual management, clients would have no way to verify or explore what the agent did outside of the AI, and no reason to trust it.

With **three months** to a first release, we scoped to our most valuable and most common use cases: day-one onboarding for customers who had never used the platform, and installing the most common Linux distribution and Kubernetes flavor, based on telemetry data and my earlier user research. The system has an almost unlimited number of management options, so we started small and worked iteratively to avoid another failed attempt at "simplification."

## Moving the org

Research showing that setup difficulty was hurting adoption got us two executive sponsors, and one of them advocated for both the need and the solution across the organization. Through that we got a key development leader too. The problem was that most solutions of this type live in the firmware layer, which cannot be allowed to fail, so it has strict processes and a planning cycle measured in years. To move quickly we needed another path, and we weren't sure the current APIs could do it.

Then I saw a demo of tooling another employee had built to help their own team with similar management tasks, and realized it proved every API we needed already existed. I brought the stakeholders and execs together and showed them the demo. After that we had real commitment from the org and its leadership. It took the technical understanding to see what the demo meant and the client research to show why it mattered. Presenting the two together to the right execs turned a proposal into a product team: leaders from dev, PM, and design, and then a development team.

To get the final commitment from the business, we did early research with a small group of clients, who confirmed the need and some of the implementation details. We also presented the accumulated research and a competitive analysis. Few products combine on-prem hardware with cloud-style provisioning, so the analysis compared partial analogues rather than direct competitors.

## What shipped

Nexus is a funded product with a development team and clients involved. The install and configuration steps that clients told us took months now take **minutes**: a client goes from a freshly delivered LinuxONE to a partition with RHEL or OpenShift running. The scope matches the two use cases we chose at the start: day-one onboarding, and installing RHEL or OpenShift on a new partition.

## What I would do differently

I made sure my team gave the presentations and got the credit. I kept no written record of which decisions were mine, so inside the organization the strategy had no clear author. Next time I would do both: have the team present, and also keep a dated record of the major decisions and my reasoning, shared with the leaders who decide what gets funded.