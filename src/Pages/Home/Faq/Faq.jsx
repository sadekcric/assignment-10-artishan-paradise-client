import faq from "../../../assets/faq.jpg";
const Faq = () => {
  return (
    <div className="lg:mt-10 p-3">
      <div className="mb-5">
        <h3 className="text-3xl lg:text-5xl font-bold text-center goldenText">FAQ HUB</h3>
        <p className="mt-2 font-semibold goldenText lg:text-lg lg:w-2/3 lg:mx-auto text-center">
          Your Go-To Resource for Instant Answers and Solutions. Find clarity on common queries with our concise and comprehensive FAQ
          section.
        </p>
      </div>

      <div className="container goldenBG2 mx-auto p-3 lg:p-6 rounded-xl flex flex-col lg:flex-row items-center gap-5 my-10 font-semibold goldenText">
        <div className="lg:flex-1 ">
          <img className="w-full rounded-xl" src={faq} alt="" />
        </div>

        <div className="lg:flex-1">
          <div className="collapse collapse-arrow bg-[#FFF5E0] mb-3 border-2 goldenBorder ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">How do I create an account?</div>
            <div className="collapse-content">
              <p>
                Click on the "Sign Up" button and fill out the required information. Once completed, you'll receive a confirmation email to
                activate your account.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[#FFF5E0] mb-3 border-2 goldenBorder ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
            <div className="collapse-content">
              <p>
                We accept credit/debit cards, PayPal, and other secure payment methods. Simply select your preferred option during checkout.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[#FFF5E0] mb-3 border-2 goldenBorder ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How can I track my order?</div>
            <div className="collapse-content">
              <p>
                Log in to your account and navigate to the "Order History" section. There, you'll find real-time updates on your order
                status and tracking information.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[#FFF5E0] mb-3 border-2 goldenBorder ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Do you offer refunds or exchanges?</div>
            <div className="collapse-content">
              <p>
                Yes, we have a hassle-free return policy. If you're not satisfied with your purchase, contact our customer support within 30
                days for a refund or exchange.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[#FFF5E0] mb-3 border-2 goldenBorder ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How do I contact customer support?</div>
            <div className="collapse-content">
              <p>
                You can reach our customer support team via email at support@example.com or through the "Contact Us" page on our website.
                We're here to assist you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
