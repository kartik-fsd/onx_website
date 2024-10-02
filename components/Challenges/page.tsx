export const KeyChallenges = () => {
  return (
    <div className="p-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 bg-gray-50">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-700 uppercase rounded-full bg-[#ffcc80]">
            Challenges
          </p>
        </div>

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-indigo-800 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#cfd8dc] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Key</span>
          </span>{" "}
          Problems in Gig Workforce Management
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Onx tackles these critical challenges faced by businesses managing gig
          workers, helping to streamline operations and boost productivity.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-indigo-900 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Inefficient Workforce Management
            </h6>
            <p className="text-sm text-gray-900">
              Managing a large gig workforce manually can lead to errors, missed
              deadlines, and poor allocation of resources.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-indigo-900 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              High Operational Costs
            </h6>
            <p className="text-sm text-gray-900">
              Without streamlined processes, businesses face increased costs due
              to inefficiencies and redundant tasks.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-indigo-900 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Lack of Real-Time Insights
            </h6>
            <p className="text-sm text-gray-900">
              Difficulty in tracking gig workers&apos; performance and progress
              leads to a lack of real-time data, affecting decision-making.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-indigo-900 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Compliance Challenges
            </h6>
            <p className="text-sm text-gray-900">
              Managing regulatory compliance and ensuring all legal requirements
              are met is complex with a dispersed gig workforce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
