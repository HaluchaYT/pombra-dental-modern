import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Disclaimer | Pombra Dental Excellence",
  description: "Website disclaimer and terms of use for Pombra Dental Excellence.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Website Disclaimer"
      />

      <section className="container-x pb-24 max-w-3xl">
        <div className="prose prose-lg text-ink-700 space-y-6 leading-relaxed">
          <p>
            The information provided on this website is for general informational purposes
            only and is not intended to be a substitute for professional dental or medical
            advice, diagnosis, or treatment. Always seek the advice of your dentist,
            physician, or other qualified healthcare provider with any questions you may
            have regarding a dental or medical condition.
          </p>
          <p>
            No content on this site should ever be construed as personal treatment advice.
            Individual results may vary. Every mouth, treatment plan, and outcome is unique.
            The best way to understand what treatment may be right for you is to schedule
            a consultation with Dr. Pombra.
          </p>
          <p>
            Pombra Dental Excellence makes no representations or warranties as to the
            accuracy, completeness, or reliability of the information provided on this
            website. Use of any information provided is solely at your own risk.
          </p>
          <p>
            External links on this website are provided for convenience only. Pombra Dental
            Excellence does not endorse and is not responsible for the content of any
            external websites.
          </p>
          <p className="text-sm text-ink-500 pt-6 border-t border-teal-100">
            For any questions regarding this disclaimer or our practice, please contact us
            at (650) 873-4776 or drhemapombra@gmail.com.
          </p>
        </div>
      </section>
    </>
  );
}
