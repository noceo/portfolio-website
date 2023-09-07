import Button from "@/components/Button";

export default function Contact() {
  return (
    <div className="page-contact">
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 col-xl-6">
              <h2 data-title="nuntia.">nuntia.</h2>
              <h3>I would like to know about your future project. Maybe I can help you with it.</h3>
              <p>Email: paulschade98@gmail.com</p>
              <Button asLink={true} href="mailto::paulschadde98@gmail.com">
                Contact me
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
