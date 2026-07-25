import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound: React.FC = () => {
  usePageMeta({
    title: "Page not found | Zoe Roberts",
    description: "That page doesn’t exist.",
    path: "/404",
  });

  return (
    <Layout>
      <section className="section-y">
        <div className="shell">
          <p className="eyebrow">404</p>
          <h1
            className="mt-3 max-w-[16ch] font-heading text-text"
            style={{
              fontSize: "clamp(34px,4.8vw,54px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            We couldn’t find that page
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-neutral-800">
            It may have moved. Try one of these instead.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link to="/free-guide" className="btn-primary btn-lg">
              Get the free journal
            </Link>
            <Link
              to="/"
              className="font-semibold text-accent-700 underline underline-offset-4 self-center"
            >
              Back home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
