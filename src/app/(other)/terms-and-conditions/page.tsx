import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StarBucks Menu - Terms-&-Conditions",
  description: "Starbucks offers a diverse menu, including espresso, coffee, tea, bakery items, breakfast, and lunch options. In addition to their specialty coffee drinks, they also provide a selection of snacks and baked goods for those seeking a quick bite.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl px-[20px]  mx-auto py-4 mt-6">
      <h1 className="text-center font-bold text-3xl mb-3">
        Terms and Conditions
      </h1>
      <p>Welcome to the Starbucks Menu with Prices website!</p>
      <p className="mb-4">
        By accessing or using this website, you agree to be bound by these terms
        and conditions (&quot;Terms&quot;) and all applicable laws and
        regulations.
      </p>

      <h3 className="text-2xl font-semibold mb-2">Information Provided</h3>

      <p className="mb-4">
        This website provides information about Starbucks menu items and their
        prices. We make reasonable efforts to ensure the accuracy of the
        information, but we cannot guarantee it. Prices may vary depending on
        your location and other factors. We reserve the right to modify the menu
        and pricing at any time without prior notice.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Use of the Website</h2>
      <p className="mb-4">
        This website is for your personal, non-commercial use only. You may not
        modify, copy, distribute, transmit, display, perform, reproduce,
        publish, license, create derivative works from, transfer, or sell any
        information or content obtained from this website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Disclaimer</h2>

      <p className="mb-4">
        THE INFORMATION AND CONTENT ON THIS WEBSITE ARE PROVIDED &quot;AS
        IS&quot; WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
        LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THE ACCURACY,
        COMPLETENESS, OR RELIABILITY OF THE INFORMATION.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Limitations of Liability</h2>

      <p className="mb-4">
        IN NO EVENT SHALL WE OR ANY THIRD PARTIES BE LIABLE FOR ANY DAMAGES
        (INCLUDING, WITHOUT LIMITATION, DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF
        PROFITS, BUSINESS INTERRUPTION, LOSS OF DATA, OR OTHER INTANGIBLE
        LOSSES) ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE
        THE WEBSITE OR THE CONTENT, EVEN IF WE HAVE BEEN ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>

      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the
        laws of the State of [Your State] without regard to its conflict of law
        provisions.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to the Terms</h2>

      <p className="mb-4">
        We reserve the right to modify these Terms at any time without prior
        notice. We will post any changes on this page. You are responsible for
        checking these Terms periodically for changes. Your continued use of the
        website after the posting of any changes constitutes acceptance of those
        changes.
      </p>

      <h2 className="text-2xl font-semibold ">Contact Us</h2>

      <p className="mb-4 flex gap-2 items-center">
        If you have any questions about these Terms, please{" "}
        <Link
          aria-label="Starbucks Contact Us"
          href="/contact-us"
          className="bg-primary text-white px-4 py-2 rounded-full w-fit md:block hidden"
        >
          contact us
        </Link>
      </p>
      <Link
        href="/contact-us"
        className="bg-primary text-white px-4 py-2 w-fit rounded-full md:hidden block"
      >
        contact us
      </Link>
    </div>
  );
};

export default TermsAndConditions;
