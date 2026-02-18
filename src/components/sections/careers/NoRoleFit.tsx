const careersGrowthImg = '/assets/careers-growth.png';

export const NoRoleFit = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See a Role That Fits?
            </h2>

            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-12">
              <p>
                We're always looking for exceptional talent in AI, engineering, product, transformation, and orchestration.
              </p>
              <p>
                If you believe you can contribute to enterprise-scale AI execution, we'd love to hear from you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Submit Your Profile:
              </h3>
              <p className="text-foreground/70 mb-6">
                You can share your resume and details directly through our candidate form:
              </p>
              <a href="#" className="btn-hero inline-block">
                Submit your resume
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={careersGrowthImg}
              alt="Career growth illustration"
              className="w-64 opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
