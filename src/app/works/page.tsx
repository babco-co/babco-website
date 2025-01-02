import Header from "@/components/header";
import { Spacer } from "@/components/spacer";

export default function MerchPage() {
  return (
    <div className="w-full min-h-screen">
      <Spacer className="w-full  mt-5 px-5">
        <Header />
      </Spacer>
      <div className="flex items-center justify-center h-screen">
        <p>Works</p>
      </div>
    </div>
  );
}
