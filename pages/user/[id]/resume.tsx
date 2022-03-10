import Bar from '../../../components/Bar'
import { languages, tools } from '../../../data'
import {getPageData} from '../../api/getData'

const Resume = (props: any) => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              {props?.education?.Degree}
            </h5>
            <p className="font-semibold">
              {props.education.university_name}
            </p>
            <p className="my-3">
              {props.education.description}
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">{props.experience.Name}</h5>
            <p className="font-semibold">{props.experience.sub_name}</p>
            <p className="my-3">
              {props.experience.description}
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

export async function getServerSideProps() {
  let resumeData = await getPageData("/api/resumes?populate=*");  
  
  return {
      props: {
        education: resumeData?.data[0]?.attributes?.Education || null,
        experience: resumeData?.data[0]?.attributes?.Experience || null,
      }
  }
}