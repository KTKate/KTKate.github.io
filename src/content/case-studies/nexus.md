---
title: Project Nexus
summary: Taking LinuxONE provisioning from idea to announcement to GA.
order: 1
status: draft
role: Product and design lead
timeframe: 2025–2026
---

## The situation

Net new IBM LinuxONE customers were often sold on the idea of the scaling ability of LinuxONE as a private "cloud in a box" type model. But when they received their shiny new server, it was nothing like a cloud. Customers struggled for months or even years to successfully get their workloads in production. Everything from networking config, storage config, resource config idiosyncracies that weren't documented anywhere were each their own major obstacle. Most clients needed additional paid consulting services to get their new systems set up. This was a big ask when the customer had just taken a risk on LinuxONE and it's relatively enormous initial capital expense compared to the usual aaS cloud subscriptions. The process was so complicated, a IBM consultant who was an expert in this, said it would take at least 8 hours to install an operating system on a new machine even if he was there on site with the customer with the OS install media in hand. 

There were both conceptual and technical differences on LinuxONE that customers were not expecting. The terminology and documentation of LinuxONE assumed decades of system knowledge as most customers on LinuxONE's sister system, IBM Z have. The other factor is that on prem networking and storage skills are on the decline as more and more companies are cloud native. So even industry standard approaches like FCP storage protocols and SAN configs were sometimes huge blockers. Some customers didn't even realize they needed to have separate storage to use with their LinuxONE. 

## What we learned

<!-- The research and signals that shaped the direction. What surprised you. Methods and sources, never client names. -->
I gathered input internally and externally about the potential improvements that would benefit LinuxONE. Then I synthesized a group of potential priorities and had my researcher do a global tour at regional LinuxONE events to get the clients and potential clients and Business Partners to priorities the list of 22 items. AI assisted system management and more streamlined system management were the top priorities identified. 

At the same time I started a client council of ~30 clients representing over $1 billion in revenue with IBM, with recurring virtual sessions and a yearly in person event. The direction of the council is distinctly not to be a sales focused thing but a design/input future facing thing. We used these opportunities to gather data from clients about their pain points. 

Clients said it can take 7-24 months to plan, configure, and deploy a new workload on our systems. They told us that the OS install process was different and confusing on our systems vs mainstream distributed/cloud. They said they it's really hard to do the infrastructure config process because every step of the way assumes having deep mainframe knowledge. One of the more powerful quotes was "Everything should start with a platform that enables developers to do whatever they can envision and automate or create whatever agent they would like to create."

## The bet

<!-- What you chose to build first, what you descoped, and the tradeoff you accepted. This is the product half. -->

While we first targeted on having a combined manual and agentic system management experience, we decided to postpone the agentic part. In this climate, at a company like IBM, there were already several teams jockeying to create the primary AI experience on our architecture. My team didn't need to do the heavy lifting and it would be better to work with one of the products already in development rather than create yet another separate product stream with a similar focus. Plus, without the basic manual system management capabilities, it would be hard to create trust in the agent with no way to verify or explore the management decisions outside of the AI. 

And within the manual system management space, with only a 3 month runway to the first release as requested by execs, we decided to focus first on our most valuable and most common use cases. We focused on the day 1 onboarding experience for the new customers who never used the platform before and on installing the most commonly used Linux distribution and Kubernetes flavor as shown both by telemetry data and my previous user base research. The system has essentially neverending system managmenet configuratoin options but we had to start small and work iteratively to avoid another failed attempt at "simplification".

## Moving the org

<!-- The groups that had to come along, roughly how long the campaign ran, and what you did to keep it funded and alive. This is the leadership half. -->

This was a multipronged approach. Behind the scenes I was driving research to prove this was a problem hindering adoption. This helped us win a couple of key execs to become stakeholders. One of these high level execs helped us advocate and highlight both the needs and the solution. Through this, we got another key development leader on board. The problem was that there was no way we could solve this in the firmware layer where most of this type of solution lives on the platform. The firmware layer has to be rock solid, so it has strict processes and can take more than 3 years to get something "in plan". To move quickly we needed another solution. But we weren't sure whether we could achieve our goal with the current APIs available. 

I happened to see another employee's tooling they created to help their own team do similar system management tasks and realized the demo they showed me, proved all the technical functionality we needed in the APIs was there. I brought together the stakeholders and execs in the space and showed them the demo. This was the definite turning point in the campaign to go from an idea to a reality. After that we got true buy in from the org and leadership. If I hadn't had the technical understand to be able to recognize the significance of the demo and the research with clients, it would have just stayed an idea that we "wished we could do". But by bringing the pieces together and elevating the important details to the right execs, I was able to move things from an idea to an actual product team. Soon we had leaders from dev, pm, and design identified and then a development team.

to get the final official commitment from the business, we got 3 initial clients who agreed to join a feedback program to do research with to direct the focus and be beta testers. we did some early research with them and they confirmed the need and some the implementation details. we also demonstrated the accumulated research that backs this up. And a bit of a competitive analysis (though that's hardly saying anything since ibm linuxone is a different concept than most other cloud and on prem systems so the analogous products/experiences don't cover quite the same ground that we do. 

## What shipped

<!-- July announcement, November GA target, what a client can now do. Link anything public. -->

Nexus was announced publicly in July 2026. The first alpha environments go live with clients in fall 2026, and GA is targeted for November. At GA, a client can go from a freshly delivered LinuxONE to a partition with RHEL or OpenShift stood up in minutes. Getting here took collaboration and cross org advocacy combined with an eye for details. 

## What I would do differently

<!-- Optional. Keep only if specific. -->

I made sure my team gave the presentations and got the credit. I kept no written record of which decisions were mine, so inside the organization the strategy had no clear author. Next time I would do both: have the team present, and also keep a dated record of the major decisions and my reasoning, shared with the leaders who decide what gets funded.
