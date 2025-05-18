import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import CartList from "../../components/lists/CartList/CartList";
import PaymentSection from "../../sections/PaymentSection/PaymentSection";

export default function Cart() {
  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "سلة الشراء", path: "/cart" },
        ]}
      />

      <div className="myContainer SectionPadding grid grid-cols-1 xl:grid-cols-3 gap-4">
        <CartList />
        <PaymentSection />
      </div>
    </section>
  );
}
