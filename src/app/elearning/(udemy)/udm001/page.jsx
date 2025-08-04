import SectionTable from '@/components/features/elearning/SectionTable';
import { udm001Data } from '@/data/elearning/udm001';

const Udm001 = () => {
  return (
    <SectionTable
      courseId={udm001Data.courseId}
      courseName={udm001Data.courseName}
      sections={udm001Data.sections}
      basePath={udm001Data.basePath}
      showDescription={false}
    />
  );
};

export default Udm001;