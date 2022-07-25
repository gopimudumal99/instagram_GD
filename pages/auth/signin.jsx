import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
// it's running in browser
function signInPage({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center 
      min-h-screen py-10 -mt-20 px-14 text-center">
        <img
          className="w-80"
          src="https://links.papareact.com/ocw"
          alt="logo"
        />
        <p>This is not Real app it is built for practice </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 rounded-lg p-3 text-white "
                onClick={() => signIn(provider.id,{callbackUrl:'/'})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//serverside
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signInPage;
