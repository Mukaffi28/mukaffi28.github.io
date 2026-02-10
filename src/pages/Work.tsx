import React, { useState } from 'react';
import styled from 'styled-components';
import { Briefcase, ExternalLink, Calendar, Users, Code, Brain, Eye, Shield, Bot, ChevronDown } from 'lucide-react';

const WorkContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`;

const Section = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const JobItem = styled.div`
  margin-bottom: 2.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: none;
  }
`;

const JobHeader = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const JobHeaderLeft = styled.div`
  flex: 1;
`;

const ExpandIcon = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  svg {
    transform: rotate(${props => props.$isExpanded ? '180deg' : '0deg'});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(74, 98, 138, 0.3);
  }
`;

const JobContent = styled.div<{ $isExpanded: boolean }>`
  max-height: ${props => props.$isExpanded ? '10000px' : '0'};
  opacity: ${props => props.$isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease;
  margin-top: ${props => props.$isExpanded ? '1.5rem' : '0'};
`;

const ProjectItem = styled.div`
  margin-bottom: 1.5rem;
  border-radius: 16px;
  overflow: hidden;
`;

const ProjectHeader = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: #7AB2D3;
    background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 50%);
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const ProjectExpandIcon = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  svg {
    transform: rotate(${props => props.$isExpanded ? '180deg' : '0deg'});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(74, 98, 138, 0.3);
  }
`;

const ProjectContent = styled.div<{ $isExpanded: boolean }>`
  max-height: ${props => props.$isExpanded ? '5000px' : '0'};
  opacity: ${props => props.$isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease;
  padding: ${props => props.$isExpanded ? '1.5rem' : '0 1.5rem'};
`;

const JobTitle = styled.h3`
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CompanyName = styled.div`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #475569;
  font-weight: 600;
`;

const CompanyLink = styled.a`
  color:rgb(0, 63, 100);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
  }
`;

const JobPeriod = styled.div`
  color:rgb(0, 67, 105);
  font-style: italic;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  padding: 8px 16px;
  border-radius: 12px;
  display: inline-flex;
`;

const JobDescription = styled.ul`
  font-family: 'Inter', sans-serif;
  color: #475569;
  line-height: 1.8;
  list-style: none;
  padding: 0;
`;

const JobDescriptionItem = styled.li`
  margin-bottom: 1.5rem;
  list-style: none;
`;

const ContentCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #7AB2D3;
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`;

const BulletList = styled.ul`
  margin: 0.6rem 0 0 1.2rem;
  padding: 0;
  list-style-type: disc;
`;

const BulletItem = styled.li`
  margin-bottom: 0.6rem;
`;

const TechnologyCard = styled.div`
  background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 100%);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: #4A628A;
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`;

const Work: React.FC = () => {
  const [expandedJob1, setExpandedJob1] = useState(false);
  const [expandedJob2, setExpandedJob2] = useState(false);
  const [expandedJob3, setExpandedJob3] = useState(false);

  // State for individual projects in Job 1 (Software Engineer II - 2 projects)
  const [expandedJob1Project1, setExpandedJob1Project1] = useState(false);
  const [expandedJob1Project2, setExpandedJob1Project2] = useState(false);

  // State for individual projects in Job 2 (Software Engineer I - 5 projects)
  const [expandedJob2Project1, setExpandedJob2Project1] = useState(false);
  const [expandedJob2Project2, setExpandedJob2Project2] = useState(false);
  const [expandedJob2Project3, setExpandedJob2Project3] = useState(false);
  const [expandedJob2Project4, setExpandedJob2Project4] = useState(false);
  const [expandedJob2Project5, setExpandedJob2Project5] = useState(false);

  // State for individual projects in Job 3 (ANTT Robotics - 4 projects)
  const [expandedJob3Project1, setExpandedJob3Project1] = useState(false);
  const [expandedJob3Project2, setExpandedJob3Project2] = useState(false);
  const [expandedJob3Project3, setExpandedJob3Project3] = useState(false);
  const [expandedJob3Project4, setExpandedJob3Project4] = useState(false);

  return (
    <WorkContainer>
      <PageHeader>
        <PageTitle>Professional Experience</PageTitle>
        <PageSubtitle>My journey in AI/ML and software engineering</PageSubtitle>
      </PageHeader>

      <Section>
        <JobItem>
          <JobHeader onClick={() => setExpandedJob1(!expandedJob1)}>
            <JobHeaderLeft>
              <JobTitle>
                <Brain size={28} />
                Software Engineer II
              </JobTitle>
              <CompanyName>
                <CompanyLink
                  href="https://www.linkedin.com/company/brainstation-23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Brain Station 23 PLC.
                  <ExternalLink size={16} />
                </CompanyLink>
              </CompanyName>
              <JobPeriod>
                <Calendar size={18} />
                January 2026 - Present
              </JobPeriod>
            </JobHeaderLeft>
            <ExpandIcon $isExpanded={expandedJob1}>
              <ChevronDown size={24} />
            </ExpandIcon>
          </JobHeader>

          <JobContent $isExpanded={expandedJob1}>
            <JobDescription>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob1Project1(!expandedJob1Project1)}>
                    <strong>Dhrubo: AI Voice Call Agent Platform <span style={{ color: '#0C07FF' }}>(Ongoing)</span></strong>
                    <ProjectExpandIcon $isExpanded={expandedJob1Project1}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob1Project1}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Architected and developed an enterprise-grade AI voice call agent platform enabling users to create, configure, and deploy conversational agents using natural language prompts without writing code.</BulletItem>
                        <BulletItem>Implemented a multi-agent management system allowing each agent to have customizable behavior, personality, greetings, and task instructions through prompt-based configuration.</BulletItem>
                        <BulletItem>Enabled real-time voice conversations using LiveKit with support for multiple speech-to-text and text-to-speech providers for flexible deployment scenarios.</BulletItem>
                        <BulletItem>Designed knowledge-aware conversational agents by integrating dynamic knowledge bases, enabling retrieval-augmented responses across heterogeneous data sources.</BulletItem>
                        <BulletItem>Built tool-enabled conversational workflows allowing agents to perform real-world actions such as service discovery, scheduling, and booking through prompt-controlled task execution.</BulletItem>
                        <BulletItem>Implemented post-call analytics with configurable evaluation criteria to generate structured insights from conversations for performance monitoring and business analysis.</BulletItem>
                        <BulletItem>Integrated secure authentication and multi-tenant access control to support organization-level agent management and data isolation.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> Python, FastAPI, LangChain, LangGraph, LiveKit, PostgreSQL, Qdrant, React, TypeScript, Docker, Prompt Engineering
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob1Project2(!expandedJob1Project2)}>
                    <strong>CliniCall Conversational AI Assistant</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob1Project2}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob1Project2}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Designed and developed a conversational AI system for CliniCall to support automated healthcare service interactions and appointment management.</BulletItem>
                        <BulletItem>Implemented intelligent consultant recommendation based on medical specialty and service requirements to assist users in selecting appropriate doctors.</BulletItem>
                        <BulletItem>Enabled real-time consultation slot discovery and secure appointment booking with automatic reservation of selected time slots.</BulletItem>
                        <BulletItem>Integrated Cal.com to manage consultant availability, calendar-based scheduling, and end-to-end appointment workflows.</BulletItem>
                        <BulletItem>Developed a multilingual conversational architecture with separate agents for Bangla (BN) and English (EN) to ensure accurate and natural user interactions.</BulletItem>
                        <BulletItem>Extended the conversational scope to cover CliniCall product offerings, service packages, consultant discovery, and booking flows through structured prompt orchestration.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> Python, LangGraph, FastAPI, SQLite, Cal.com, Multilingual Conversational AI, Prompt Engineering
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
            </JobDescription>
          </JobContent>
        </JobItem>


        <JobItem>
          <JobHeader onClick={() => setExpandedJob2(!expandedJob2)}>
            <JobHeaderLeft>
              <JobTitle>
                <Brain size={28} />
                Software Engineer I
              </JobTitle>
              <CompanyName>
                <CompanyLink
                  href="https://www.linkedin.com/company/brainstation-23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Brain Station 23 PLC.
                  <ExternalLink size={16} />
                </CompanyLink>
              </CompanyName>
              <JobPeriod>
                <Calendar size={18} />
                May 2025 - December 2025
              </JobPeriod>
            </JobHeaderLeft>
            <ExpandIcon $isExpanded={expandedJob2}>
              <ChevronDown size={24} />
            </ExpandIcon>
          </JobHeader>

          <JobContent $isExpanded={expandedJob2}>
            <JobDescription>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob2Project1(!expandedJob2Project1)}>
                    <strong>Brain Station 23 Frontdesk AI Voice Agent</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob2Project1}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob2Project1}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Designed and developed a multi-agent supervisor system using LangGraph to route real-time Bangla voice interactions across domain-specific agents.</BulletItem>
                        <BulletItem>Implemented hierarchical intent classification and deterministic routing using a structured supervisor workflow with controlled agent communication.</BulletItem>
                        <BulletItem>Integrated LiveKit with custom STT and TTS microservices, achieving sub-800ms latency per conversational turn.</BulletItem>
                        <BulletItem>Engineered a modular LLM orchestration framework with observability via LangFuse for reliable and scalable voice sessions.</BulletItem>
                        <BulletItem>Deployed the system as a LiveKit Worker Application using FastAPI and Docker for cloud-scale parallel handling.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> Python, LangChain, LangGraph, LiveKit, Deepgram STT, FastAPI, Docker, LangFuse, RESTful TTS APIs, Prompt Engineering
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob2Project2(!expandedJob2Project2)}>
                    <strong>Agentic Footfall Monitoring and Analytics Platform</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob2Project2}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob2Project2}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Led a real-time footfall analytics platform using agentic multi‑VLM architecture (GPT‑4, Gemini, Qwen‑2.5, BLIP‑2) for autonomous perception and reasoning across multi‑camera environments.</BulletItem>
                        <BulletItem>Integrated YOLOv11 and ByteTrack for detection and tracking, enabling accurate multi‑camera identity association with temporal consistency.</BulletItem>
                        <BulletItem>Applied Tree‑of‑Thought prompting for collaborative ambiguity resolution, crowd dynamics interpretation, and coherent contextual insights.</BulletItem>
                        <BulletItem>Implemented hybrid identity matching with visual (ReID) and semantic (text) embeddings for better cross‑frame and cross‑camera consistency.</BulletItem>
                        <BulletItem>Introduced an LLM‑based verification layer to confirm/reject matches, reducing false positives and improving re‑identification reliability.</BulletItem>
                        <BulletItem>Optimized embedding pipeline and similarity search via adaptive thresholds and intelligent LLM bypass for low‑latency scalability.</BulletItem>
                        <BulletItem>Achieved 0.962 re‑identification accuracy using a VLM‑centric approach vs. 0.829 with traditional ReID.</BulletItem>
                        <BulletItem>Built a React visualization interface supporting text, image, and hybrid similarity search for intuitive analytics.</BulletItem>
                        <BulletItem>Engineered temporal–spatial analytics generating natural‑language summaries of entries/exits, occupancy, and movement trends.</BulletItem>
                        <BulletItem>Led architecture, scalability planning, deployment strategy, and mentored junior developers for a modular, production‑grade system.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> GPT-4, Gemini, Qwen-2.5, Tree-of-Thought Prompting, Multi-Agent Reasoning, Vector DB, Temporal-Spatial Analytics, YOLO11, ByteTrack
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob2Project3(!expandedJob2Project3)}>
                    <strong>Bangla Text-to-Speech (TTS)</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob2Project3}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob2Project3}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Developed a Bangla TTS system from scratch using an in‑house multi‑speaker corpus.</BulletItem>
                        <BulletItem>Preprocessed/curated data: text normalization, phoneme extraction, and audio alignment.</BulletItem>
                        <BulletItem>Implemented multi‑speaker conditioning and phoneme‑level modeling for clarity and differentiation.</BulletItem>
                        <BulletItem>Enhanced prosody for expressive, human‑like intonation and naturalness.</BulletItem>
                        <BulletItem>Designed GPU‑parallel training pipelines with PyTorch and NCCL for scalable efficiency.</BulletItem>
                        <BulletItem>Evaluated pronunciation accuracy, speaker similarity, and intelligibility for robustness.</BulletItem>
                        <BulletItem>Built a scalable architecture for large datasets and multiple speakers.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> xTTSv2, Orpheus, PyTorch, NCCL, CUDA, Speech Processing Libraries, Phoneme Modeling, Multi-Speaker TTS Techniques
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob2Project4(!expandedJob2Project4)}>
                    <strong>BS23 Workplace Monitoring & Analytics Platform</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob2Project4}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob2Project4}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Built a real‑time workplace/desk monitoring platform with multi‑camera input.</BulletItem>
                        <BulletItem>Integrated YOLOv11 for detection and ByteTrack/DeepSORT for tracking.</BulletItem>
                        <BulletItem>Used Qwen‑2.5/BLIP‑2 for vision‑language analysis and activity classification (active vs idle).</BulletItem>
                        <BulletItem>Monitored occupancy, entries/exits, seating duration, and meeting participation using non‑intrusive signals.</BulletItem>
                        <BulletItem>Implemented privacy‑conscious, consistent ID tracking without facial recognition.</BulletItem>
                        <BulletItem>Generated timestamped NL summaries, logs, and visual playback for productivity insights.</BulletItem>
                        <BulletItem>Added collaboration intensity mapping, stress estimation, and temporal‑spatial analytics.</BulletItem>
                        <BulletItem>Designed for scalability: queue wait times, role‑based detection, peak hours, occupancy alerts.</BulletItem>
                        <BulletItem>Delivered full‑stack solution with Python (FastAPI), OpenCV, CSV logging, and AI/ML models.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> YOLOv11, ByteTrack, DeepSORT, Qwen-2.5, BLIP-2, Chain-of-Thought Prompting, OpenCV, Python, FastAPI, Temporal-Spatial Analytics, Zone Mapping, CSV Logging
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob2Project5(!expandedJob2Project5)}>
                    <strong>Property Tech Platform: Intelligent Property Search</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob2Project5}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob2Project5}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Built an LLM-powered conversational property search agent that extracts user intent, budget, and preferences from natural language queries.</BulletItem>
                        <BulletItem>Designed an intent-to-SQL pipeline for dynamic property retrieval and ranking based on price, location, and amenities.</BulletItem>
                        <BulletItem>Implemented a recommendation and scheduling assistant to automate broker meetings and personalized suggestions.</BulletItem>
                        <BulletItem>Integrated Redis memory and Qdrant vector DB for semantic search, session continuity, and context-aware dialogue.</BulletItem>
                        <BulletItem>Deployed a scalable full-stack system with optimized backend queries for real-time responses.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> Python, LangChain, LangGraph, GPT-4.1, GPT-4o-Mini, Redis, Qdrant, FastAPI, React, Docker, PostgreSQL
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
            </JobDescription>
          </JobContent>
        </JobItem>

        <JobItem>
          <JobHeader onClick={() => setExpandedJob3(!expandedJob3)}>
            <JobHeaderLeft>
              <JobTitle>
                <Bot size={28} />
                Machine Learning Engineer
              </JobTitle>
              <CompanyName>
                <CompanyLink
                  href="https://www.linkedin.com/company/anttroboticsltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  ANTT Robotics Ltd
                  <ExternalLink size={16} />
                </CompanyLink>
              </CompanyName>
              <JobPeriod>
                <Calendar size={18} />
                March 2024 - April 2025
              </JobPeriod>
            </JobHeaderLeft>
            <ExpandIcon $isExpanded={expandedJob3}>
              <ChevronDown size={24} />
            </ExpandIcon>
          </JobHeader>

          <JobContent $isExpanded={expandedJob3}>
            <JobDescription>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob3Project1(!expandedJob3Project1)}>
                    <strong>Gift Shop Intelligent Chatbot</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob3Project1}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob3Project1}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Developed a chatbot for personalized gift recommendations and real‑time queries using RAG.</BulletItem>
                        <BulletItem>Integrated GPT‑4, ChromaDB, and LangChain with ReactJS frontend and FastAPI backend.</BulletItem>
                        <BulletItem>Enabled retrieval of product info and tailored suggestions to boost engagement and sales.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> GPT-4, RAG, FastAPI, LangChain, ChromaDB, OpenAI Embeddings, ReactJS
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob3Project2(!expandedJob3Project2)}>
                    <strong>ANTT AI Bot</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob3Project2}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob3Project2}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Designed a chatbot using fine‑tuned LLMs (GPT‑3.5, GPT‑4o, LLaMA‑2) to generate platform‑specific code.</BulletItem>
                        <BulletItem>Produced code for Arduino, ESP32, and Raspberry Pi covering sensors, actuators, and device comms.</BulletItem>
                        <BulletItem>Validated on real hardware to ensure reliability and correctness.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> Prompt Engineering, LangChain, Python, GPT-3.5, GPT-4o, LLaMA-2
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob3Project3(!expandedJob3Project3)}>
                    <strong>Predictive Maintenance Platform for Appliances</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob3Project3}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob3Project3}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Built web/mobile predictive maintenance with time series and boosting models.</BulletItem>
                        <BulletItem>Implemented weekly retraining with new operational data for adaptive learning.</BulletItem>
                        <BulletItem>Streamed real‑time metrics: temperature, vibration, energy usage, shock events.</BulletItem>
                        <BulletItem>Deployed on AWS EC2 with FastAPI backend for scalable device monitoring.</BulletItem>
                        <BulletItem>Managed end‑to‑end delivery; mentored the AI team and ensured timelines/quality.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> Python, Multiple Time Series Models, Boosting Algorithms, AWS EC2, Adaptive Learning Techniques, FastAPI, Data Analysis Tools
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
              <JobDescriptionItem>
                <ProjectItem>
                  <ProjectHeader onClick={() => setExpandedJob3Project4(!expandedJob3Project4)}>
                    <strong>Real-Time ANPR and Dynamic Toll Pricing System</strong>
                    <ProjectExpandIcon $isExpanded={expandedJob3Project4}>
                      <ChevronDown size={20} />
                    </ProjectExpandIcon>
                  </ProjectHeader>
                  <ProjectContent $isExpanded={expandedJob3Project4}>
                    <ContentCard>
                      <BulletList>
                        <BulletItem>Developed real‑time ANPR and dynamic toll pricing with YOLOv8 and OCR.</BulletItem>
                        <BulletItem>Calculated tolls by vehicle type, time, and traffic; deployed on cloud infra.</BulletItem>
                        <BulletItem>Integrated HD cameras and a user‑friendly UI to improve efficiency and reduce manual work.</BulletItem>
                      </BulletList>
                    </ContentCard>
                    <TechnologyCard>
                      <strong>Technology used:</strong> Python, YOLOv8, OpenCV, Supervision, FastAPI, Ultralytics, PyQt5, ByteTrack
                    </TechnologyCard>
                  </ProjectContent>
                </ProjectItem>
              </JobDescriptionItem>
            </JobDescription>
          </JobContent>
        </JobItem>
      </Section>
    </WorkContainer>
  );
};

export default Work; 