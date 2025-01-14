import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { id: 1, src: '/html.png', title: 'HTML' },
    { id: 2, src: '/css.jpg', title: 'CSS' },
    { id: 3, src: '/bootstrap.png', title: 'BOOTSTRAP' },
    { id: 4, src: '/tailwind.png', title: 'TAILWIND' },
    { id: 5, src: '/js.png', title: 'JAVASCRIPT' },
    { id: 6, src: '/jquery.png', title: 'JQUERY' },
    { id: 7, src: '/react.png', title: 'REACT' },
    { id: 8, src: '/redux.png', title: 'REDUX' },
    { id: 9, src: '/github.png', title: 'GITHUB' },
    { id: 10, src: '/mongodb.png', title: 'MONGODB' },
    { id: 11, src: '/express.png', title: 'EXPRESS' },
    { id: 12, src: '/node.png', title: 'NODE' },
    { id: 13, src: '/nextjs.png', title: 'NEXTJS' },
  ];

  return (
    <div className="border-b border-neutral-900 pt-8 min-h-screen">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-10 text-center text-4xl"
        id="skills"
      >
        SKILLS
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 py-8">
        {skills.map(({ id, src, title }) => (
          <motion.div
            key={id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`shadow-md hover:scale-110 duration-500`}
          >
            <img
              src={src}
              alt={title}
              className="w-24 h-24 mx-auto mb-4"
              style={{ backgroundColor: 'black' }}
            />
            <p className="text-center text-lg font-semibold">{title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
