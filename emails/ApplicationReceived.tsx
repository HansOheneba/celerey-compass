import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ApplicationReceivedEmailProps {
  preferredName: string;
  email: string;
}

export function ApplicationReceivedEmail({
  preferredName,
  email,
}: ApplicationReceivedEmailProps) {
  const paymentLink = `https://buy.stripe.com/3cI3cv6ng9MB4yffeV9Ve07?prefilled_email=${encodeURIComponent(
    email,
  )}`;

  return (
    <Html lang="en">
      <Head />
      <Preview>
        Your Compass application is in... complete your enrolment to get
        started.
      </Preview>

      <Tailwind>
        <Body className="bg-slate-100 font-sans">
          <Container className="mx-auto py-12 px-4 max-w-xl">
            {/* Brand label */}
            <Text className="text-xs font-bold tracking-widest uppercase text-slate-400 text-center m-0 mb-2">
              Compass • A Celerey Program
            </Text>

            {/* Hero */}
            <Section className="bg-slate-900 rounded-2xl px-8 py-10 text-center mt-2">
              <Text className="text-4xl m-0">✅</Text>
              <Heading className="text-white text-2xl font-bold mt-4 mb-2 leading-snug">
                Your Application Is In
              </Heading>
              <Text className="text-slate-400 text-base m-0 leading-relaxed">
                You’re one step closer to starting your journey with Compass.
              </Text>
            </Section>

            {/* Main card */}
            <Section className="bg-white rounded-2xl px-8 py-8 mt-4">
              <Text className="text-slate-800 text-base leading-7 m-0 mb-4">
                Hey <strong>{preferredName}</strong>,
              </Text>

              <Text className="text-slate-600 text-base leading-7 m-0 mb-4">
                We’ve received your application for{" "}
                <strong className="text-slate-800">Compass</strong>.
              </Text>

              <Text className="text-slate-600 text-base leading-7 m-0 mb-4">
                Compass is a career discovery and experience program built by{" "}
                <strong className="text-slate-800">Celerey</strong> to help
                ambitious young people gain clarity, build real skills, and
                access meaningful opportunities.
              </Text>

              <Text className="text-slate-600 text-base leading-7 m-0">
                Completing this application already shows initiative and that
                matters more than you think.
              </Text>

              <Hr className="border-slate-200 my-6" />

              {/* What happens next */}
              <Text className="text-xs font-bold tracking-widest uppercase text-slate-400 m-0 mb-4">
                What Happens Next
              </Text>

              <Section className="bg-slate-50 rounded-xl px-6 py-4 mb-2">
                <Text className="text-slate-800 text-sm font-semibold m-0 mb-1">
                  📋 &nbsp;Application review
                </Text>
                <Text className="text-slate-500 text-sm m-0 leading-relaxed">
                  We’re reviewing your responses to understand your goals and
                  fit.
                </Text>
              </Section>

              <Section className="bg-slate-50 rounded-xl px-6 py-4 mb-2">
                <Text className="text-slate-800 text-sm font-semibold m-0 mb-1">
                  💳 &nbsp;Complete your enrolment
                </Text>
                <Text className="text-slate-500 text-sm m-0 leading-relaxed">
                  Secure your place by completing payment.
                </Text>
              </Section>

              <Section className="bg-slate-50 rounded-xl px-6 py-4">
                <Text className="text-slate-800 text-sm font-semibold m-0 mb-1">
                  🚀 &nbsp;Begin your journey
                </Text>
                <Text className="text-slate-500 text-sm m-0 leading-relaxed">
                  Once confirmed, you’ll receive onboarding details and next
                  steps.
                </Text>
              </Section>

              <Hr className="border-slate-200 my-6" />

              {/* CTA */}
              <Text className="text-slate-600 text-base leading-7 m-0 mb-6">
                To secure your spot in Compass, complete your enrolment below.
              </Text>

              <Button
                href={paymentLink}
                className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold text-sm inline-block box-border"
              >
                Complete My Enrolment →
              </Button>

              <Hr className="border-slate-200 my-6" />

              <Text className="text-slate-600 text-base leading-7 m-0">
                Have questions? Just reply to this email — we’ll be happy to
                help.
              </Text>

              <Text className="text-slate-800 text-base leading-7 m-0 mt-4">
                — The Compass Team
              </Text>
            </Section>
            <Section className="mt-6 text-center">
              <Text className="text-xs text-slate-400 leading-relaxed m-0 mb-3">
                You’re receiving this because you applied to Compass, a program
                by Celerey.
              </Text>

              <Text className="text-xs text-slate-500 leading-relaxed m-0 mb-2">
                Need help or have questions?
              </Text>

              <Text className="text-xs text-slate-600 leading-relaxed m-0">
                <a
                  href="mailto:compass@celerey.co"
                  className="text-slate-800 underline"
                >
                  compass@celerey.co
                </a>
                {" • "}
                <a
                  href="https://wa.me/233535805227"
                  className="text-slate-800 underline"
                >
                  WhatsApp Us
                </a>
                {" • "}
                <a
                  href="tel:+233535805227"
                  className="text-slate-800 underline"
                >
                  +233 53 580 5227
                </a>
              </Text>

              <Text className="text-xs text-slate-400 mt-4 leading-relaxed">
                Sent to <span className="text-slate-500">{email}</span>
                <br />© {new Date().getFullYear()} Celerey. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ApplicationReceivedEmail.PreviewProps = {
  preferredName: "Alex",
  email: "alex@example.com",
} satisfies ApplicationReceivedEmailProps;

export default ApplicationReceivedEmail;
