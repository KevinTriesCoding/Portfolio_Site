import React from 'react'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { SquiggleArrow, ZigZag, CircleOutline } from '../components/Decorations'
import { Timeline } from '../components/Timeline'
import { SkillGrid } from '../components/SkillGrid'
import { Shield, Users, RefreshCw, Cpu, Workflow, BarChart3 } from 'lucide-react'

export function AboutPage() {
  const skills = [
    {
      icon: Shield,
      title: 'Risk Management',
      description:
        'From dorm rooms to board rooms—seeing the pothole before we drive over it. Experience as Resident Advisor and in Revenue Cycle auditing a $480M portfolio. As Practice Manager I combine those instincts with technical governance and Python-based monitoring tools for compliance and payroll.',
      color: 'bg-green-100',
    },
    {
      icon: Users,
      title: 'Stakeholder Management',
      description:
        "I translate between people and make the complex accessible. From content writing at NC State (turning research into stories) to Revenue Cycle (denial codes into financial strategies) to Practice Manager—aligning clinical needs, patient families, and operational mandates.",
      color: 'bg-blue-100',
    },
    {
      icon: RefreshCw,
      title: 'Process Improvement',
      description:
        "Healthcare moves fast; its tools should too. I don't wait for enterprise overhauls—I build the bridge myself. Custom Python scripting, automated billing audits, and data visualization to turn hours of busy work into instant insights.",
      color: 'bg-orange-100',
    },
    {
      icon: Cpu,
      title: 'Technical Agility',
      description:
        'Lifelong learner hunting for the unfair advantage. LLMs as co-pilot for problem-solving; Python and web dev to ship tools; Excel/Sheets and SQL to treat data as the source of truth. I don\'t wait for a manual—I figure it out.',
      color: 'bg-purple-100',
    },
    {
      icon: Workflow,
      title: 'System Design',
      description:
        "I take a keen look at how my organization's processes actually work and try to find the friction worth eliminating. When I build something new, it must pass three tests: A) Easy to adopt across the team B) Self-sustaining without constant oversight C) Non-disruptive to other currently existing workflows. Taking this approach has proven to lead to near seamless implementations.",
      color: 'bg-teal-100',
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Visualization',
      description:
        "I love finding the human story buried in healthcare data. Python (Pandas, NumPy) and R for the heavy lifting, Excel when speed matters — whatever gets me from messy dataset to clear insight fastest. The real work isn't just crunching numbers; it's building visualizations that help my team see the trends and then allow us to build strategies around them.",
      color: 'bg-rose-100',
    },
  ]

  const education = [
    {
      period: '2016 – 2021',
      title: 'North Carolina State University',
      subtitle: 'B.A. in Psychology and Political Science',
    },
    {
      period: '2025',
      title: 'Google Data Analytics Certificate',
      subtitle: 'Completed 2025',
    },
    {
      period: 'Expected Apr 2026',
      title: 'PMP (Project Management Professional)',
      subtitle: 'In progress',
    },
  ]

  const experience = [
    {
      period: '2024 – Present',
      title: 'Aveanna Healthcare',
      subtitle: 'Practice Manager',
      description:
        'Orchestrating daily operations for 60+ nurses and 35 high-needs patients. Automating payroll audits with custom Python scripts and optimizing workforce utilization—drove weekly revenue from $80K to over $105K. Operational glue for compliance, burnout reduction, and smooth execution.',
    },
    {
      period: '2022 – 2024',
      title: 'Action Behavior Centers',
      subtitle: 'Revenue Cycle Management Specialist',
      description:
        'Financial detective for a $480M annual revenue portfolio. Hunted insurance discrepancies and stopped revenue leaks. Translated complex denial data into clear, actionable strategies for leadership and bridged billing and executive decision-makers.',
    },
    {
      period: '2021 – 2022',
      title: 'Action Behavior Centers',
      subtitle: 'Registered Behavior Technician',
      description:
        'Boots on the ground implementing treatment plans for children with autism. Rigorous data collection to track progress and modify interventions—learning to iterate on outcomes in real time.',
    },
    {
      period: '2018 – 2021',
      title: 'NC State College of Agriculture and Life Sciences (CALS)',
      subtitle: 'Content Writer',
      description:
        'Translator-in-Chief: turning dense academic research into stories people wanted to read. If the stakeholder doesn\'t understand the product, it doesn\'t matter how smart it is.',
    },
    {
      period: '2017 – 2019',
      title: 'NC State Housing',
      subtitle: 'Resident Advisor',
      description:
        'Managed safety and sanity of a university hall—first line for conflict mediation and emergency response. True leadership is de-escalating the 2 AM crisis so it doesn\'t become a 9 AM report.',
    },
    {
      period: '2018',
      title: 'HopeLine NC',
      subtitle: 'Crisis Hotline Volunteer',
      description:
        'Heavy conversations with callers in life\'s worst moments. You can\'t fix everyone\'s pain, but you must validate it. The most powerful tool in high-stakes moments is a steady voice and the ability to listen without flinching.',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-32 pb-20 scroll-mt-24" hasPattern id="about">
        <div className="relative">
          <div className="flex items-center mb-6">
            <div className="w-12 h-0.5 bg-gray-800 mr-4"></div>
            <span className="text-gray-600 uppercase tracking-widest text-sm font-bold">
              About Me
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tight mb-8 max-w-5xl">
            OK... So tell us a bit more about yourself
          </h1>

          <SquiggleArrow className="absolute top-0 left-[40%] md:left-[35%] -rotate-12" />
          <div className="absolute bottom-0 left-[60%] md:left-[50%]">
            <svg width="100" height="20" viewBox="0 0 100 20" fill="none">
              <path
                d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                stroke="#CED4DA"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M0 18 Q 12.5 8, 25 18 T 50 18 T 75 18 T 100 18"
                stroke="#CED4DA"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-50"
              />
            </svg>
          </div>
        </div>
      </Section>

      {/* Bio Section */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden relative">
              <img
                src="/assets/hippy_vibes.jpeg"
                alt="Kevin Moye"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-200 rounded-full -z-10"></div>
          </div>

          <div className="w-full md:w-2/3 pt-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-0.5 bg-gray-400 mr-4"></div>
              <p className="text-gray-500 font-serif italic text-lg">
                So this is me:
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Kevin—Builder
              <br />
              & Problem-Solver
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                I genuinely enjoy learning new material and building things. In an industry that shifts overnight, the most valuable asset is the ability to adapt. I don't just manage projects; I look for every available tool to optimize them.
              </p>
              <p>
                My goal is to bring a fearless, builder-first mindset to your team. When one person embraces the cutting edge, it opens doors for everyone else. I'm here to be that open door—turning technical potential into tangible results.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section hasPattern className="bg-gray-50/50">
        <div className="mb-16 relative">
          <div className="flex items-center mb-4">
            <div className="w-8 h-0.5 bg-gray-400 mr-4"></div>
            <p className="text-gray-500 font-serif italic text-lg">
              What I bring to the table
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight relative inline-block">
            My Skills
            <CircleOutline className="absolute -top-6 -left-6 opacity-60" />
          </h2>
        </div>

        <SkillGrid skills={skills} />
      </Section>

      {/* Education Section */}
      <Section>
        <Timeline
          title="My Education"
          subtitle="Let's Go Pack!"
          items={education}
        />
        <div className="flex justify-center my-12">
          <ZigZag className="text-[#FF6B6B]" />
        </div>
      </Section>

      {/* Experience Section */}
      <Section hasPattern>
        <Timeline
          title="My Experience"
          subtitle="How'd we get here?"
          items={experience}
        />
      </Section>
    </Layout>
  )
}
