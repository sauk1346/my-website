import SectionTable from '@/components/features/elearning/SectionTable';
import { udm002Data } from '@/data/elearning/udm002';

const Udm002 = () => {
  return (
    <SectionTable
      courseId={udm002Data.courseId}
      courseName={udm002Data.courseName}
      sections={udm002Data.sections}
      basePath={udm002Data.basePath}
      showDescription={false}
    />
  );
};

export default Udm002;