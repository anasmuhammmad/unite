import AccountProfile from "@/components/forms/AccoutProfile";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();
  const userInfo = {};
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.username || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || userInfo.imageUrl,
  };
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Unite
        <section className="mt-9 bg-dark-2 p-10">
          <AccountProfile user={userData} btnTitle="Continue" />
        </section>
      </p>
    </main>
  );
}
export default Page;
