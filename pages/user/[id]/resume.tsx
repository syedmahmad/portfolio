import Bar from '../../../components/Bar'
import { languages, tools } from '../../../data'

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Bacholer's In Computer Science
            </h5>
            <p className="font-semibold">
              University of Management & Technology (2017-2021)
            </p>
            <p className="my-3">
              I have done my Bacholer's in Computer Science from University of
              Management and Technology, Lahore (UMT).
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Website Developer Jr.</h5>
            <p className="font-semibold">Freelancer in an co-working space</p>
            <p className="my-3">
              I am doing this job because i like learn how the things actually
              work and what is the phenomenan behind all these workings of the
              computer system
            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
