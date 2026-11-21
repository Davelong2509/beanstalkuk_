
import Link from "next/link";
import {
  ArrowUpRight,
  HeartHandshake,
  Sprout,
  GraduationCap,
  Users,
  Sparkles
} from "lucide-react";

import PageContainer from "@/components/layout/PageContainer";
import TeamMemberCard from "@/components/sections/TeamMemberCard";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, {
  StaggerItem
} from "@/components/motion/StaggerContainer";

import { teamGroups } from "@/content/team";

export const metadata = {
  title: "Meet the Team",
  description:
    "Meet the dedicated and caring people behind Beanstalk Day Nursery, including their roles, qualifications and professional training."
};

const teamValues = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Care that feels personal",
    description:
      "Every child deserves to feel known, valued and cared for."
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Knowledge that matters",
    description:
      "Professional training and a commitment to children's development."
  },
  {
    number: "03",
    icon: Sprout,
    title: "Growing together",
    description:
      "Building confidence, independence and meaningful relationships."
  }
];

export default function MeetTheTeamPage() {
  const teamCount = teamGroups.reduce(
    (total, group) => total + group.members.length,
    0
  );

  return (
    <main id="main-content">

      {/* =====================================================
          EDITORIAL TEAM HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-forest text-cream">

        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-48 -top-48 size-[38rem] rounded-full border border-butter/[0.08]" />

          <div className="absolute -right-32 -top-32 size-[26rem] rounded-full border border-butter/[0.08]" />

          <div className="absolute -left-40 bottom-[-18rem] size-[35rem] rounded-full bg-[#315e48]/40 blur-[100px]" />

          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-butter/30 to-transparent" />
        </div>

        <PageContainer
          width="wide"
          className="relative grid items-center gap-14 py-20 sm:py-24 lg:min-h-[620px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28"
        >

          {/* LEFT: MAIN MESSAGE */}
          <Reveal direction="left">

            {/* Breadcrumb */}
            <div className="mb-12 flex items-center gap-3 text-[10px] font-medium tracking-wide text-cream/45">
              <Link
                href="/"
                className="transition-colors hover:text-butter"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-butter">
                Our people
              </span>
            </div>

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-9 bg-butter" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-butter">
                The people behind Beanstalk
              </p>

            </div>

            {/* Main heading */}
            <h1 className="max-w-[720px] font-display text-[3.5rem] leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem] xl:text-[6rem]">

              Little lives.

              <span className="block italic text-butter">
                Big beginnings.
              </span>

              <span className="mt-3 block text-cream/90">
                Wonderful people.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-lg text-sm leading-8 text-cream/65 sm:text-base">
              Behind every happy discovery, every new friendship
              and every little milestone is a team that cares.
              Get to know the people who make Beanstalk special.
            </p>

            {/* Bottom information */}
            <div className="mt-10 flex flex-wrap items-center gap-6">

              <Link
                href="/arrange-a-visit"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-butter px-6 text-xs font-semibold text-forest transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8d48e]"
              >
                Come and meet us

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full border border-white/15 text-butter">
                  <Users size={16} />
                </div>

                <div>
                  <p className="font-display text-xl text-cream">
                    {teamCount}
                  </p>

                  <p className="text-[9px] uppercase tracking-widest text-cream/45">
                    Team members
                  </p>
                </div>
              </div>

            </div>

          </Reveal>

          {/* RIGHT: BRAND INFORMATION PANEL */}
          <Reveal
            direction="right"
            delay={0.15}
          >

            <div className="relative rounded-[1.75rem] border border-white/10 bg-[#f7f5eb] p-6 text-forest shadow-[0_25px_80px_rgba(0,0,0,0.18)] sm:p-9 lg:p-10">

              {/* Top label */}
              <div className="flex items-center justify-between border-b border-forest/10 pb-6">

                <div className="flex items-center gap-2">
                  <Sparkles
                    size={15}
                    className="text-[#ad8950]"
                  />

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-forest/65">
                    The Beanstalk approach
                  </p>
                </div>

                <span className="font-display text-xl italic text-forest/25">
                  B.
                </span>

              </div>

              {/* Panel heading */}
              <div className="py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#78977c]">
                  More than a team
                </p>

                <h2 className="mt-3 max-w-sm font-display text-3xl leading-[1.1] tracking-[-0.035em] sm:text-4xl">
                  Good care starts with good people.
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-7 text-forest/60">
                  The people around a child help shape their
                  everyday experiences. That is why getting
                  to know our team matters.
                </p>
              </div>

              {/* Values */}
              <div className="border-t border-forest/10">

                {teamValues.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={value.number}
                      className="group flex items-start gap-4 border-b border-forest/10 py-5 last:border-b-0"
                    >

                      <span className="pt-1 text-[10px] font-semibold tracking-widest text-[#9aab91]">
                        {value.number}
                      </span>

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e9eee5] text-forest transition-colors duration-300 group-hover:bg-butter">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      <div>
                        <h3 className="font-display text-lg text-forest">
                          {value.title}
                        </h3>

                        <p className="mt-1 text-xs leading-6 text-forest/55">
                          {value.description}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between rounded-xl bg-forest px-5 py-4 text-cream">

                <p className="text-[10px] font-medium tracking-wide text-cream/75">
                  Every child matters.
                </p>

                <Sprout
                  size={19}
                  className="text-butter"
                />

              </div>

            </div>

          </Reveal>

        </PageContainer>
      </section>


      {/* =====================================================
          TEAM DIRECTORY
      ===================================================== */}

      <section className="bg-cream py-20 sm:py-24 lg:py-28">

        <PageContainer width="wide">

          {/* Directory introduction */}
          <Reveal className="mb-16 flex flex-col justify-between gap-6 border-b border-forest/15 pb-9 lg:flex-row lg:items-end">

            <div>
              <p className="eyebrow mb-4">
                Get to know us
              </p>

              <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.04em] text-forest sm:text-5xl lg:text-6xl">
                The people you'll
                <span className="block italic text-[#78977c]">
                  get to know.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted">
              From nursery leadership to the practitioners
              who spend each day with the children, meet the
              people behind the Beanstalk experience.
            </p>

          </Reveal>


          {/* Staff groups */}
          <div className="space-y-24 lg:space-y-32">

            {teamGroups.map((group, groupIndex) => (

              <section
                key={group.id}
                aria-labelledby={`${group.id}-heading`}
              >

                {/* Group heading */}
                <Reveal className="mb-9 grid gap-5 border-b border-forest/10 pb-7 md:grid-cols-[1fr_auto] md:items-end">

                  <div>

                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#78977c]">
                      Part {String(groupIndex + 1).padStart(2, "0")}
                      <span className="mx-2 text-forest/25">/</span>
                      {group.members.length} people
                    </p>

                    <h2
                      id={`${group.id}-heading`}
                      className="font-display text-3xl leading-tight tracking-[-0.035em] text-forest sm:text-4xl lg:text-5xl"
                    >
                      {group.title}
                      <span className="text-[#78977c]">.</span>
                    </h2>

                  </div>

                  <p className="max-w-sm text-sm leading-7 text-muted md:text-right">
                    {group.description}
                  </p>

                </Reveal>


                {/* Team cards */}
                <StaggerContainer
                  className={`grid items-stretch gap-6 sm:grid-cols-2 ${
                    group.id === "leadership"
                      ? "xl:grid-cols-2 xl:gap-8"
                      : "xl:grid-cols-3 xl:gap-6"
                  }`}
                >

                  {group.members.map((member) => (

                    <StaggerItem key={member.slug}>
                      <TeamMemberCard member={member} />
                    </StaggerItem>

                  ))}

                </StaggerContainer>

              </section>

            ))}

          </div>


          {/* Closing invitation */}
          <Reveal className="mt-24 overflow-hidden rounded-[1.75rem] bg-[#e9eee5] p-7 sm:p-10 lg:p-12">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <p className="eyebrow mb-4">
                  A personal introduction
                </p>

                <h2 className="font-display text-3xl leading-tight tracking-[-0.035em] text-forest sm:text-4xl lg:text-5xl">
                  We'd love for you to meet us.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-forest/65">
                  Come and see the nursery, meet the people
                  who make it special and discover what a
                  day at Beanstalk could look like for your child.
                </p>

              </div>

              <Link
                href="/arrange-a-visit"
                className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-4 rounded-full bg-forest px-7 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#254b3c]"
              >
                Arrange a visit

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

          </Reveal>

        </PageContainer>
      </section>


      {/* FINAL CTA */}
      <CTASection
        title="The best way to discover Beanstalk is to experience it."
        description="Come and see the nursery, meet the team and ask anything you like. There is no obligation."
      />

    </main>
  );
}
