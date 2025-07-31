import SectionTable from '@/components/features/elearning/SectionTable';
import { udm002Data } from '@/data/elearning/udm002';

const Udm002 = () => {
  return (
    <SectionTable 
      title={udm002Data.title}
      sections={udm002Data.sections}
    />
  );
}

export default Udm002;