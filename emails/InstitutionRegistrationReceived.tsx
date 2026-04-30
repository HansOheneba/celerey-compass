import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface InstitutionRegistrationReceivedEmailProps {
  contactName: string;
  companyName: string;
}

export function InstitutionRegistrationReceivedEmail({
  contactName,
  companyName,
}: InstitutionRegistrationReceivedEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        {companyName} is registered for Compass Experience 2026. Here is what
        happens next.
      </Preview>

      <Tailwind>
        <Body className="bg-[#f0ede6] m-0 font-sans text-center">
          <Container className="mx-auto mt-8 w-full max-w-[620px]">
            <Section>
              <Section className="bg-white px-6 py-4">
                {/* Top nav bar */}
                <Section className="mb-3 px-4">
                  <Row>
                    <Column className="py-2 w-1/2 align-middle">
                      <Img
                        src="https://i.ibb.co/Q39xjgjf/compas-logo.png"
                        alt="Compass"
                        width={52}
                        className="block"
                      />
                    </Column>
                    <Column align="right" className="py-2 w-1/2 align-middle">
                      <Text className="m-0 text-xs font-sans text-right text-[#9ca3af]">
                        {companyName}
                      </Text>
                    </Column>
                  </Row>
                </Section>

                {/* Hero block */}
                <Section className="bg-[#0c1f3f] mb-4 px-8 pt-12 pb-12 rounded-2xl text-center">
                  <Text className="mt-0 mb-3 text-xs font-sans tracking-widest uppercase text-[#4ecdc4]">
                    Host Company
                  </Text>
                  <Heading
                    as="h1"
                    className="mt-0 mb-4 text-4xl font-sans font-bold text-white leading-tight"
                  >
                    Registration Confirmed
                  </Heading>
                  <Text className="m-0 text-base font-sans text-[#94a3b8] leading-relaxed">
                    {companyName} is registered for the Compass Experience 2026
                    cohort.
                  </Text>
                </Section>

                {/* Main body card */}
                <Section className="bg-[#f8f7f4] mb-4 px-8 py-10 rounded-2xl text-left">
                  <Text className="mt-0 mb-5 text-base font-sans text-[#1e293b]">
                    Hello <strong>{contactName}</strong>,
                  </Text>

                  <Text className="mt-0 mb-5 text-base font-sans text-[#475569] leading-7">
                    Thank you for registering{" "}
                    <strong className="text-[#1e293b]">{companyName}</strong> as
                    a host company for the{" "}
                    <strong className="text-[#1e293b]">
                      Compass Experience
                    </strong>{" "}
                    programme. Your submission is in and the Compass team will
                    be in touch shortly with next steps.
                  </Text>

                  <Text className="mt-0 mb-8 text-base font-sans text-[#475569] leading-7">
                    In the meantime, if you have any questions feel free to
                    reply directly to this email.
                  </Text>

                  <Hr className="border-[#e2e8f0] my-6" />

                  {/* What happens next */}
                  <Text className="mt-0 mb-4 text-xs font-sans font-bold tracking-widest uppercase text-[#9ca3af]">
                    What Happens Next
                  </Text>

                  <Section className="bg-white rounded-xl px-6 py-5 mb-3">
                    <Text className="text-[#1e293b] text-sm font-semibold m-0 mb-1">
                      Student Matching
                    </Text>
                    <Text className="text-[#64748b] text-sm m-0 leading-relaxed">
                      We review your registration and begin matching a student
                      whose interests and goals align with your company.
                    </Text>
                  </Section>

                  <Section className="bg-white rounded-xl px-6 py-5 mb-3">
                    <Text className="text-[#1e293b] text-sm font-semibold m-0 mb-1">
                      Pre-Programme Briefing
                    </Text>
                    <Text className="text-[#64748b] text-sm m-0 leading-relaxed">
                      Your assigned Compass contact will share preparation
                      materials and introduce you to your student before July 6.
                    </Text>
                  </Section>

                  <Section className="bg-white rounded-xl px-6 py-5">
                    <Text className="text-[#1e293b] text-sm font-semibold m-0 mb-1">
                      Programme Kicks Off
                    </Text>
                    <Text className="text-[#64748b] text-sm m-0 leading-relaxed">
                      Students join your team from July 6 to August 7, 2026 for
                      a hands-on placement experience.
                    </Text>
                  </Section>

                  <Hr className="border-[#e2e8f0] my-8" />

                  {/* Programme details pill row */}
                  <Row>
                    <Column className="w-1/2 pr-2 align-top">
                      <Section className="bg-white rounded-xl px-5 py-4 text-left">
                        <Text className="m-0 text-xs font-sans font-bold tracking-widest uppercase text-[#9ca3af] mb-1">
                          Dates
                        </Text>
                        <Text className="m-0 text-sm font-sans text-[#1e293b] font-semibold">
                          July 6 to August 7, 2026
                        </Text>
                      </Section>
                    </Column>
                    <Column className="w-1/2 pl-2 align-top">
                      <Section className="bg-white rounded-xl px-5 py-4 text-left">
                        <Text className="m-0 text-xs font-sans font-bold tracking-widest uppercase text-[#9ca3af] mb-1">
                          Company
                        </Text>
                        <Text className="m-0 text-sm font-sans text-[#1e293b] font-semibold">
                          {companyName}
                        </Text>
                      </Section>
                    </Column>
                  </Row>
                </Section>

                {/* CTA block */}
                <Section className="bg-[#0c1f3f] mb-4 px-8 py-12 rounded-2xl text-center">
                  <Text className="mt-0 mb-3 text-base font-sans text-[#94a3b8] leading-relaxed">
                    Questions or changes to your registration? We are here.
                  </Text>
                  <Heading
                    as="h2"
                    className="mt-0 mb-6 text-2xl font-sans font-bold text-white"
                  >
                    Get in touch with Compass
                  </Heading>
                  <Button
                    href="mailto:compass@celerey.co"
                    className="inline-block bg-[#14b8a6] px-8 py-4 rounded-lg text-sm font-sans font-semibold text-white text-center leading-6"
                  >
                    Email the Compass Team
                  </Button>
                </Section>

                {/* Footer */}
                <Section className="bg-white">
                  <Row>
                    <Column className="px-6 py-10 text-center">
                      <Img
                        src="https://i.ibb.co/Q39xjgjf/compas-logo.png"
                        alt="Compass"
                        width={40}
                        className="block mx-auto mb-4"
                      />
                      <Text className="mx-auto mt-0 mb-6 max-w-[300px] text-xs font-sans text-[#9ca3af] text-center leading-5">
                        Compass Experience is a programme by Celerey, helping
                        ambitious students access real-world work experience.
                      </Text>

                      <Section className="mb-6">
                        <Link
                          href="https://celerey.co"
                          className="inline-block px-2 align-middle text-xs text-[#9ca3af]"
                        >
                          celerey.co
                        </Link>
                        <Text className="inline-block px-2 align-middle text-xs text-[#d1d5db] m-0">
                          |
                        </Text>
                        <Link
                          href="mailto:compass@celerey.co"
                          className="inline-block px-2 align-middle text-xs text-[#9ca3af]"
                        >
                          compass@celerey.co
                        </Link>
                      </Section>

                      <Text className="m-0 text-xs font-sans text-[#d1d5db] text-center">
                        This email was sent to the primary contact registered
                        for {companyName}.
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
