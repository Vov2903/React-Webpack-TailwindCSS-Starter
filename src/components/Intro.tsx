import React from 'react'

const Intro = () => {
  return (
    <>
      <div className="text-center">
        <header className="bg-purple-900 mt-4 mx-3 p-6 rounded shadow-lg">
          <h1 className="text-white text-3xl ">
            React-Webpack-TailwindCSS Starter
          </h1>
        </header>
        <div className="bg-purple-500 m-3 p-8 rounded shadow-lg">
          <ul className="text-white">
            <li>
              React based starter with Webpack
              <span role="img" aria-label="emoji">
                ✨
              </span>
              and TailwindCSS🎨 configuration
            </li>
            <li>
              Gives complete control over the app unlike CRA which abstracts
              away the project setup process
              <span role="img" aria-label="emoji">
                😵
              </span>
            </li>
            <li>
              Configured with ESLint
              <span role="img" aria-label="emoji">
                ⚡
              </span>
              , Prettier{' '}
              <span role="img" aria-label="emoji">
                🌈
              </span>{' '}
              and Husky{' '}
              <span role="img" aria-label="emoji">
                ✅
              </span>{' '}
              for providing linting and formatting features along with
              pre-commit checks
            </li>
          </ul>
          <div className="mt-5 bg-purple-800 p-8 rounded">
            <h2 className="text-lg text-white font-bold">Kunal Kumar Verma</h2>
            <a
              href="https://github.com/KKVANONYMOUS"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-gray-200 font-semibold hover:text-purple-300">
                @kkvanonymous
              </div>
            </a>
          </div>
        </div>

        <div className="text-base pt-4 mb-4">
          <a
            className="bg-purple-900 text-white p-3 rounded no-underline hover:bg-purple-700 ml-2"
            href="https://github.com/KKVANONYMOUS/React-Webpack-TailwindCSS-Starter"
            target="_blank"
            rel="noreferrer"
          >
            Source on Github
          </a>
        </div>
      </div>
    </>
  )
}

export default Intro
        