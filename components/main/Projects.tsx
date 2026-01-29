import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/tmx.png"
                    title="Modern TMX Global Website"
                    description="TMX Global provides AI-powered tax compliance and financial reporting solutions, helping businesses automate tax processes and ensure regulatory compliance."
                    link="https://www.tmxglobal.io/"
                />
                <ProjectCard
                    src="/synaptiq.png"
                    title="Synaptiq"
                    description="Synaptiq.io provides AI-powered medical imaging solutions, specifically for radiation oncology, automating tumor volume contouring to improve accuracy and save time."
                    link="https://synaptiq.io/"
                />
                <ProjectCard
                    src="/simbian.png"
                    title="Simbian AI"
                    description="Simbian AI provides autonomous security agents that detect, investigate, and respond to cyber threats in real-time, integrating with existing security tools to reduce alert fatigue and improve response times."
                    link="https://simbian.ai/ai-agents-for-security"
                />
            </div>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
                <ProjectCard
                    src="/zebraCat.png"
                    title="ZebraCat AI"
                    description="ZebraCat AI creates viral social media videos from text or audio in seconds using AI avatars, voices, and automated editing"
                    link="https://www.zebracat.ai/"
                />
                <ProjectCard
                    src="/symphony.png"
                    title="SymphonyAI"
                    description="SymphonyAI provides industry-specific AI solutions for retail, finance, and industrial sectors, offering vertical AI agents that execute tasks like demand forecasting, fraud detection, and root cause analysis."
                    link="https://www.symphonyai.com/"
                />
            </div>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
                <ProjectCard
                    src="/helport.png"
                    title="Helport"
                    description="Helport provides AI-powered call center and telesales solutions, helping global brands in fintech, telecom, and finance scale their customer support and sales operations."
                    link="https://www.helport.ai/"
                />
                <ProjectCard
                    src="/eightfold.png"
                    title="Eightfold AI"
                    description="Eightfold AI provides an AI-powered talent intelligence platform that helps enterprises hire smarter, retain knowledge, and grow skills through agentic AI that acts autonomously across hiring, growth, and retention processes."
                    link="https://eightfold.ai/"
                />
                <ProjectCard
                    src="/cresta.png"
                    title="Cresta"
                    description="Cresta provides AI-powered coaching and guidance for customer-facing teams, using real-time conversation intelligence to improve performance, reduce handle time, and increase revenue across sales and support functions."
                    link="https://cresta.com/"
                />
            </div>
        </div>
    );
};

export default Projects;
