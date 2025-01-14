import { CommandMenu } from "@/components/command-menu";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Metadata } from "next";

interface Props {
  variant: "backend" | "fullstack";
}

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page({ variant }: Props) {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-6 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-12 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty text-base text-primary">
              {variant === "backend"
                ? RESUME_DATA.about
                : RESUME_DATA.fullstackAbout}
            </p>
            <p className="max-w-md items-center text-pretty text-sm text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  Phone:{" "}
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.whatsapp ? (
                <a href={`tel:${RESUME_DATA.contact.whatsapp}`}>
                  Whatsapp:{" "}
                  <span className="underline">
                    {RESUME_DATA.contact.whatsapp}
                  </span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty text-sm text-muted-foreground">
            {variant === "backend"
              ? RESUME_DATA.summary
              : RESUME_DATA.fullstackSummary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
            {RESUME_DATA.skills.map((skill) => skill).join(", ")}.
            {/* {RESUME_DATA.skills.map((skill) => {
              return <Badge variant="secondary" key={skill}>{skill}</Badge>;
            })} */}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Professional Experience</h2>
          <div className="grid grid-cols-1 gap-8">
            {RESUME_DATA.work.map((work) => {
              return (
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <div>{work.title}</div>

                        {/* <span className="inline-flex items-center gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span> */}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end}
                      </div>
                    </div>

                    <h4>
                      <a
                        href={work.link}
                        className="text-sm leading-none hover:underline print:text-blue-800 print:underline"
                      >
                        {work.company}
                      </a>
                    </h4>
                    <div className="gap-y-3" />
                  </CardHeader>
                  <CardContent className="mt-2 text-sm">
                    <ul className="list-disc">
                      {work.accomplishments.map((accomplishment) => (
                        <li key={accomplishment} className="mb-2">
                          {accomplishment}
                        </li>
                      ))}
                    </ul>
                    {/* {work.description} */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Personal Projects</h2>
          <div className="-mx-2 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2 md:grid-cols-1 lg:grid-cols-1">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          // {
          //   url: RESUME_DATA.personalWebsiteUrl,
          //   title: "Personal Website",
          // },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
