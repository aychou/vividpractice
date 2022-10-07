import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-9 py-4">
            <p className="text-sm text-gray-400 font-semibold flex items-center">
              Travel
            </p>
            <div className="font-bold text-xl text-left mb-2">
              Title goes here
            </div>
            <p className="text-subtitle text-base text-left">
              Pair of boats on water in Lago di Braies and another pair of boats
              on water Lago di Braies
            </p>
          </div>
          <div className="px-6 pt-3 pb-6 flex justify-around">
            <button className="bg-light-grey hover:black text-dark-grey text-xs font-semibold py-3 px-9 rounded">
              ACTION 1
            </button>
            <button className="bg-dark-grey hover:black text-light-grey text-xs font-semibold py-3 px-9 rounded">
              ACTION 2
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
