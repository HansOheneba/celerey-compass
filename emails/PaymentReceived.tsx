import {
  Body,
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

interface PaymentReceivedEmailProps {
  preferredName: string;
  email: string;
}

export function PaymentReceivedEmail({
  preferredName,
  email,
}: PaymentReceivedEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        Payment received — we&apos;ll be in touch with you very shortly.
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
              <Text className="text-4xl m-0">💳</Text>
              <Heading className="text-white text-2xl font-bold mt-4 mb-2 leading-snug">
                Payment Received
              </Heading>
              <Text className="text-slate-400 text-base m-0 leading-relaxed">
                Your spot in Compass is now secured.
              </Text>
            </Section>

            {/* Main card */}
            <Section className="bg-white rounded-2xl px-8 py-8 mt-4">
              <Text className="text-slate-800 text-base leading-7 m-0 mb-4">
                Hey <strong>{preferredName}</strong>,
              </Text>

              <Text className="text-slate-600 text-base leading-7 m-0 mb-4">
                We&apos;ve received your payment for{" "}
                <strong className="text-slate-800">Compass</strong> — thank you!
              </Text>

              <Text className="text-slate-600 text-base leading-7 m-0 mb-4">
                Your enrolment is now confirmed. A member of our team will be in
                touch with you{" "}
                <strong className="text-slate-800">very shortly</strong> with
                everything you need to get started.
              </Text>

              <Text className="text-slate-600 text-base leading-7 m-0">
                We&apos;re genuinely excited to have you on this journey. Get
                ready.
              </Text>

              <Hr className="border-slate-200 my-6" />

              {/* What happens next */}
              <Text className="text-xs font-bold tracking-widest uppercase text-slate-400 m-0 mb-4">
                What Happens Next
              </Text>

              <Section className="bg-slate-50 rounded-xl px-6 py-4 mb-2">
                <Text className="text-slate-800 text-sm font-semibold m-0 mb-1">
                  📬 &nbsp;Welcome message
                </Text>
                <Text className="text-slate-500 text-sm m-0 leading-relaxed">
                  You&apos;ll hear from the Compass team very shortly with your
                  onboarding details.
                </Text>
              </Section>

              <Section className="bg-slate-50 rounded-xl px-6 py-4 mb-2">
                <Text className="text-slate-800 text-sm font-semibold m-0 mb-1">
                  📅 &nbsp;Programme schedule
                </Text>
                <Text className="text-slate-500 text-sm m-0 leading-relaxed">
                  Monday learning sessions, Tuesday to Thursday internship work,
                  and Friday reflections.
                </Text>
              </Section>

              <Section className="bg-slate-50 rounded-xl px-6 py-4">
                <Text className="text-slate-800 text-sm font-semibold m-0 mb-1">
                  🚀 &nbsp;Begin your journey
                </Text>
                <Text className="text-slate-500 text-sm m-0 leading-relaxed">
                  Get ready to gain clarity, build real skills, and access
                  meaningful opportunities.
                </Text>
              </Section>

              <Hr className="border-slate-200 my-6" />

              <Text className="text-slate-600 text-base leading-7 m-0">
                Have questions? Just reply to this email — we&apos;ll be happy
                to help.
              </Text>

              <Text className="text-slate-800 text-base leading-7 m-0 mt-4">
                — The Compass Team
              </Text>
            </Section>

            <Section className="mt-6 text-center">
              <Text className="text-xs text-slate-400 leading-relaxed m-0 mb-3">
                You&apos;re receiving this because you enrolled in Compass, a
                program by Celerey.
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

PaymentReceivedEmail.PreviewProps = {
  preferredName: "Alex",
  email: "alex@example.com",
} satisfies PaymentReceivedEmailProps;

export default PaymentReceivedEmail;
