import type {ReactNode} from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import {Badge} from "@site/src/components/ui/badge";
import {Button} from "@site/src/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@site/src/components/ui/card";

import styles from "./index.module.css";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Real-time coordination",
    description:
      "Flightstrips keeps every position aligned with low-latency strip syncing and automatic conflict resolution.",
  },
  {
    title: "Smart strip templates",
    description:
      "Build reusable templates for VATSIM events, visualise slot priorities, and adapt instantly when plans shift.",
  },
  {
    title: "Integrated procedures",
    description:
      "Bring SOPs, voice notes, and runway configs together so new controllers can ramp in without missing context.",
  },
];

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy} data-theme="dark">
          <h1 className={styles.heroTitle}>Modern strip management for busy virtual skies.</h1>
          <p className={styles.heroSubtitle}>
            Flightstrips orchestrates departures, arrivals, and tower coordination with a crisp, controller-first
            workspace built for VATSIM operations.
          </p>
          <div className={styles.heroActions}>
            <Button to="/docs/intro" size="lg">
              Explore the docs
            </Button>
            <Button to="/docs/changelog" variant="secondary" size="lg">
              Request early access
            </Button>
          </div>
        </div>
        <div className={styles.heroPreview}>
            <img src="/img/hero-preview.jpg" alt="Hero Preview" />
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className={styles.features}>
      <div className={styles.sectionIntro}>
        <Badge>Designed for controllers</Badge>
        <h2 className={styles.sectionTitle}>Everything you need on one strip bay.</h2>
        <p className={styles.sectionSubtitle}>
          From major events to late-night locals, Flightstrips keeps sectors calm with automation that feels invisible.
        </p>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaCard}>
        <div>
          <h2 className={styles.ctaTitle}>Bring Flightstrips to your facility.</h2>
          <p className={styles.ctaSubtitle}>
            Join the next wave of VATSIM controllers delivering silky handoffs and confident coordination.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Button to="/docs/intro">Get started</Button>
          <Button to="/docs/support" variant="ghost">
            Talk to the team
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Flightstrips is the modern strip management solution for VATSIM controllers."
    >
      <main className={styles.main}>
        <HeroSection />
        <FeatureGrid />
        <CallToAction />
      </main>
    </Layout>
  );
}
