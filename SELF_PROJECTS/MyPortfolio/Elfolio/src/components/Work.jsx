import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({  
    index,
    name, 
    description,
    tags, 
    image, 
    source_code_link 
  }) =>{
  return (
    <>
    {/* motion div allow us to create render div with motion elements like tilt etc... */}
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
        <Tilt options={{
          max: 45,
          scale: 1,
          speed :450,
        }}
        className='bg-darkTeal p-5 rounded-xl sm:w-[340px] w-full'
        >
          <div className="relative w-full h-[200px]"
          >
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl"
            />
            <div 
            className="absolute inset-0 flex justify-end m-3 card-img_hover"
            >
            {/* github icon div */}
            <div
              onClick={()=> window.open 
              (source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            </div>
          </div>
          {/* div for name and descripton of  projects */}
          <div
          className="mt-5"
          >
            <h3 className="text-white font-bold text-[24px] " >{name}</h3>
            <p className="mt-2 text-black text-[10]px]">{description}</p>
          </div>
          <div 
          className="mt-4 flex flex-wrap gap-2 "
          >
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}` }
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}


const Work = () => {
  return (
    <>  
      <motion.div varients={textVariant()} >
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText} >
          Projects | What I made!          
        </h2>
      </motion.div>
      
      <div className="w-full flex">
        <motion.p
        varients={fadeIn("","",0.1,1)}
        className="mt-3 text-secondary text-[17px] max-w-xl leading-[30px]"
        >
          These Projects shows my skill set and experience in the filed of Web Development. Each project is provided with a detailed description, project link and tech stack that have been used to with it . 
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7" >
        {projects.map((project, index) =>(
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Work, "projects")