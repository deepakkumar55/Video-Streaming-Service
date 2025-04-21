import React from 'react';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface PathSkillsProps {
  skills: Skill[];
}

const PathSkills: React.FC<PathSkillsProps> = ({ skills }) => {
  // Helper function to get level color and width
  const getLevelAttributes = (level: string) => {
    switch(level) {
      case 'Beginner':
        return { color: 'bg-green-500', width: 'w-1/3' };
      case 'Intermediate':
        return { color: 'bg-yellow-500', width: 'w-2/3' };
      case 'Advanced':
        return { color: 'bg-red-500', width: 'w-full' };
      default:
        return { color: 'bg-gray-500', width: 'w-1/4' };
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Skills You'll Gain</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          const { color, width } = getLevelAttributes(skill.level);
          
          return (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
              </div>
              
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full`} style={{ width }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PathSkills;
