import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound: React.FC = () => {
  usePageMeta({
    title: "Page not found | Zoe Roberts",
    description: "That page doesn't exist.",
    path: "/404",
  });

  return (
    <Layout>
      <section className="flex min-h-[55vh] items-center py-16">
        <div className="container max-w-lg text-center">
          <p className="font-display text-6xl font-extrabold text-sunshine">404</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink">
            We couldn’t find that page
          </h1>
          <p className="mt-4 text-slate">
            It may have moved. Try one of these instead.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="rounded-lg bg-ink px-5 py-2.5 font-display font-bold text-white transition hover:bg-hero-blue"
            >
              Home
            </Link>
            <Link
              to="/free-guide"
              className="rounded-lg bg-sunshine px-5 py-2.5 font-display font-bold text-ink transition hover:brightness-95"
            >
              Free journal
            </Link>
            <Link
              to="/book"
              className="rounded-lg border-2 border-ink px-5 py-2.5 font-display font-bold text-ink transition hover:bg-ink hover:text-white"
            >
              The book
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
