import React from 'react'
import { Layout } from '../components/Layout'

export function AveannaCaseStudyPage() {
  return (
    <Layout>
      <section className="relative w-full bg-white py-[100px] text-[#333333] text-sm leading-5 font-montserrat antialiased">
        <div className="max-w-[1170px] w-full mx-auto relative z-[3] px-[15px]">
          <div>
            <img
              src="/assets/workflow_automations.png"
              alt="Aveanna Healthcare workflow"
              className="inline-block max-w-full align-middle mb-[50px] border-0"
            />

            <h2 className="font-montserrat font-bold leading-[44px] text-[#333333] text-[40px] mt-5 mb-2.5">
              Aveanna Healthcare
            </h2>

            <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
              Practice Manager
            </p>

            <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
              As a practice manager for a home health company, I managed the daily chaos that comes with healthcare: payroll, scheduling, keeping everyone in compliance, and optimizing processes to keep our office running efficiently. This role taught me the fundamentals that now shape my approach to product thinking—listening to users, designing systems that scale, and measuring what matters.
            </p>

            <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
              <strong className="font-bold text-[#333333]">Problem:</strong>
            </p>

            <ul className="pl-[30px]">
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Critical processes like payroll lacked standardized quality assurance systems. Errors slipped through the cracks, leading to frustrated staff and eroded trust.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Billable hours plateaued as nurse attrition outpaced hiring, creating a revenue ceiling the office struggled to break through.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Manual report generation consumed hours of administrative time each week, pulling focus from higher-value work like staff retention and care coordination.
                </p>
              </li>
            </ul>

            <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
              <strong className="font-bold text-[#333333]">
                Gathered Insights:
              </strong>
            </p>

            <ul className="pl-[30px]">
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Held 1:1 conversations with nursing staff to surface recurring pain points: payroll discrepancies, communication gaps, and mismatched schedules.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Partnered with leadership to reassess recruitment strategy and identify untapped candidate pools.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Analyzed nurse labor metrics—weekly hours, overtime distribution, license types mapped to preferred payors—to uncover levers for both utilization and revenue growth.
                </p>
              </li>
            </ul>

            <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
              <strong className="font-bold text-[#333333]">Solution:</strong>
            </p>

            <ul className="pl-[30px]">
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Built an automated payroll checklist that flagged anomalies (e.g., rates significantly below standard RN pay, new hires missing correct rate setup), running in tandem with human review of payroll reports.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Implemented a high-touch outreach approach to nursing leads—consistent follow-up calls focused on understanding individual pain points around compensation and scheduling flexibility, then matching nurses to arrangements that worked.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Developed streamlined reporting workflows that cut time spent on data pulls and analysis, freeing capacity for strategic work.
                </p>
              </li>
            </ul>

            <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
              <strong className="font-bold text-[#333333]">
                Implementation Process:
              </strong>
            </p>

            <ul className="pl-[30px]">
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Started with the highest-friction problem: payroll. Mapped the existing workflow end-to-end, identified failure points, and introduced checkpoint logic before final submission.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Rolled out the new QA process alongside existing workflows initially, validating catch rates before fully transitioning.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  For recruitment, shifted from reactive hiring to proactive pipeline management—tracking candidates through stages, documenting objections, and iterating on outreach messaging based on what resonated.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Built reporting templates incrementally, standardizing the most-requested views first and expanding based on leadership feedback.
                </p>
              </li>
            </ul>

            <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
              <strong className="font-bold text-[#333333]">Results:</strong>
            </p>

            <ul className="pl-[30px]">
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Increased weekly billable hours from ~1,900 to ~2,500—a 30%+ improvement in utilization.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Reduced payroll errors by approximately 85% through systematic QA checks.
                </p>
              </li>
              <li className="list-disc list-outside leading-[26px]">
                <p className="font-montserrat text-[#979797] text-lg tracking-[0.5px] leading-[30px] font-medium mb-2.5">
                  Efficiency gains translated directly into time reinvested in staff: more appreciation efforts, better shift matching, and the kind of attention that keeps nurses from looking elsewhere.
                </p>
              </li>
            </ul>

            <div className="clear-both" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
